import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContacts(contact.id)}
          />
          </li>
      ))}
    </ul>
  );
}
