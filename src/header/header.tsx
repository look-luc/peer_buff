import './header.css'
import { useNavigate, useLocation } from "react-router";

function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div className='header'>
            <div className='nav-bar'>
                <button 
                    className='to_home'
                    onClick={
                        ()=>{
                            navigate('/')
                        }
                    }>
                    <h1>
                        Peer Buff
                    </h1>
                </button>
            </div>
            <div className='button-cont'>
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
                <button
                    className='buttons'
                    onClick={
                        ()=>{
                            navigate("/Acknowledgement")
                        }
                    }
                >
                    Acknowledgement
                </button>
                <button
                    className='buttons'
                    onClick={
                        ()=>{
                            navigate('/Our Team')
                        }
                    }
                >
                    Our Team
                </button>
                <button
                    className='buttons'
                    onClick={
                        ()=>{
                            navigate('/Contact')
                        }
                    }
                >
                    Contact
                </button>
            </div>
        </div>
    )
}
export default Header