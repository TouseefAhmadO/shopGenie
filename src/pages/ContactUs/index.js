import React from 'react'
import style from './style.module.scss'
import { DocTitle } from '../../utility/docTitle';

const ContactUs = () => {
  document.title = DocTitle.contactUs;
  return (
    <div>
        <h1>ContactUs</h1>
    </div>
  )
}

export default ContactUs
