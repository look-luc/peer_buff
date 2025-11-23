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
                    If you want to contact us, you can call us at [placeholder phone number]
                </p>
            </div>
        </div>
    )
}
export default Contact