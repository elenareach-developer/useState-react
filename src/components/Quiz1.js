import React from "react";
import {BlueButton} from "../utils/styleConsts"

const Quiz1=()=>{
    let title="Set up useState"

    const handleOnClick=()=>{
       title = "the useState was set up successfully"
    }


    return( 
        <div className="p-28 bg-red-300 flex flex-col gap-8 justify-center max-w-xl">
                <header class="bg-white shadow">
                    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-8 justify-center">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                    </div>
                </header>
                <main>
                    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">       
                        <div className="bottom">
                            <button className={BlueButton} onClick={handleOnClick}>Change title</button>
                        </div>
                    </div>
                </main>
    </div>
        
        );
}
export default Quiz1;