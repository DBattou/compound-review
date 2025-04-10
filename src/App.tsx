import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';

import { useState } from 'react';
import { USER_LIST as defaultContacts, type Contacts } from './data/userList';

const storedContactKey = 'contacts';

function App() {
  const handleAddContact = () => {
    console.log('A contact has been added');
  };

  const [contacts] = useState<Contacts>(() => {
    const contacts = localStorage.getItem(storedContactKey);
    if (!contacts) return defaultContacts;

    try {
      return JSON.parse(contacts);
    } catch {
      return defaultContacts;
    }
  });

  return (
    <>
      <Header onAddContact={handleAddContact} />
      <hr className="w-full pb-8" />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
