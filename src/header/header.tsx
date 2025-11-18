import React from 'react';
import './header.css'
import { useNavigate, useLocation } from "react-router";

function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div className='header'>
            <div className='nav-bar'>
                <h1>
                    Peer Buff
                </h1>
            </div>
            <div className='button-cont'>
                <button 
                    className='buttons'
                    onClick={
                        ()=>{
                            navigate("/")
                        }
                    }
                >
                    Home
                </button>
                <button
                    className='buttons'
                    onClick={
                        ()=>{
                            navigate("/Mission")
                        }
                    }
                >
                    Mission
                </button>
            </div>
        </div>
    )
}
export default Header