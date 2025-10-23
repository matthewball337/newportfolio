"use client"

import { ImageObject } from "@/app/lib/imageObjects"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"

interface GalleryProps {
    galleryImages: string;
}

export default function Gallery({galleryImages = "[]"}: GalleryProps) {
    const myGallery: ImageObject[] = JSON.parse(galleryImages);
    const [currentImage, setCurrentImage] = useState(0);
    if(myGallery.length === 0) {
        return null;
    }


    function prevImage() {
        if(currentImage === 0) {
            setCurrentImage(myGallery.length - 1);
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
        <div className="fixed inset-0 w-screen h-screen bg-[#0096ff] mx-auto object-fit flex flex-col justify-items-center">
            <div className="ml-20 mr-20 mt-4 flex justify-center">
                <Image
                    src={myGallery[currentImage].source}
                    alt={myGallery[currentImage].title}
                    width={myGallery[currentImage].width}
                    height={myGallery[currentImage].height}
                    className="pt-0 px-0"
                />
            </div>
            <div className="ml-20 mr-20 text-center">
                <h1 className="text-xl text-pink-600 font-extrabold">{myGallery[currentImage].title}</h1>
                <p className="text-sm">{myGallery[currentImage].description}</p>
                <p className="text-xs">{currentImage + 1} out of {myGallery.length} </p>
            </div>
            <motion.div 
                className="fixed top-[50%] md:left-4 left-1 text-pink-600 font-extrabold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}    
            >
                <button className="h-[44px] w-[44px] text-6xl" onClick={() => prevImage()}>
                    <HiChevronLeft />
                </button>
            </motion.div>
            <motion.div
                className="fixed top-[50%] md:right-4 right-1 text-pink-600 font-extrabold"
                whileHover={{scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <button className="h-[44px] w-[44px] text-6xl" onClick={() => nextImage()}>
                    <HiChevronRight />
                </button>
            </motion.div>
        </div>
    );
}