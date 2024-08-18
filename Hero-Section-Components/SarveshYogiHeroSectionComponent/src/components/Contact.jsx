import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className="h-full bg-gradient-to-t from-teal-200 to-teal-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <motion.div

                    className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
                ></motion.div>
                <motion.div
                    className="text-white relative px-4 py-10 bg-teal-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className="text-3xl font-bold">Contact Us!</h1>
                        <p className="text-teal-50">
                            Fill out the form below to send us a message.
                        </p>
                    </div>

                    <form>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            id="name"
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />

                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />

                        <label htmlFor="subject" className="sr-only">Subject</label>
                        <input
                            id="subject"
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                        />

                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Type your message here..."
                            name="message"
                        ></textarea>

                        <div className="flex justify-between">
                            <input
                                className="shadow bg-teal-100 hover:bg-teal-700 text-teal-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Send ➤"
                            />
                            <input
                                className="shadow bg-teal-100 hover:bg-teal-700 text-teal-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"
                                value="Reset"
                            />
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
