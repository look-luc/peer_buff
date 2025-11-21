import './acknowledgement.css'
import React from 'react';
import Header from '../header/header'

function Acknowledges(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='acknowledge'>
                <h1>
                    Acknowledgement
                </h1>
                <p className='statement'>
                    We at Peer Buff acknowledge that we are located on the traditional territories and ancestral homelands of the Cheyenne, Arapaho, Ute and many other Native American nations. Their forced removal from these territories has caused devastating and lasting impacts. While we and the University of Colorado Boulder can never undo or rectify the devastation wrought on Indigenous peoples, we commit to improving and enhancing engagement with Indigenous peoples and issues locally and globally.
                </p>
                <p className='statement'>
                    The logo of Peer Buff has been made possible by the talented artist Roman Norquest from Delaware.
                </p>
            </div>
        </div>
    )
}
export default Acknowledges