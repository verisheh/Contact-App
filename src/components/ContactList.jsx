import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem data={contact} key={contact.id} deleteHandler={deleteHandler} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>Not Contact Yet!</p>
      )}
    </div>
  );
};

export default ContactList;
