import React from 'react';
import Input from './Input';
const ContactForm = () => {
  return (
    <div className="input-container">
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Input title='Name'/>
        <Input title='Email'/>
        <textarea style={{textAlign: 'center', width: '350px', maxWidth: '350px', height: '150px'}} defaultValue={'Your Message'}/>
      </form>
    </div>
  );
};

export default ContactForm;
