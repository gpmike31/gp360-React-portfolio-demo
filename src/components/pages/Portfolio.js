import React from "react";

export default function Portfolio(){
    return (
        <div className="d-flex m-5 flex-wrap justify-content-between">
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/bootlegsnapshot.png" className="card-img-top h-25 d-flex"alt="Pokemon Quiz"/>
                <div className="card-body h-75 p-3">
                    <p>
                    Collaborative Built Timed pokemon quiz to help users determine which pokemon they represent
                    based on a selection of mutiple choices answers. Script was built
                    using the PokeAPI along with a second server side image to display different attributes types
                    of fire, water, ground, air, etc. along with the final result pokemon image and facts pertaining
                    to the particular chosen creature. These results are generated with a complex data array using JQuery
                    to assign a point value to each answer chosen. Every quiz is randomized and results are saved to local storage
                    to share with others.
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://bkrayton815.github.io/pokequiz/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/BKrayton815/pokequiz"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/team-profile-generator1.jpg" className="card-img-top h-25 d-flex"alt="team-profile-generator1"/>
                <div className="card-body h-75 p-3">
                    <p>
                    Team Profile Gernerator created using Node.js to display information input to an index.html 
                    file located in the distribution directory. 
                    This app also has a series of test ran using jest npm in the distribution folder. 
                    Please click on the link below to watch a demonstration of how both systems operate. 
                    Thank You 
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://drive.google.com/file/d/16-5oB3KywMPXrY3OUlzDwUct6-UJ6Z6t/view" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/gpmike31/GP360-allstar-team-profile-generator"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
            
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/sql-employee-tracker.jpg" className="card-img-top h-25 d-flex"alt="sql-employee-tracker"/>
                <div className="card-body h-75 p-3">
                    <p>
                    Employee tracker database built off of MYSQL in combination with node.js and npm inquirer to generate a command line databse. 
                    This database displays an employee's first and last name, role, salary, and department names. 
                    Databse information is inserted from the seeds.sql file which can then be accessed using node.js to display and update information accordingly. 
                    Please see the link to the demonstration video below for details. Thank You
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://drive.google.com/file/d/1o2VgRAVKjtdxOOA7uo2PAMgdKItbzkKo/view" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/gpmike31/gp360-SQL-Database-employee-tracker"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/No-SQL-Social-Network.jpg" className="card-img-top h-25 d-flex"alt="No-SQL-Social-Network"/>
                <div className="card-body h-75 p-3">
                    <p>
                    GP360-NOsql-Social-Demo app is designed to showcase the backend functionality of a social media like app using No-SQL(mongoDB) with Mongoose as a foundation by connecting through user generated API routes. With this set up once cloned to your local repository you be able to create, update, and react to various post one would make on a platform such as facebook, twitter, or instagram after initiating a server through npm start from your terminal . Please click on the link below to see a demonstration of the functionality of this app and how it creates these instances through testing the various routes with the Insomnia app.
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://github.com/gpmike31/gp360-NoSQL-social-network-demo" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://drive.google.com/file/d/1nKpdTwUS2kTo4wKbKY4jznoS68TioYc4/view"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/Note-Taker.jpg" className="card-img-top h-25 d-flex"alt="note taker"/>
                <div className="card-body h-75 p-3">
                    <p>
                        GP360 Note Taker App is designed to help keep track of your important task, objectives, goals, and daily activites all in one convient location. This app can also be used for students to take notes while in class with an easy to use and bright display to create and delete notes as needed and Keep all of your notes together in one place with the user interface on the side to help you stay organized.
                        This app was created using npm inquirer package, express.js, JSON, and fs to connect pre built front end index and notes.html to the back end api and html routes to create a unique id for each note that is created and deleted. App is deployed to heroku. You may clone the repository from github to see the detailed code functionality.
                        Please click on the link below to see the deployed site from heroku.
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://gp360-note-taker.herokuapp.com/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/gpmike31/GP360-Note-Taker/blob/main/README.md"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/node-readme-generator-img.jpg" className="card-img-top h-25 d-flex"alt="read me generator"/>
                <div className="card-body h-75 p-3">
                    <p>
                    Professional Read Me Generator Using Node.js to input necessary information pertaining to your application. This app with help save time during the initial development process and can be adjusted to add aditional content such as images and badges on top of the app desciption. 
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://github.com/gpmike31/GP360-readme-generator"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}