import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-gradient-to-t from-teal-100 to-teal-50" id="about">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-teal-900 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="text-teal-600 hover:text-blue-600 font-medium">
                                Learn more about us <span className="ml-2">&#8594;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us" className="object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default About;
