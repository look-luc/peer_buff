import React from 'react';
import "./people.css"
import Header from '../header/header'
import luc_head_shot from '../assets/images/luc_head_shot.jpg'

function People(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='contact'>
                <h1>
                    Meet Our Team:
                </h1>
                <div className='contact-details'>
                <img src={luc_head_shot} alt='Luc De Nardi head shot' className='image'/>
                    <div className='contact-info'>
                        <div className='contact-info'>
                            <h3 className='name'>
                                Luc De Nardi
                            </h3>
                            <p className='description'>
                                A Computational Linguistic master's student at CU Boulder.  Origanly from Newark Delaware
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default People