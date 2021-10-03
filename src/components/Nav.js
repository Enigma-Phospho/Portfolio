import React from "react";
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

export default function NavBar() {
    return(
        <header className="bg-gray-800 ">
            <div className="container mx-auto flex justify-between">
                <nav className="flex py--12">
                    <NavLink to='/' 
                    exact  
                    activeClassName=" text-black"
                    className=" serif inflex-flex items-center py-3 px-3 mr-4 text-white hover:text-blue-300 text-3xl font-bold font-sans{sans-serif} tracking-widest ">
                        Leondre
                    </NavLink>
                    <NavLink to='/about' className=" serif inflex-flex items-center py-3 px-3 mr-4 text-white hover:text-blue-300 text-3xl font-bold font-sans{sans-serif} tracking-widest ">
                        About Me
                    </NavLink>
                    <NavLink to='/project' className=" serif inflex-flex items-center py-3 px-3 mr-4 text-white hover:text-blue-300 text-3xl font-bold font-sans{sans-serif} tracking-widest ">
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-5 px-5 my-30px">
                <SocialIcon url="https://github.com/Enigma-Phospho" 
                className="mr-4" 
                target="_blank" 
                fgColor="fff" 
                style={{height: 35, width: 35}} 
                />

                <SocialIcon url="https://www.linkedin.com/in/leondre-russell-5753a71a6/" 
                className="mr-4" 
                target="_blank" 
                fgColor="fff" 
                style={{height: 35, width: 35}} 
                />

                <SocialIcon url="https://twitter.com/DarrellLeondre" 
                className="mr-4" 
                target="_blank" 
                fgColor="fff" 
                style={{height: 35, width: 35}} 
                />
                </div>
            </div>
        </header>
    )
}