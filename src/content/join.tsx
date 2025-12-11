import React from 'react';
import './join.css';
import Header from '../header/header'

function Join(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='join'>
                <h1>
                    Join Our Team
                </h1>
                <p className='join-details'>
                    If you are interested in becoming a Buff Peer Volunteer, applications will be coming soon. 
                </p>
                <p className='join-details'>
                    Otherwise with questions or interest, please email Luc De Nardi at luc.denardi@colorado.edu
                </p>
            </div>
            
        </div>
    )
}
export default Join