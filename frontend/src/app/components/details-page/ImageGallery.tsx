// components/DetailsPage.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { placeholderImages } from '@/app/details/content.dto';
import Image404 from '@/assets/images/image404.png';
import ImageModal from '@/app/components/details-page/ImageModal';

const placeholderImage = [...placeholderImages];

const ImageGallery = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const mainImage = placeholderImage.length > 0 ? placeholderImage[0].img : Image404;

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4">
                <Image
                    src={mainImage}
                    alt="Valley of Flowers"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-md"
                />
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-3 gap-2 w-full h-[calc(100%-400px)]">
                {/* Thumbnails */}
                {placeholderImage.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex justify-center h-full">
                        <Image
                            src={item.img}
                            alt={`Thumbnail ${index}`}
                            layout="responsive"
                            width={120}
                            height={120}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
                {/* Last thumbnail that opens modal */}
                {placeholderImage.length > 2 && (
                    <div
                        onClick={handleOpenModal}
                        className="flex justify-center h-full cursor-pointer"
                    >
                        <div className="relative w-full h-full flex items-center justify-center rounded-md bg-gray-300">
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-heavy-metal opacity-20 z-5" />
                            <Image
                                src={placeholderImage[2].img}
                                alt={`Thumbnail 2`}
                                layout="responsive"
                                width={120}
                                height={120}
                                className="w-full !h-full object-cover rounded-md"
                            />
                            <div className="absolute text-white font-bold z-10">+{placeholderImage.length - 4} more</div>
                        </div>
                    </div>
                )}
            </div>
            <ImageModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                images={placeholderImage.map(item => item.img)} // Pass all images to the modal
            />
        </div>
    );
};

export default ImageGallery;
