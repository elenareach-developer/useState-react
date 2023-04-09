import React , {useState} from "react";

const Quiz2=()=>{
    const [count, setCount]  = useState(0 );

    const incrementCount=()=>{
    }
    

    return( 
        <div className="boxContainer cardContainer quizColor">
            <div className="card dark">
                <div className="container light">
                    <div className="title titleColor">
                        <span>Test:</span>
                            <h2>Count</h2>
                    </div>
                    <div className="bottom">
                            <span className="text">{count}</span>
                        <button onClick={incrementCount}>+</button>
                    </div>
                </div>
            </div>
            </div>);
}
export default Quiz2;