"use client"

import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [ messageSent, setMessageSent ] = useState(false);
  const [ isButtonDisabled, setButtonDisabled ] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();    
    
    const data = {
      name: e.target.name.value,    
      email: e.target.email.value,  
      phone: e.target.phone.value,
      message: e.target.message.value,
    };  
        
    try {
      setButtonDisabled(true);
      
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessageSent(true);
        console.log( "Email sent successfully!" );
        form.current.reset();
      } else {
        const errorData = await response.json();
        console.error( "Error:", errorData.message );
        alert( "Failed to send the email. Please try again." );
      }
    } catch (error) {
      console.error( "Unexpected error:", error );
      alert( "Something went wrong. Please try again." );
    } finally {
      setButtonDisabled(false);
      setTimeout( () => setMessageSent(false), 5000 );
    }
  };

  return (
    <div className="w-full max-w-md glass md:px-5 md:py-10 py-5 rounded-xl">
      <form ref={ form } onSubmit={ sendEmail } className="w-full flex flex-col gap-5 items-center justify-center">
        <input
          required
          type="text"
          name="name"      
          placeholder="Tu nombre:"
          className="input-field md:text-lg text-sm w-full md:p-3 p-2 outline-none border-b-2 border-white bg-slate-500 rounded-xl"
        />
        <input
          required
          type="text"
          name="email"     
          placeholder="Tu email:"
          className="input-field md:text-lg text-sm w-full md:p-3 p-2 outline-none border-b-2 border-white bg-slate-500 rounded-xl"
        />
        <input
          type="tel"
          name="phone"     
          placeholder="Tu teléfono:"
          className="input-field md:text-lg text-sm w-full md:p-3 p-2 outline-none border-b-2 border-white bg-slate-500 rounded-xl"
        />
        <textarea
          required
          name="message"   
          rows={ 5 }
          placeholder="Escribe aquí lo que quieras decirme:"
          className="input-field md:text-lg text-sm w-full md:p-3 p-2 outline-none border-b-2 border-white bg-slate-500 rounded-xl"
        />
        <button disabled={ isButtonDisabled } 
          className="md:w-full w-40 md:h-10 h-8 bg-slate-700 rounded-lg text-white md:text-lg text-sm transition-all duration-150 ease-in-out hover:bg-primarycolor border-2 border-primarycolor hover:text-white items-center justify-center">
          Enviar
        </button>
      </form>
      { messageSent && (
        <div className="py-2 text-center text-sm">
          <h4>Tu mensaje ha sido enviado.<br />¡Te contestaré a la mayor brevedad!</h4>
        </div>
      ) }
    </div>
  );
};

export default ContactForm;
