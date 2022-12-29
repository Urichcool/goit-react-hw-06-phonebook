import { ContactsList } from './App,styled';
import AppContactsItem from './AppContactsItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const AppContactsList = ({ contacts, setContact }) => {
  const filter = useSelector(state => state.filter);

  return (
    <ContactsList>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ name, id, number }) => (
          <AppContactsItem
            name={name}
            key={id}
            number={number}
            id={id}
            setContact={setContact}
          />
        ))}
    </ContactsList>
  );
};

export default AppContactsList;

AppContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContact: PropTypes.func.isRequired,
};
