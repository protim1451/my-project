import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '/404' }
    ];



    return (
        <nav className="text-black bg-yellow-200 p-6 px-6 shadow-lg">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose className="text-4xl"></AiOutlineClose> : 
                    <RiMenu2Line className="text-4xl"></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
             bg-yellow-200 ${open ? 'top-16 ':'-top-60'}`}>
            {
                routes.map(route => 
                <Link key={route} route = {route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;