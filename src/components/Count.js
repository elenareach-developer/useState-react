import React , {useState} from "react";
import {BlueButton} from "../utils/styleConsts"

const Count=()=>{
    const [count, setCount]  = useState(0 );

    const decrimentCount=()=>{  
        setCount(previoseState=>previoseState-1);
        setCount(previoseState=>previoseState-1);

    }

    const incrementCount=()=>{
        setCount(count+1);
    }

    return( 
        <>
         <div className="p-28 bg-green-300 flex flex-col gap-8 justify-center  w-2/3">
             <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Count</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">       
                    <div className="flex flex-row gap-5 justify-center">
                        <button className={BlueButton} onClick={decrimentCount}>-</button>
                        <h1 className="text-3xl font-bold text-gray-900 text-center">{count}</h1>
                        <button className={BlueButton} onClick={incrementCount}>+</button>
                    </div>      
                </div>
            </main>
        </div>
        </>
     );
}
export default Count;