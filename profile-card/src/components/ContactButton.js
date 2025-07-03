import React from 'react';

function ContactButton({ email }) {
    return (
        <a href={`mailto:${email}`} className="contact-btn">
            Contact
        </a>
    );
}

export default ContactButton;
