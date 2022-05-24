import React from "react";
export default function AboutMe(){
    return (
        <div className="h-50 d-flex mx-5 my-5 justify-content-start">
            <figure className="figure d-flex flex-column align-items-start w-50">
                <img src="./graphics/me-programming.png" alt="Me programming" className="figure-img image-fluid w-50 rounded d-flex"></img>
                <figcaption className="figure-caption text text-color d-flex">Me, programming</figcaption>
            </figure>
            <div className="text text-color">
                <h4>About Me</h4>
                <p>
                Hello, I like to start off by saying thank you for taking the time to checkout my work. 
                    My name is Gerald Pegg III and I was originally born and rasied in Columbia, Missouri 
                    but right now I'm currently based in the Kansas City Area. 
                    I was previously working at a Title Agency but decided to switch my career trajectory 
                    and pursure a career as a Full Stack Web Developer.
                    I am currently in school through the University of Kansas: Coding Bootcamp program 
                    where upon graduation (June 2022) I will be certified as a Full Stack Web Developer. 
                    Since the beginning of my journey I have learned a new set of skills that are more closley 
                    aligned with my goals of working in a more fufilling and rewarding career.  
                    My ultimate ambition is to be able to assit on the development of various web applications; 
                    aiding in it's functionality with both dynamically generated and engaging style that is also user friendly. 
                    If you like to inquire more information about my services 
                    please use the links in the navigation bar on top or scroll to the bottom of the page to see all contact information and I will be more then happy to discuss potential employment oppurtunities. 
                    Thank You.
                </p>
            </div>
        </div>
    )
}