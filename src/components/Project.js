import React, {useEffect, useState} from "react"
import sanityClient from "../client"


export default  function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect(() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error)
        ;
    }, []);
    
    return(
       <main className="bg-gradient-to-b from-gray-300 to-gray-600  min-h-screen p-12">
           <section className="container mx-auto">
               <h1 className="text-5xl flex justify-center font-sans text-black">My Projects</h1>
               <h2 className="text-lg text-black flex justify-center mb-12">Will be updated frequently</h2>
               <section className="grid grid-cols-2 gap-8">
                  {projectData && projectData.map((project, index) =>(
                   <article className="relative rounded-lg shadow-xl bg-gray-800 p-16">
                       <h3 className="text-blue-300 text-3xl font-bold mb-2 hover:text-gray-300">
                            <a
                            href={project.link}
                            alt={project.link}
                            target="_blank"
                            rel="noopener noreffer"

                            >{project.title}</a>
                       </h3>
                       <div className="text-blue-300 text-xs space-x-4">
                           <span>
                               <strong className="font-bold"> Finished on</strong>:{" "}
                               {new Date(project.date).toLocaleDateString()}
                           </span>
                           <span>
                               <strong className="font-bold">Location</strong>:{" "}
                               {project.place}
                           </span>
                           <span>
                               <strong className="font-bold">Type</strong>:{" "}
                               {project.projectType}
                           </span>
                           <p className="my-6 text-lg text-white leading-relaxed">{project.description}</p>
                           <a href={project.link} rel="noopener noreffer" target="_blank" className=" text-white-500 font-bold hover:underline hover:text-gray-300">
                           View The Project {""}
                           <span ></span>
                           </a>
                       </div>
                   </article>
                   ))}
               </section>

           </section>
       </main>
    );
}