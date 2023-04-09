import React from "react";

const Quiz1=()=>{
    let title="Set up useState"

    const handleOnClick=()=>{
       title = "the useState was set up successfully"
    }


    return( 
        <div className="boxContainer cardContainer quizColor">
            <div className="card dark">
                <div className="container light">
                    <div className="title titleColor">
                        <span>Test:</span>
                            <h2>{title}</h2>
                    </div>
                    <div className="bottom">
                        <button onClick={handleOnClick}>Change title</button>
                    </div>
                </div>
            </div>
        </div>);
}
export default Quiz1;