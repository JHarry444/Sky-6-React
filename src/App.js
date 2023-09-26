import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Trainer from './components/Trainer';
import StaticData from './components/StaticData';
import Counter from './components/state/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter/>
      <br/>
      {Button()}
      <Button/>
      <StaticData/>
      <Footer />
    </div>
  );
}

export default App;
