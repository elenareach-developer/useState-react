import React , {useState} from "react";

const UpdateObject=()=>{
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    
      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }
    
    return( 
        <div className={"boxContainer cardContainer " + car.color}>
            <div className="card dark">
                <div className="container light">
                    <div className="title titleColor">
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
export default UpdateObject;