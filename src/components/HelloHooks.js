import React , {useState}from "react";

const HelloHooks=()=>{
    const [title,setTitle] = useState( "Hello Hooks");
   

    let handleOnClick = ()=>{
        setTitle( "I know about hooks!");
    }

    return(  <div className="boxContainer cardContainer">
            <div className="card">
                <div className="container">
                    <div className="title">
                            <h1>{title}</h1>
                    </div>
                    
                    <div className="bottom">
                        <button onClick={handleOnClick}>Change title</button>
                    </div>
                </div>
            </div>
            </div>);
}
export default HelloHooks;