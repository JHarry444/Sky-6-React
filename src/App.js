import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header />
      {Button()}
      <Button/>
      <Footer />
    </div>
  );
}

export default App;
