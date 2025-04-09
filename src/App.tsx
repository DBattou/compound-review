import './App.css';
import Header from './components/Header';

function App() {
  const handleAddContact = () => {
    console.log('A contact has been added');
  };

  return (
    <>
      <Header onAddContact={handleAddContact} />
    </>
  );
}

export default App;
