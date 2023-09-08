import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removed } from '../../redux/phonebookSlice';
import s from './contactsList.module.css';

const ContactsList: React.FC = (): JSX.Element => {
  const state = useAppSelector((state) => state.phonebook);
  const dispatch = useAppDispatch();

  const removeContact = (id: string) => {
    dispatch(removed(id));
  };

  const renderContacts = () => {
    const filterValue = state.filter.toLowerCase();

    return state.contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();

      return nameValue.includes(filterValue);
    });
  };

  const getContacts = renderContacts().map((el) => (
    <li className={s.item} key={el.id}>
      <p>{el.name}</p>
      <p>{el.phoneNumber}</p>
      <button className={s.btn} onClick={() => removeContact(el.id)}>
        x
      </button>
    </li>
  ));

  return <>{getContacts && <ul className={s.list}>{getContacts}</ul>}</>;
};

export default ContactsList;
