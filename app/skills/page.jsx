import React from 'react';

const Skills = () => {
    return (
        <div className="w-full z-20 min-h-screen flex justify-center items-center flex-col">
          <div className="w-11/12 h-full pt-8 pb-20 flex flex-col items-center">
            <div className="w-full flex lg:flex-row flex-col lg:justify-center items-center lg:gap-8 md:gap-4 gap-2 lg:mb-8 mt-14 lg:mt-0">              
              <div className="lg:w-1/2 w-full h-auto">
                <div className="rounded-xl p-6 overflow-hidden lg:min-h-72 md:min-h-52 glass border hover:bg-slate-700 border-gray-600/[0.5] h-full flex flex-col">
                  <div className="flex gap-3 md:gap-2 items-center lg:mb-4 md:mb-1 sm:mb-0">
                    <div className="w-14 h-14">
                      <img src="./img/backend.png" alt="skills" className="lg:w-full lg:h-full md:w-12 md:h-12 sm:w-9 sm:h-9" />
                    </div>
                    <h2 className="lg:text-2xl sm:text-xl font-semibold">Desarrollador Junior Backend</h2>
                  </div>
                  <div className="flex-grow flex items-center">
                    <p className="md:text-lg sm:text-sm text-gray-300 text-justify">
                      Como Desarrollador enfocado en Backend, me esfuerzo por realizar aplicaciones que sean robustas, fácilmente escalables y, por supuesto, seguras
                      siguiendo los mejores estándares. Un buen Desarrollador de Backend se esfuerza por hacer una arquitectura fiable en la que se respalde el trabajo
                      de sus compañeros de Front.
                    </p>
                  </div>
                </div>
              </div>              
              <div className="lg:w-1/2 w-full h-auto">
                <div className="rounded-xl p-6 lg:min-h-72 md:min-h-64 glass border hover:bg-slate-700 border-gray-600/[0.5] h-full flex flex-col">
                  <div className="flex gap-3 md:gap-2 items-center lg:mb-4 md:mb-1 sm:mb-0">
                    <div className="w-14 h-14">
                      <img src="./img/unity.png" alt="skills" className="lg:w-full lg:h-full md:w-12 md:h-12 sm:w-9 sm:h-9" />
                    </div>
                    <h2 className="lg:text-2xl sm:text-xl font-semibold">Unity 2D</h2>
                  </div>
                  <div className="flex-grow flex items-center relative z-30">
                    <p className="md:text-lg sm:text-sm text-gray-300 text-justify">
                      Durante mi proceso de aprendizaje en la Universidad Alfonso X El Sabio, mi proyecto de final de curso
                      consistió en la construcción de un videojuego para móviles en la plataforma Unity, con texturas 2D. Se trató de un juego basado en los juegos
                      de toma de decisión y árboles de decisión. Usando ScriptableObjects fui capaz de conectar cada una de las opciones de decisión con su correspondiente consecuencia lógica.
                      Implementé un sistema de anuncios de Google Ads y está lista totalmente para ser subida a la tienda de Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>            
            <div className="w-full flex lg:flex-row flex-col lg:justify-center items-center lg:gap-8 md:gap-4 gap-2 lg:mb-8 mt-2 md:mt-4 lg:mt-0">              
              <div className="lg:w-1/2 w-full h-auto">
                <div className="rounded-xl p-6 glass lg:min-h-80 border hover:bg-slate-700 border-gray-600/[0.5] h-full flex flex-col">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="w-14 h-14">
                      <img src="./img/framework.png" alt="skills" className="lg:w-full lg:h-full md:w-12 md:h-12 sm:w-9 sm:h-9" />
                    </div>
                    <h2 className="lg:text-2xl sm:text-xl font-semibold">Lenguajes de Programación y Frameworks que uso</h2>
                  </div>
                  <div className="flex-grow flex items-center justify-center">
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-16 md:px-10 sm:px-5">                      
                      {[
                        { src: "./img/java.png", alt: "java" },
                        { src: "./img/typescript.png", alt: "typescript" },
                        { src: "./img/python.png", alt: "python" },
                        { src: "./img/android.png", alt: "android" },
                        { src: "./img/csharp.png", alt: "csharp" },
                        { src: "./img/javascript.png", alt: "javascript" },
                        { src: "./img/springboot.png", alt: "springboot" },
                        { src: "./img/nestjs.png", alt: "nestjs" },
                        { src: "./img/nodejs1.png", alt: "nodejs" },
                        { src: "./img/nextjs.png", alt: "nextjs" },
                        { src: "./img/mysql.png", alt: "mysql" },
                        { src: "./img/mongodb.png", alt: "mongodb" },
                      ].map(( logo, index ) => (
                        <div key={ index } className="flex justify-center items-center">
                          <img src={ logo.src } alt={ logo.alt } className="w-12 h-12 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>              
              <div className="lg:w-1/2 w-full h-auto">
                <div className="rounded-xl p-6 lg:min-h-80 glass border hover:bg-slate-700 border-gray-600/[0.5] h-full flex flex-col">
                  <div className="flex gap-3 md:gap-2 items-center lg:mb-4 md:mb-1 sm:mb-0">
                    <div className="w-14 h-14">
                      <img src="./img/problems.png" alt="skills" className="lg:w-full lg:h-full md:w-12 md:h-12 sm:w-9 sm:h-9" />
                    </div>
                    <h2 className="lg:text-2xl sm:text-xl font-semibold">Comunicación y resolución de problemas</h2>
                  </div>
                  <div className="flex-grow flex items-center">
                    <p className="md:text-lg sm:text-sm text-gray-300 text-justify">
                      En un entorno de desarrollo profesional se necesitan habilidades sólidas de comunicación. Las ideas deben entenderse de forma clara
                      y efectiva. Me destaco por ser capaz de mantener la calma ante situaciones complejas y de ser capaz de encontrar la mejor solución posible,
                      identificando las causas y proponiendo soluciones prácticas. Trabajo bien bajo presión y me gusta fomentar la colaboración para alcanzar el objetivo
                      común.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Skills;