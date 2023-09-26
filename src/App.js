import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import StaticData from './components/StaticData';
import Counter from './components/state/Counter';
import Converter from './components/state/Converter';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <br />
      <Converter />
      <br />
      <Footer />
    </div>
  );
}

export default App;
