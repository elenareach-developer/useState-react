import React , {useState} from "react";

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
        <div className="boxContainer cardContainer">
            <div className="card dark">
                <div className="container light">
                    <div className="title titleColor">
                            <h1>Count</h1>
                    </div>
                    
                    <div className="bottom">
                        <button onClick={decrimentCount}>-</button>
                            <span className="text">{count}</span>
                        <button onClick={incrementCount}>+</button>
                    </div>
                </div>
            </div>
            </div>);
}
export default Count;