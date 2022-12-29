import { useLocalStorage } from './hooks/useLocalStorage';
import {
  ContactsContainer,
  PhoneBookTitle,
  ContactsApp,
  ContactsTitle,
} from './App,styled';
import { AppAddContactsForm } from './AppAddContactsForm';
import AppContactsList from './AppContactsList';
import { AppContactsFilterInput } from './AppContactsFilterInput';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const formSubmitHandler = data => {
    setContacts(state => [...state, ...data]);
  };

  const setContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <ContactsContainer>
      <ContactsApp>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <AppAddContactsForm onSubmit={formSubmitHandler} contacts={contacts} />
        {contacts.length !== 0 && (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <AppContactsFilterInput />
            <AppContactsList contacts={contacts} setContact={setContact} />
          </>
        )}
      </ContactsApp>
    </ContactsContainer>
  );
};
