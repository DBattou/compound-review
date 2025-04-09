import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import USER_LIST from './data/userList';

function App() {
  const handleAddContact = () => {
    console.log('A contact has been added');
  };

  return (
    <>
      <Header onAddContact={handleAddContact} />
      <hr className="w-full pb-8" />
      <ContactList contacts={USER_LIST} />
    </>
  );
}

export default App;
