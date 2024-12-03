import React from 'react';

import ContactForm from "@/components/forms/ContactForm"
 
const Contact = () => {

    return (
        <div className="w-full z-20 h-screen lg:landscape:h-screen sm:landscape:h-[calc(200vh-10px)] flex justify-center items-center">
            <div className="w-11/12 gap-4 h-full pb-8 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center md:text-2xl text-lg">¡Contáctame!</h3>
                </div>
                <div className="w-full flex justify-center items-center">
                    <ContactForm />
                </div>                
            </div>
        </div>
    )
};

export default Contact;