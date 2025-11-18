"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
    { name: "BR Internation", logo: '/companyImages/brinternational.png' },
    { name: "Calvista", logo: '/companyImages/calvista.png' },
    { name: "Chemist Warehouse", logo: '/companyImages/chemwharehouse.png' },
    { name: "Hell Mann", logo: '/companyImages/hellman.png' },
    { name: "Odeum Farms", logo: '/companyImages/odeum-farms.png' },
];

export default function CompaniesWorkedWith() {
    return (
        <section className="py-20 bg-gray-50 flex items-center justify-center">
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    initial={{ x: ["10%", "-100%"] }}
                    whileInView={{ x: ["10%", "-100%"] }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: companies.length * 4, // adjust speed per image
                            ease: "linear",
                        },
                    }}
                >
                    {[...companies, ...companies, ...companies, ...companies].map((company, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
                        >
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={80}
                                    height={80}
                                    quality={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium text-center">
                                {company.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
