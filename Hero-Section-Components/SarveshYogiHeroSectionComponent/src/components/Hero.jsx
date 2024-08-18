import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp3004472.jpg')" }}
            className="pt-12 bg-gray-50 sm:pt-16" id="hero">

            <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-0 h-[600px]  content-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='h-[80%] lg:h-[50%] flex flex-col justify-center bg-green-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100'>
                    <div className="text-center">
                        <p className="max-w-4xl mx-auto mb-4 text-5xl font-bold leading-tight text-teal-900 sm:leading-tight sm:text-5xl lg:text-7xl lg:leading-tight">
                            Welcome to GrapplTech
                        </p>
                        <h1 className="max-w-4xl mx-auto px-6 text-2xl text-teal-50 font-inter">
                            Welcome to GrapplTech, where the future isn't just imagined—it's engineered.
                        </h1>
                        <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a href="#" title=""
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-teal-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-teal-900 sm:w-auto rounded-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900"
                                role="button">
                                Get Started
                            </a>
                            <a href="#"
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-teal-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-teal-900 sm:w-auto rounded-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900"
                                role="button">
                                Our Website
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Hero;
