import { Phonebook } from '../types/phonebook';

type ReduxType = {
  phonebook: Phonebook;
};

const getSelContacts = (state: ReduxType) => state.phonebook.contacts;
const getSelFilter = (state: ReduxType) => state.phonebook.filter;

export { getSelContacts, getSelFilter };
