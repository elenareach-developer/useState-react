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
             <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Count</h1>
                </div>
            </header>
            <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">       
                    <div className="flex flex-row gap-5">
                        <button className={BlueButton} onClick={decrimentCount}>-</button>
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{count}</h1>
                        <button className={BlueButton} onClick={incrementCount}>+</button>
                    </div>
                       
                </div>
            </main>
        </>
     );
}
export default Count;