"use client"

import { ImageObject } from "@/app/lib/imageObjects"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"

interface GalleryProps {
    galleryImages: string;
}

export default function Gallery({galleryImages = "[]"}: GalleryProps) {
    const myGallery: ImageObject[] = JSON.parse(galleryImages);
    if(myGallery.length === 0) {
        return null;
    }

    const [currentImage, setCurrentImage] = useState(0);


    function prevImage() {
        if(currentImage === 0) {
            setCurrentImage(galleryImages.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    function nextImage() {
        if(currentImage === (myGallery.length - 1)) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#0096ff]">
            <div className="text-white md:w-[450px] w-full leading-2 h-fit self-center">
                <Image
                    src={myGallery[currentImage].source}
                    alt={myGallery[currentImage].title}
                    width={myGallery[currentImage].width}
                    height={myGallery[currentImage].height}
                    className="h-[55%] w-full pt-0 px-0"
                />
                <div className="flex place-self-end">
                    <h1 className="text-xl">{myGallery[currentImage].title}</h1>
                    <p>{myGallery[currentImage].description}</p>
                    <p className="text-sm">{currentImage + 1} out of {myGallery.length} </p>
                </div>
            </div>
            <motion.div 
                className="fixed top-[50%] md:left-4 left-1 text-white font-extrabold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}    
            >
                <button className="h-[44px] w-[44px]" onClick={() => prevImage()}>
                    <HiChevronLeft />
                </button>
            </motion.div>
            <motion.div
                className="fixed top-[50%] md:right-4 right-1 text-white font-extrabold"
                whileHover={{scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <button className="h-[44px] w-[44px]" onClick={() => nextImage()}>
                    <HiChevronRight />
                </button>
            </motion.div>
        </div>
    );
}