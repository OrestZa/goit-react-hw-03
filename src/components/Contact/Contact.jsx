import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.wrap}>
      <div className={css.div}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={onDelete} className={css.btn}>Delete</button>
    </div>
  );
}
