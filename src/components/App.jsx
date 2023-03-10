import {
  ContactsContainer,
  PhoneBookTitle,
  ContactsApp,
  ContactsTitle,
} from './App,styled';
import { AppAddContactsForm } from './AppAddContactsForm';
import AppContactsList from './AppContactsList';
import { AppContactsFilterInput } from './AppContactsFilterInput';
import { selectContacts } from '../redux/contactsSlice';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ContactsContainer>
      <ContactsApp>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <AppAddContactsForm />
        {contacts.length !== 0 && (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <AppContactsFilterInput />
            <AppContactsList />
          </>
        )}
      </ContactsApp>
    </ContactsContainer>
  );
};
