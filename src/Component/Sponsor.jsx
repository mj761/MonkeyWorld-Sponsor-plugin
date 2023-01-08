import React from "react";
import { useNavigate } from "react-router-dom";


export default function Sponsor(props){

    const navigate = useNavigate();


    return(
        
       
            <div className="sponsor--box">
               
                    <img src={`../images/${props.item.sponImg}`} className="sponimg" alt="placeholder" />
                    <div className="spon--info">
                       <h2>{props.item.title}</h2>
                       <p className="spon--text">{props.item.description}</p>  
                    </div>
                    <div className="button--box">
                         <button  className="button" onClick={() => navigate("/info")}>Læs mere</button>
                    </div> 
            </div>
        
    )
}