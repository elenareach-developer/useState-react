import React, {useState} from "react";
import {BlueButton} from "../utils/styleConsts"

const HelloHooks=()=>{
   const titleArr = ["Hello Hooks", "I know about hooks!"]
   const [title,setTitle] =  useState(titleArr[0]);
   const [hide, setHide] = useState(false);

    const handleOnClick = ()=>{
        setTitle(titleArr[1]);
        setHide(true)
    }

    return(  
    
    <>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">       
            <div className="bottom">
                <button className={BlueButton} onClick={handleOnClick}>Change title</button>
            </div>
                {hide&&<div>Before: {titleArr[0]} --- After: {titleArr[1]}</div>}
        </div>
    </main>
    </>
    
    
    
);
}
export default HelloHooks;