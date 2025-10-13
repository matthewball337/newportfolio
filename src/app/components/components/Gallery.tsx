import { ImageObject } from "@/app/lib/imageObjects"

interface GalleryProps {
    galleryImages: string;
}

export default function Gallery({galleryImages = "[]"}: GalleryProps) {
    const myGallery: ImageObject[] = JSON.parse(galleryImages);

    return (
        <div />
    );
}