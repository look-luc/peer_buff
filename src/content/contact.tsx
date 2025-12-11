import './contact.css'
import Header from '../header/header'

function Contact(){
    return(
        <div className='wrapper'>
            <Header/>
            <div className='contact'>
                <h1>
                    Contact Us
                </h1>
                <p className='statement'>
                    If you want to contact us, you can email Luc De Nardi at luc.denardi@gmail.com with any 
                    questions.
                </p>
            </div>
        </div>
    )
}
export default Contact