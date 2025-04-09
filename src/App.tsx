import './App.css';
import Header from './Header';

function App() {
  const handleAddContact = () => {
    console.log('A contact has been added');
  };

  return (
    <div className="flex flex-row place-content-between">
      <Header addContact={handleAddContact}></Header>
    </div>
  );
}

export default App;
