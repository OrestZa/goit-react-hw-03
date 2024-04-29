import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import list from '../../list.json';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return list;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (evt) => {setSearchTerm(evt.target.value)}

  const visualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  const onAddContact = (newContact) => {
    const isDuplicateNumber = contacts.some(contact => contact.number === newContact.number)
    if (isDuplicateNumber) { alert('This phone number already exist!') } else { setContacts(prevContacts => { return [...prevContacts, newContact] }) }
  }

  const deleteContact = (contactId) => {
    setContacts(prevContacts=> { return prevContacts.filter(contact => contact.id !== contactId)})
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className={css.wrap}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAddContact} />
      <SearchBox searchTerm={searchTerm} onChange={handleChange} />
      <ContactList contacts={visualContacts} onDeleteContacts={deleteContact} />
    </div>
  );
}
