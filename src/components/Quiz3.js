import React , {useState} from "react";

const Quiz3=()=>{
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    
      const updateColor = () => {
       //update setCar with color 
        
      }
    
    return( 
        //applay color for the container
        //<div className={"boxContainer cardContainer quizColor" + car.color}>
        <div className="boxContainer cardContainer quizColor ">
            <div className="card dark">
                <div className="container light">
                    <div className="title titleColor">
                            <span>Test:</span>
                            <h1>My {car.brand}</h1>
                    </div>
                    <p>
                        It is a {car.color} {car.model} from {car.year}.
                    </p>
                    <div className="bottom">
                        <button onClick={updateColor}> Blue </button>
                    </div>
                </div>
            </div>
            </div>);
}
export default Quiz3;