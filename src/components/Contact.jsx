import { useState } from "react"
import ContactDetail from "./ContactDetail";

const Contact = (props) => {
    const [contacts, setContacts] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        setContacts(true);
    }

    return (
        <div className="contacts-div">
            <div className="image"><img id ="left" src={props.contactData.picture.large} alt=""/></div>    
            <div className="contact">
                <h1>{props.contactData.name.first} {props.contactData.name.last}</h1>
                <h3>Home: {props.contactData.phone}</h3>
                <h3>Mobile: {props.contactData.cell}</h3>
            </div>
            <div className="more"><button onClick={onClick}>More Info</button>
                {contacts ? <ContactDetail data = {props.contactData}/>: null}
            </div>  
        </div>
    );
};

export default Contact;

