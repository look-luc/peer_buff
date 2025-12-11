import React from 'react';
import './join.css';
import Header from '../header/header'

function Join(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='join'>
                <h1>
                    Join Our Peer Buff Team
                </h1>
                <p className='join-details'>
                    <h3>
                        What is our Training Program
                    </h3>
                    <p>
                        This will be a good way to hands on, interactive peer support training, communication, and 
                        group activities to prepare for supporting guests.  Through this training, participants will
                        learn how to use their own lived experience to better help guests.
                    </p>
                    <h3>
                        What does it mean to be a Peer Buff?
                    </h3>
                    <p>
                        Someone who can identify lived experience in a behavioral health mindset to their fellow 
                        peers and being actively present to reduce the stigma while providing any additional 
                        recourses and having wellness at the forefornt during recovery.
                    </p>
                    <h3>
                        What is our training consists of?
                    </h3>
                    <p>
                        TBD for now... but will be during the summer/winter break with a chance to have practice 
                        providing scenerios once a week with the help of a theater group.
                    </p>
                    <p>
                        After one has done the training, a mock trial will be administered as a final check.
                    </p>
                </p>
            </div>
            
        </div>
    )
}
export default Join