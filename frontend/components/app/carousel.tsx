import { useState, useEffect } from "react";

const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        }, 3000);
        return () => clearInterval(interval);
    }, [length]);

    return (
        <div className="relative w-full h-64 md:h-96 ">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export { Carousel };