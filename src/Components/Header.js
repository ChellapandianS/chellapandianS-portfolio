import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto ">

        <a className="font-bold text-white" href="#">CHELLAPANDIAN</a>
        <nav className="hidden md:block">
            <ul className="flex text-white text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-emerald-600">
 
                <li><a href="/">Home</a></li>{''}     --
                <li><a href="/#about">About</a></li>
                {''}--
                <li><a href="/#skills">Skills</a></li>{''}--
                <li><a href="/#Achivementscertificates">Achivementscertificates</a></li>{''}--
                <li><a href="/#projects">Projects</a></li>{''}--
                <li><a href="/#contact">Contact</a></li>{''}
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
            <li><a href="/">Home</a></li>{''}     
                <li><a href="/#about">About</a></li>
                <li><a href="/#skills">Skills</a></li>
                <li><a href="/#Achivementscertificates">Achivementscertificates</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#contact">Contact</a></li> 
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}