import contacts from "../data/contact.json"

import Contact from "./Contact"


const Main = () => {
    return (
        <div>
            {
                contacts.map((contactData , index) => {
                    return <Contact contactData = {contactData} key = { index} />
                })
            }
        </div>
    );
};

export default Main;