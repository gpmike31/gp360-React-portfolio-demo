import React from "react";

//this functin simply switches the style of the hyperlinks based on the current page. When the link is clicked, it will call the ChangeCurrentPage to set the state
function NavBar({CurrentPage, ChangeCurrentPage}){
    console.log(CurrentPage);
    return (
       <ul className="nav nav-tabs secondary border-0">
           <li className="nav-item">
               <a href="#AboutMe" 
               onClick={()=>ChangeCurrentPage("AboutMe")} 
               className={CurrentPage==="AboutMe"?"nav-link active text-color text tertiary primary border-0":"nav-link text-color text"}>About Me</a>
           </li>
           <li className="nav-item">
               <a href="#Portfolio" 
               onClick={()=>ChangeCurrentPage("Portfolio")} 
               className={CurrentPage==="Portfolio"?"nav-link active text-color text tertiary primary border-0":"nav-link text-color text"}>Portfolio</a>
           </li>
           <li className="nav-item">
               <a href="#Resume" 
               onClick={()=>ChangeCurrentPage("Resume")} 
               className={CurrentPage==="Resume"?"nav-link active text-color text tertiary primary border-0":"nav-link text-color text"}>Resume</a>
           </li>
           <li className="nav-item">
               <a href="#ContactMe" 
               onClick={()=>ChangeCurrentPage("ContactMe")} 
               className={CurrentPage==="ContactMe"?"nav-link active text-color text tertiary primary border-0":"nav-link text-color text"}>ContactMe</a>
           </li>
       </ul>
    )
}

export default NavBar