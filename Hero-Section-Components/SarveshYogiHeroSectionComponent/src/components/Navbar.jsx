import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        document.getElementById("hamburger").onclick = function toggleMenu() {
            const navToggle = document.getElementsByClassName("toggle");
            for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
            }
        };
    }, []);

    return (
        <nav className="flex flex-wrap sticky top-0 z-50 items-center justify-between p-3 bg-[#118380]">
            <div className="w-44 lg:w-56">
                <img src="https://www.grappl.tech/static/media/grappltechlogoimg1.7ab823c0cb8a149c8275.png" className='bg-teal-100 rounded-full' alt="Logo" />
            </div>
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" alt="Menu" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" alt="Close" />
                </button>
            </div>
            <div className="text-3xl toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
                <a href="#hero" className="block md:inline-block text-teal-100 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Home</a>
                <a href="#about" className="block md:inline-block text-teal-100 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">About</a>
                <a href="#contact" className="block md:inline-block text-teal-100 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
