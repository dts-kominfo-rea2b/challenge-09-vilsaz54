// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    const {name, phone, email, photo} = data;
    return (
        <div className='DataCard'>
            <div className='ImageContact'>
                <img src={photo} alt='images' className='ProfileContact'/>
            </div>
            <div className='DetailContact'>
                <h2 className='Name'>{name}</h2>
                <h2 className='Phone'>{phone}</h2>
                <h2 className='Email'>{email}</h2>
            </div>

        </div>
    )
}

export default Contact;