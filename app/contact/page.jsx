import ContactForm from "@/components/ui/ContactForm"
 
const Contact = () => {

    return (
        <div className="w-full z-20 h-screen flex justify-center items-center">
            <div className="w-11/12 gap-4 h-full pb-8 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">¡Contáctame!</h3>
                </div>
                <div className="w-full flex justify-center items-center">
                    <ContactForm />
                </div>                
            </div>
        </div>
    )
};

export default Contact;