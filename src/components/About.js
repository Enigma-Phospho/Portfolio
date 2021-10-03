import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import image from "../water-surface-close-up.jpg"
import BlockContent from "@sanity/block-content-to-react"


export default function About() {
   const [author, setAuthor] = useState(null);

   useEffect(() =>{
       sanityClient.fetch(`*[_type == "project"]{
           name,
           bio,
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);
    
    if (!author) return <div>Loading...</div>;
    
   return(
       <main className="relative">
           <img src={image} alt="sunset mountains" className="absolute  w-full "/>
           <div className="p-10 lg:pt-48 container mx-auto relative">
               <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
                   <div className="text-lg flex flex-col justify-center">
                       <h1 className="tect-6xl text-blue-300 mb-4">Hello! My name is Leondre Russsell
                       <span className="text-black">{author.name}</span>
                       </h1>
                       <div className="prose lg:prose-xl text-white">
                       Entry level programmer with experience in frontend technologies and Python. Currently looking to improve my skills as a web developer to create user friendly front end experiences and robust backend services in a professional setting and all while still contributing my current skills with react, css, django, and flask to the team. 
                       </div>
                   </div>
               </section>
           </div>
       </main>
   )
   
}