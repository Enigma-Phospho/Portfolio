import React from "react";
import image from "../fog-on-dark-waters-edge.jpg";


export default function Home() {
    return(
        <main>
            <img src={image} alt="sunset over water" className="absolute object-cover w-full h-full"/>
            <section className= "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="font-sans text-6xl text-white font-bold leading-none lg: leading-snug home-name">Welcome</h1>
            </section>
        </main>
    )
}