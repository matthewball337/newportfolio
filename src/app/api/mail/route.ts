import nodemailer from "nodemailer";
import { track } from "@vercel/analytics/server";
import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server";

type ResponseData = {
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransporter({
    host: "newportfolio.vercel.app",
    port: 587,
    secure: false,
    auth: {
        user: "username@newportfolio.vercel.app",
        pass: "password",
    }

});

async function messageInfo(message: string) {
    const info = transporter.sendMail({
        from: "username@newportfolio.vercel.app",
        to: "matthewball337@gmail.com",
        subject: "Contact",
        text: { message },
        html: `<b>${ message }</b>`,
    })

    console.log("Message sent: %s", info.messageId);
}

export async function POST(request: Request) {
  const response: ResponseData = {};
  const body = await request.json();

  

  try {
    await sql`INSERT INTO "contactEntries" (name, email, message) VALUES (${
      body.name
    }, ${body.email}, ${body.message});`;
    console.log("Successfully added entry");
    track("Added Entry DB", {
      delivered: true,
    });
  } catch (error) {
    console.log(`We ran into an error: ${error}`);
    track("Added Entry DB", {
      delivered: false,
    });
  }

  // I know the formData I sent in my request has name, email, and message fields so I'm just manually grabbing them to format a message
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n

    This email is not monitored.
  `;

  try {
    messageInfo(message);
    response.status = "success";
    response.message = message;
  } catch {
    response.status = "error";
  }

  return NextResponse.json(response);
}