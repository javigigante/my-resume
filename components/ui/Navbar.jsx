"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const navbarLinks = [
        { name: "Página principal", path: "/" },
        { name: "Habilidades", path: "/skills" },
        { name: "Currículum", path: "/resume" }, 
        { name: "Contacto", path: "/contact" },
    ];

    const pathname = usePathname();

    return (
        <div className="w-full h-full flex items-center justify-center">
          <ul className="w-full flex justify-center gap-4 items-center h-full">
            {navbarLinks.map((link, index) => (
              <li key={index} className={`text-sm font-semibold ${pathname === link.path ? "text-primarycolor" : "text-white"} hover:text-primarycolor transition-all duration-150`}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <a href="/contact"><button className="bg-primarycolor px-6 rounded-lg hover:opacity-70 py-2 text-md">¡Disponible para contratar!</button></a>
        </div>
      );
    };

export default Navbar;