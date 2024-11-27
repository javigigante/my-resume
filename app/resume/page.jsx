import { PiStudentFill } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";

const experiencedata = [
    {
        label: "Operador de grafismo",
        year: "oct 2017 - dic 2023",
        company: "WtVision España",
    },
    {
        label: "Técnico de sistemas informáticos",
        year: "feb 2020 - ago 2022",
        company: "Getronics",
    },
    {
        label: "Técnico de sistemas de red",
        year: "may 2018 - feb 2020",
        company: "Getronics",
    },
];

const educationdata = [
    {
        label: "CFGS - Desarrollo de Aplicaciones Multiplataforma",
        institution: "Universidad Alfonso X El Sabio",
        year: "2022 - 2024",
    },
    {
        label: "Grado en Ciencias Políticas",
        institution: "Universidad Carlos III",
        year: "2014 - 2018",
    },
    {
        label: "CFGS - Sistemas de Telecomunicaciones e Informáticos",
        institution: "IES Vallecas I",
        year: "2012 - 2014",
    },
];

const Resume = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-4 px-3 w-full md:max-w-screen-xl sm:max-w-screen-sm h-[75vh] md:pt-20 pt-0">                
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full h-full rounded-xl md:p-6 p-3 bg-slate-800 border-gray-600/[0.5] flex flex-col justify-between">
                        <div className="w-full"> 
                                <div className="flex items-center gap-5"> 
                                    <MdOutlineWork className="h-10 w-10"/><h3 className="lg:text-3xl text-xl sm:text-lg font-extrabold text-white">Experiencia Laboral</h3>
                                </div>                                                       
                        </div>
                        <div className="py-8 overflow-y-auto">
                            <ul className="relative md:pl-20 pl-10 before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute lg:before:left-8 md:before:left-5 before:left-3 lg:before:top-3 md:before:top-5 before:top-5">
                                {experiencedata.map((experience, index) => (
                                    <li
                                        key={index}
                                        className={`md:py-5 py-2 relative ${
                                            index === 0
                                                ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute lg:after:left-[-56px] md:before:left-[-56px] after:left-[-37px] after:rounded-full md:after:top-3 after:top-5"
                                                : ""
                                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute lg:before:left-[-56px] md:before:left-[-56px] before:left-[-37px] md:after:left-[-70px] after:left-[-70px] before:rounded-full md:before:top-3 before:top-5`}
                                    >
                                        <h4 className="md:text-lg text-md md:py-2 py-1 font-bold text-white">
                                            {experience.label}
                                        </h4>
                                        <p className="md:text-md text-sm md:py-2 py-1 font-bold text-gray-300 lg:pl-7 md:pl-5 pl-4">
                                            {experience.year}
                                        </p>
                                        <p className="md:text-md text-sm md:py-2 py-1 font-bold text-gray-300 italic lg:pl-7 md:pl-5 pl-4">
                                            {experience.company}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>                
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full h-full rounded-xl md:p-6 p-3 bg-slate-800 border-gray-600/[0.5] flex flex-col justify-between">
                        <div className="w-full">
                            <div className="flex items-center gap-5"> 
                                <PiStudentFill className="h-10 w-10"/><h3 className="lg:text-3xl text-xl font-extrabold text-white">Formación Académica</h3>
                            </div>
                        </div>
                        <div className="py-5 overflow-y-auto">
                            <ul className="relative md:pl-20 pl-10 before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute lg:before:left-8 md:before:left-5 before:left-3 lg:before:top-0 md:before:top-3 sm:before:top-8">
                                {educationdata.map((education, index) => (
                                    <li
                                        key={index}
                                        className={`md:py-5 py-2 relative ${
                                            index === 0
                                                ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute lg:after:left-[-56px] md:before:left-[-56px] after:left-[-37px] after:rounded-full md:after:top-8 after:top-5"
                                                : ""
                                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute lg:before:left-[-56px] md:before:left-[-56px] before:left-[-37px] md:after:left-[-70px] after:left-[-70px] before:rounded-full md:before:top-8 before:top-5`}
                                    >
                                        <h4 className="md:text-lg text-md md:py-2 py-1 font-bold text-white">
                                            {education.label}
                                        </h4>
                                        <p className="md:text-md text-sm md:py-2 py-1 font-bold text-gray-300 lg:pl-7 md:pl-5 pl-4">
                                            {education.year}
                                        </p>
                                        <p className="md:text-md text-sm md:py-2 py-1 font-bold text-gray-300 italic lg:pl-7 md:pl-5 pl-4">
                                            {education.institution}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Resume;