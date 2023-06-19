import { useEffect, useState } from 'react';
import axios from 'axios';
import './random.css';
function Random ()
 { 
//      m2mJYj6gpfsoiHaeBoLQ9oDPfP241uJo
   
    
    const [gif,setgif]=useState("");
    async function fetchdata()
    {   
        let x=Math.floor(Math.random()*19);
        const url="https://api.giphy.com/v1/gifs/trending?api_key=m2mJYj6gpfsoiHaeBoLQ9oDPfP241uJo&limit=25&offset=0&rating=g&bundle=messaging_non_clips";
     const {data} = await axios.get(url)
     const imgsrc=data.data[x].images.original.url;
    //  .then((res) =>{ output=res.data.data[x].images.original.url})
        setgif(imgsrc);
    }
    
    useEffect(()=>{
        fetchdata();
    },[]);
    
    function clickhandler(){
               fetchdata();
    }
    return(
        <div className="main_div">
            <div className='insidediv'>
             <img src={gif} alt="" width="450" height="400"/>
             <button onClick={clickhandler}>GENERATE</button>
            </div>
        </div>
    )
}
export default Random;