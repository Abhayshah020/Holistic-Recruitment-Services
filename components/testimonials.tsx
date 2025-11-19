"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

interface Review {
    review: string;
    rate: number;
    name: string;
    position: string;
}

const reviews: Review[] = [
    {
        review:
            "Staff at Holistic have gone above and beyond to assist me in finding this position. They were consistent in mentoring me and coaching me in my interview skills promptly, and took the time to assist me outside of office hours which I very much appreciate.",
        rate: 4.5,
        name: "Jack Thompson",
        position: "Office Manager, Sydney Tech Solutions",
    },
    {
        review:
            "In my 8 years of experience working at various management positions in companies around the world, Hellen (Holistic Director) has to be the best boss I've ever worked for in my life so far. She was so understanding, supportive and best mentor over the time I've worked for them. They do their utmost to place all those who come through them. I'd highly recommend this place to anyone seeking job if you are reliable, hardworking and have positive attitude to work.",
        rate: 5,
        name: "Sarah O'Conors",
        position: "Operations Director, Harbour Lane Law Firm",
    },
    {
        review:
            "Snezana is incredible, we spoke every few days to talk about interviews, and when we landed one, she coached me with questions and made sure I was 110 percent prepared for it and also helped me pick out appropriate interviewing clothing.",
        rate: 4,
        name: "Lachlan Evans",
        position: "Facilities Coordinator, Sydney City Markets",
    },
    {
        review:
            "Holistic gave me a chance when I was in a bad way. Through them I found the best job I've ever had. Most of my previous jobs I've only lasted one year but I've been in this job 3 years. If you're a good worker they have work available. If you're unreliable or not a good worker then they'll stop giving you shifts which might be what happened with the people complaining here.",
        rate: 3.5,
        name: "Mia Campbell",
        position: "Practice Manager, Bondi Family Medical Centre",
    },
    {
        review:
            "Staff at Holistic have gone above and beyond to assist me in finding this position. They were consistent in mentoring me and coaching me in my interview skills promptly, and took the time to assist me outside of office hours which I very much appreciate.",
        rate: 4.5,
        name: "Jack Thompson",
        position: "Office Manager, Sydney Tech Solutions",
    },
    {
        review:
            "In my 8 years of experience working at various management positions in companies around the world, Hellen (Holistic Director) has to be the best boss I've ever worked for in my life so far. She was so understanding, supportive and best mentor over the time I've worked for them. They do their utmost to place all those who come through them. I'd highly recommend this place to anyone seeking job if you are reliable, hardworking and have positive attitude to work.",
        rate: 5,
        name: "Sarah O'Conors",
        position: "Operations Director, Harbour Lane Law Firm",
    },
    {
        review:
            "Snezana is incredible, we spoke every few days to talk about interviews, and when we landed one, she coached me with questions and made sure I was 110 percent prepared for it and also helped me pick out appropriate interviewing clothing.",
        rate: 4,
        name: "Lachlan Evans",
        position: "Facilities Coordinator, Sydney City Markets",
    },
    {
        review:
            "Holistic gave me a chance when I was in a bad way. Through them I found the best job I've ever had. Most of my previous jobs I've only lasted one year but I've been in this job 3 years. If you're a good worker they have work available. If you're unreliable or not a good worker then they'll stop giving you shifts which might be what happened with the people complaining here.",
        rate: 3.5,
        name: "Mia Campbell",
        position: "Practice Manager, Bondi Family Medical Centre",
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const cardWidth = 340; // width + margin
        scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    let startX = 0;
    let startY = 0;

    const onTouchStart = (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);

        // If vertical swipe is bigger, prevent horizontal scroll
        if (dy > dx) {
            e.stopPropagation();
        }
    };


    return (
        <section className="w-full flex flex-col items-center justify-center mb-20">
            <div className="w-full px-4 text-center relative">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-navy-900 mb-12 md:mb-16 uppercase">
                    Reviews
                </h2>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center justify-between w-full absolute top-15 left-0 px-4 z-10">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-white shadow-lg p-3 rounded-full cursor-pointer  hover:scale-110 transition"
                    >
                        <ArrowLeft />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="bg-white shadow-lg p-3 rounded-full cursor-pointer  hover:scale-110 transition"
                    >
                        <ArrowRight />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-scroll no-scrollbar snap-x snap-mandatory pr-4"
                    style={{ scrollBehavior: "smooth" }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                >

                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] md:w-[360px] bg-white p-6 my-5 flex flex-col items-center 
                           justify-center rounded-2xl shadow-lg flex-shrink-0 snap-start"
                        >

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i + 1 <= Math.floor(r.rate)
                                            ? "text-yellow-400"
                                            : i < r.rate
                                                ? "text-yellow-400/50"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600 font-medium">
                                    {r.rate.toFixed(1)}
                                </span>
                            </div>

                            <p className="text-gray-700 mb-4 break-words">
                                {r.review}
                            </p>

                            <div className="mt-2">
                                <p className="font-semibold text-gray-900">{r.name}</p>
                                <p className="text-gray-500 text-sm">{r.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
