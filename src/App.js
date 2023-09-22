import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Trainer from './components/Trainer';

function App() {
  return (
    <div className="App">
      <Header />
      {Button()}
      <Button/>
      <Trainer/>
      <Footer />
    </div>
  );
}

export default App;
