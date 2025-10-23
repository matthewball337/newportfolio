import Gallery from "@/app/components/components/Gallery"
import MyGallery from "@/app/lib/gallery.json"

export default function YodeckGallery() {
    return (
        <Gallery galleryImages={JSON.stringify(MyGallery)} />
    )
}