import React from "react";

export default function Resume(){
    return (
        <div>
            <a href="./graphics/Resume.docx" download={true}>
                <button className="btn btn-primary m-5">
                    Download resume
                </button>
            </a>

            <a href="./graphics/CoverLetter.docx" download={true}>
                <button className="btn btn-primary m-5">
                    Download cover letter
                </button>
            </a>
        </div>
    )
}