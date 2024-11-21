
const Skills = () => {
    return (
        <div className="w-full z-20 min-h-screen flex justify-center items-center flex-col">
            <div className="w-11/12 h-full pt-8 flex flex-col items-center">
                <div className="w-full flex justify-center items-center gap-8 mb-8">
                    <div className="w-1/2 h-auto flex-grow">
                        <div className="rounded-xl p-6 min-h-72 glass border border-gray-600/[0.5] h-full">
                            <div className="flex gap-3 items-center">
                                <div className="w-14 h-14">
                                    <img src="./img/backend.png" alt="skills" className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl font-semibold">Desarrollador Junior Backend</h2>
                            </div>
                            <div className="w-full py-2">
                                <p className="text-md text-gray-200">
                                    Como Desarrollador enfocado en Backend, me esfuerzo por realizar aplicaciones que sean robustas, fácilmente escalables y, por supuesto, seguras
                                    siguiendo los mejores estándares. Un buen Desarrollador de Backend se esfuerza por hacer una arquitectura fiable en la que se respalde el trabajo
                                    de sus compañeros de Front.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-auto flex-grow">
                        <div className="rounded-xl p-6 min-h-72 glass border border-gray-600/[0.5] h-full">
                            <div className="flex gap-3 items-center">
                                <div className="w-14 h-14">
                                    <img src="./img/unity.png" alt="skills" className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl font-semibold">Unity 2D</h2>
                            </div>
                            <div className="w-full py-2">
                                <p className="text-md text-gray-200">
                                    Durante mi proceso de aprendizaje en la Universidad Alfonso X El Sabio, mi proyecto de final de curso
                                    consistió en la construcción de un videojuego para móviles en la plataforma Unity, con texturas 2D. Se trató de un juego basado en los juegos
                                    de toma de decisión y árboles de decisión. Usando ScriptableObjects fui capaz de conectar cada una de las opciones de decisión con su correspondiente consecuencia lógica.
                                    Implementé un sistema de anuncios de Google Ads y está lista totalmente para ser subida a la tienda de Google.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center gap-8">
                    <div className="w-1/2 h-auto flex-grow">
                        <div className="rounded-xl p-6 min-h-80 glass border border-gray-600/[0.5] h-full">
                            <div className="flex gap-3 items-center">
                                <div className="w-14 h-14">
                                    <img src="./img/framework.png" alt="skills" className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl font-semibold">Lenguajes de Programación y Frameworks que uso</h2>
                            </div>
                            <div className="w-full py-4">
                                <div className="grid grid-cols-6 gap-7">
                                    <div className="flex justify-center items-center">
                                    <img src="./img/java.png" alt="java" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/typescript.png" alt="typescript" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/python.png" alt="python" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/android.png" alt="android" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/csharp.png" alt="csharp" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/javascript.png" alt="javascript" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/springboot.png" alt="springboot" className="w-12 h-12 object-contain" />
                                    </div>                                    
                                    <div className="flex justify-center items-center">
                                        <img src="./img/nestjs.png" alt="nestjs" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/nodejs1.png" alt="nodejs" className="w-13 h-13 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/nextjs.png" alt="nextjs" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/mysql.png" alt="mysql" className="w-13 h-13 object-contain" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img src="./img/mongodb.png" alt="mongodb" className="w-13 h-13 object-contain" />
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-auto flex-grow">
                        <div className="rounded-xl p-6 min-h-80 glass border border-gray-600/[0.5] h-full">
                            <div className="flex gap-3 items-center">
                                <div className="w-14 h-14">
                                    <img src="./img/problems.png" alt="skills" className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl font-semibold">Comunicación y resolución de problemas</h2>
                            </div>
                            <div className="w-full py-2">
                                <p className="text-md text-gray-200">
                                    En un entorno de desarrollo profesional.
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