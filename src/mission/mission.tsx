import React from 'react';
import './mission.css';
import Header from '../header/header'

function Mission(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='mission'>
                <h1>
                    Our Mission
                </h1>
                <p className='mission_statement'>
                We aim to provide a safe and open space for CU Boulder students to hang out or to have someone to listen or have someone to provide peer support.  College is hard, both undergrad and grad school so we want to give a space on campus that students can step out from a stressful and potentially chaotic period.  We aim to lift the weight of school and provide any help possible while also removing any stigma against mental health.  
                </p>
            </div>
        </div>
    )
}
export default Mission