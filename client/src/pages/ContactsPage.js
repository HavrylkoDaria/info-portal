import React from 'react';
import './ContactsPage.css';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-section">
          <h2>Електронна пошта:</h2>
          <p>itm@nupp.edu.ua</p>
        </div>
        <div className="contact-section">
          <h2>Телефон приймальної комісії:</h2>
          <ul>
            <li>+38 (0532) 56-16-04</li>
            <li>+38 (099) 057-65-17</li>
          </ul>
        </div>
        <div className="contact-section">
          <h2>Адреса:</h2>
          <p>36011, м. Полтава, Першотравневий проспект, 24</p>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Карта Google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.4481198257516!2d34.540520115675225!3d49.59304637937098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127ab46a1b0c7b3%3A0x27899d2c3be4f348!2z0LLRg9C70LjRhtGPINCd0L7RgNC-0LrQuNC5INC90L7QsdC70LDRgdGC0YDQuNC-0L3QviwgMjQsINGB0L_QvtC70YzQvdCw0Y8g0L7QsdC70LDRgdGC0YDQuNGC0LXRgNCxLCDQotCw0YDQsNC90LTRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1625427913588!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactsPage;