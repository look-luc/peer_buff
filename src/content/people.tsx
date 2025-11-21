import React from 'react';
import "./people.css"
import Header from '../header/header'
import luc_head_shot from '../assets/images/luc_head_shot.jpg'

function People(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='contact'>
                <p className='contact-p'>
                    <img src={luc_head_shot} alt='Luc De Nardi head shot' className='image'/>
                    <h3 className='name'>
                        Luc De Nardi
                    </h3>
                    <div>
                        <p className='description'>
                            A Computational Linguistic master's student at CU Boulder.  Origanly from Newark Delaware
                        </p>
                    </div>
                </p>
            </div>
        </div>
    )
}
export default People