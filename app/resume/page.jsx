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
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-screen-xl h-[75vh] pt-20">                
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full h-full rounded-xl p-6 bg-slate-800 border-gray-600/[0.5] flex flex-col justify-between">
                        <div className="w-full"> 
                                <div className="flex items-center gap-5"> 
                                    <MdOutlineWork className="h-10 w-10"/><h3 className="text-3xl font-extrabold text-white">Experiencia Laboral</h3>
                                </div>                                                       
                        </div>
                        <div className="py-5 overflow-y-auto">
                            <ul className="relative pl-20 before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:left-8 before:top-9">
                                {experiencedata.map((experience, index) => (
                                    <li
                                        key={index}
                                        className={`py-5 relative ${
                                            index === 0
                                                ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute after:left-[-56px] after:rounded-full after:top-8"
                                                : ""
                                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:left-[-56px] before:rounded-full before:top-8`}
                                    >
                                        <h4 className="text-lg py-2 font-bold text-white">
                                            {experience.label}
                                        </h4>
                                        <p className="text-md py-2 font-bold text-gray-300">
                                            {experience.year}
                                        </p>
                                        <p className="text-md py-2 font-bold text-gray-300 italic">
                                            {experience.company}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>                
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full h-full rounded-xl p-6 bg-slate-800 border-gray-600/[0.5] flex flex-col justify-between">
                        <div className="w-full">
                            <div className="flex items-center gap-5"> 
                                <PiStudentFill className="h-10 w-10"/><h3 className="text-3xl font-extrabold text-white">Formación Académica</h3>
                            </div>
                        </div>
                        <div className="py-5 overflow-y-auto">
                            <ul className="relative pl-20 before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:left-8 before:top-9">
                                {educationdata.map((education, index) => (
                                    <li
                                        key={index}
                                        className={`py-5 relative ${
                                            index === 0
                                                ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute after:left-[-56px] after:rounded-full after:top-8"
                                                : ""
                                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:left-[-56px] before:rounded-full before:top-8`}
                                    >
                                        <h4 className="text-lg py-2 font-bold text-white">
                                            {education.label}
                                        </h4>
                                        <p className="text-md py-2 font-bold text-gray-300">
                                            {education.year}
                                        </p>
                                        <p className="text-md py-2 font-bold text-gray-300 italic">
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