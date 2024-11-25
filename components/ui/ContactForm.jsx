"use client";

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    
    const form = useRef();
    const [ messageSent, setMessageSent ] = useState(false);
    const [ isButtonDisabled, setButtonDisabled ] = useState(false);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm( serviceID, templateID, form.current, {
          publicKey: emailPublicKey,
        })
        .then(
          () => {
            setMessageSent(true);
            setButtonDisabled(true);
            console.log('SUCCESS!');

            form.current.reset();

            setTimeout(() => {
                setMessageSent(false);
                setButtonDisabled(false)
            },
            5000 )
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    };

    return (
        <div className="w-full max-w-md glass px-5 py-10 rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="w-full h-full flex flex-col gap-5">
                <input required type="text" name="name" placeholder="Tu nombre: " className="w-full p-3 outline-none border-b-2 border-white bg-slate-500 rounded-xl" />
                <input required type="text" name="mail" placeholder="Tu email: " className="w-full p-3 outline-none border-b-2 border-white bg-slate-500 rounded-xl" />
                <input type="tel" name="phone" placeholder="Tu teléfono: " className="w-full p-3 outline-none border-b-2 border-white bg-slate-500 rounded-xl" />
                <textarea required name="message" rows={5} placeholder="Escribe aquí lo que quieras decirme: " className="w-full p-3 outline-none border-b-2 border-white bg-slate-500 rounded-xl" />
                <button disabled={ isButtonDisabled } className="w-full h-10 bg-slate-700 rounded-lg text-white text-lg transition-all duration-150 ease-in-out hover:bg-primarycolor border-2 border-primarycolor hover:text-white">Enviar</button>
            </form>
            <div className={`py-2 text-center text-sm ${ messageSent ? "visible":"hidden" }`}>
                <h4/>Tu mensaje ha sido enviado.<br />¡Te contestaré a la mayor brevedad!
            </div>            
        </div>
    )
};

export default ContactForm;
