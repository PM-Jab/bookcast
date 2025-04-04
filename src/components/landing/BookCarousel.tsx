"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookCarouselProps } from "@/model/bookModel";
import Image from "next/image";

const BookCarousel: React.FC<BookCarouselProps> = ({ bookRecommeds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bookRecommeds.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative overflow-hidden max-w-full mb-12">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bookRecommeds.map((book, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div
              id="carousel-container"
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <section className="flex items-center justify-center w-fit space-x-1">
                <div className="flex flex-col items-center justify-center bg-amber-500 w-[320px] h-[400px]">
                  <h1>Who also read this book?</h1>
                  <Image
                    src={book.infuencerUrl}
                    alt="influencer"
                    width={320}
                    height={400}
                  />
                </div>

                <div className="flex items-center justify-center bg-amber-500 w-[320px] h-[400px] overflow-hidden">
                  <Image
                    src={book.book.imageUrl}
                    alt="book"
                    width={340}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col items-center justify-center bg-amber-500 w-[320px] h-[400px]">
                  <p className="text-center font-bold mx-4">"{book.opinion}"</p>
                  <div className="flex items-center justify-center w-full ">
                    <div className="px-3 pb-1 bg-black mt-3 mr-0.5"></div>
                    <h1 className="text-center text-2xl font-bold mt-2">
                      {book.infuencerName}
                    </h1>
                  </div>
                  <p className="text-center text-sm font-sans italic">
                    {book.infuencerTitle}
                  </p>
                </div>
              </section>
              <div className="p-4 text-lg font-semibold text-center">
                <p className="text-gray-600">{book.qoute}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          goToSlide(
            (currentIndex - 1 + bookRecommeds.length) % bookRecommeds.length
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="h-6 w-6 text-pink-600" />
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % bookRecommeds.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="h-6 w-6 text-pink-600" />
      </button>
      <div className="flex justify-center mt-4">
        {bookRecommeds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-pink-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
