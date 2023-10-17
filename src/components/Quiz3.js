import React , {useState} from "react";
import {BlueButton} from "../utils/styleConsts"

const Quiz3=()=>{
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
      const [bgColor, setBgGColor] = useState("bg-red-300")
    
      const updateColor = () => {
       //update setCar with color 
       //update bgColor bg-blue-300
        
      }
    
    return( 
        //applay color for the container
        // <div className={"p-28 flex flex-col gap-8 justify-center max-w-7xl "+ bgColor}>
        <>
        <div className={"p-28 flex flex-col gap-8 justify-center max-w-7xl "+ bgColor}>
            <header className="bg-white shadow">
               <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                   <h1 className="text-3xl font-bold tracking-tight text-gray-900">My {car.brand}</h1>
               </div>
           </header>
           <main>
               <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex gap-5 justify-center"> 
                   <div>
                       <h3> Model: {car.model}</h3>
                       <h3> Year: {car.year}</h3>
                       <h3> Color: {car.color}</h3>
                   </div>      
                   <div className="flex gap-5 justify-center">
                       <button className={BlueButton} onClick={updateColor}>Blue</button>
                   </div>
                      
               </div>
           </main>
       </div>
       </>
            
            );
}
export default Quiz3;