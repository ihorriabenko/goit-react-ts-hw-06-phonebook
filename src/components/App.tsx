import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Title from './Title/Title';
import s from './app.module.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className={s.app}>
      <Title type='h2' text='Phonebook' />
      <ContactsForm />
      <Title type='h2' text='Contacts' />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
