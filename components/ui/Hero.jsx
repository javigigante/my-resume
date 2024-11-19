const Hero = () => {
    return (
        <div className="w-full z-20 h-full flex justify-center items-center">
            <div className="w-11/12 h-full flex justify-center items-center">
            <div className="flex-1">
                <div className="text_container">
                    <h5 className="text-gray-600">¡Muy buenas!</h5>
                    <h2 className="text-6xl font-bold">Soy <span className="text-primarycolor">JaviGigante</span>,<br /> Backend Developer</h2>
                    <p className="py-2 text-md text-gray-400">
                        Sé bienvenido a mi página / currículum personal. Aquí encontrarás todo lo que soy, he trabajado, estudiado y demás misceláneas.
                        No te cortes y contáctame para lo que necesites y con las dudas que te surjan.
                        
                        Disfruta de tu estancia y recibe un saludo!!
                    </p>
                </div>
            </div>
            <div className="flex-1"></div>
            </div>
        </div>
    )
}

export default Hero;