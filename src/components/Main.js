import React, { useEffect } from "react";
import useApi from "./fetchHook";

const  Main=() =>{
  const [data, isLoading] = useApi('https://jsonplaceholder.typicode.com/todos/1');
  
    useEffect(()=>{
       if(data) {
        console.log(data.title);
       }
    }, [data])
  
   return <>
        {isLoading?<p>Loading...</p>:<div>{data?.title}</div>}
   </>
  }

// //const Main=()=>{

//     return(
//         <>
//             <div className="header">
//                 <div className="row1">
//                     <h1>A room without books is like <br /> a body without a soul</h1>
//                 </div>
//                 <div className="row1">
//                     <h2>Find your book</h2>
//                 </div>
//                 <div className="search">
//                     <input type="text" placeholder="Enter Your Book Name" />
//                     <button><i class="fa-solid fa-magnifying-glass"></i></button>
//                 </div>
//                 <img src="./assets/book-banner.jpg"/>
//             </div>
//         </>
//     )
// }
export default Main;