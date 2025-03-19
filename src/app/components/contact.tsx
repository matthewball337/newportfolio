'use client'

import React, {useState} from 'react'
import {track} from "@vercel/analytics/react"
type submissionStatus = "none" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submission, setSubmission] = useState<{
    status: submissionStatus;
    message: string;
  }>({ status: "none", message: ""});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    track("Contact Form");
    setSubmitting(true);

    const res = await fetch("/api/mail", {
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
      headers: {
        "Content-Type": "application.json",
      },
      method: "POST",
    });

    const {status, message} = await res.json();

    if (status === "error") {
      setSubmission({ status, message });
      return;
    } else {
      setSubmission({ status, message });
    }

    setSubmitting(false);
  }
  return (
    <div id='contact' className='w-full h-screen bg-[#0096ff] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} action="" className="flex flex-col items-center max-w-[600px] w-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-black text-gray-300 flex justify-center'>Contact</p>
          <p className='text-gray-300 py-4 max-w-[200px] justify-center'>
            // Submit the form below or shoot me an email - matthewball337@gmail.com
          </p>
        </div>
        {submission.status === "error" && (
          <div className="py-12 text-red-300">Submission failed</div>
        )}
          {submission.status === "success" && (
            <div className="py-12 text-green-300">Submission succeeded</div>
          )}
        {submission.status === "none" && (
          <div className="justify-center">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className='bg-[#ccd6f6] p-2'
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className='my-4 p-2 bg-[#ccd6f6]'
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={10}
                required
                className='bg-[#ccd6f6] p-2'
              />
            </div>
            <button
              className='text-white border-2 hover:bg-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center'
              disabled={submitting}
              type="submit"
            >
              Let's Collaborate
            </button>
          </div>
        )};
      </form>
    </div>
  )
}

export default Contact;