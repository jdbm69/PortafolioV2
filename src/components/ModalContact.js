import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ModalContact = ({ setShowModalContact }) => {

    const [messageForm, setMessageForm] = useState(null);
    const [showMessageForm, setShowMessageForm] = useState(false);

    const handleClose = () => {
        document.getElementById("modalTwo").style.animation = 'zoomOutDown 1s';
        setTimeout(() => {
            setShowModalContact(false);
        }, 800);
    }

    const form = useRef();
      
    const sendEmail = (e) => {
         e.preventDefault();
      
        emailjs.sendForm('service_v3ugo0e', 'template_7s5ej9h', form.current, 'VG0P3QZAeS_GZmyrY')
        .then((result) => {
            console.log(result.text);
            setMessageForm('Message sent successfully');
            setShowMessageForm(true);
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
            setTimeout(() => {
                document.getElementById("message-form").style.animation = 'zoomOut 1s';
            }, 3000)
            setTimeout(() => {
                setShowMessageForm(false);
            }, 3800)
        }, (error) => {
            console.log(error.text);
            setMessageForm('Error');
        });
    };
  
    return (
        <div className="modalContact-container" id="modalTwo">
            <div className="modalContact-box">
                <div className='modal-title'>
                    <p>Contact Form</p>
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input 
                        type="text"
                        placeholder='Your name'
                        name='user_name'
                        id='name'
                    />  
                    <input 
                        type="email"
                        placeholder="Your email"
                        name='user_email'
                        id='email'
                    />
                    <textarea
                        type="textarea"
                        id="message"
                        placeholder="Message"
                        name='message'
                    /> 
                    <input
                        type="submit"
                        value='Submit Form'
                        id="submit"
                    /> 
                    {showMessageForm && 
                        <div className='message-form' id='message-form'>
                            <p className='message'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                                </svg>
                                {messageForm}
                            </p>
                        </div>
                    }   
                </form>
                <div className="contact-buttons">
                    <a rel="noreferrer" href="mailto:jhonnydevb@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/jhonny-bracho-782387235" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                    <a rel="noreferrer" href="https://github.com/jdbm69" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </div>       
            </div>
        </div>
    );
}
  
export default ModalContact;