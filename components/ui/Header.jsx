import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full flex justify-center items-center">
            <div className="w-11/12 flex justify-center px-4 py-6 items-center">
                <div className="flex-1">
                    
                    <h4 className="text-xl">
                    Javier <span className="text-primarycolor">Díaz Gigante</span>
                    </h4>                    
                    
                </div>
                <div className="flex-1">
                    <Navbar/>
                </div>
            </div>           
        </div>
    )
}

export default Header;