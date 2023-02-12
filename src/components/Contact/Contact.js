import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          Echipa noastra este aici pentru dumneavoastra,
          8pm - 8am (Romania timezone)
        </p>
        <p>Va asteptam</p>
      </div>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>0771543776 </p>
        <p>luni - Vineri ,8pm - 8am </p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          Ne poti contacta echipa la bbogdanmarian24@gmail.com
          sau prin formularul de mai jos.
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
