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
                                A Computational Linguistic master's student at CU Boulder.  Origanly from Newark Delaware.  I believe that having someone that has gone through their own mental health struggles to talk to can help tramendantly.  If you have any questions about our volunteering opportunities or general questions about what we do, you can email me at luc.denardi@colorado.edu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default People