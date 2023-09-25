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
      <Trainer name="Jordan" age={29} job="Senior Software"/>
      <Trainer name="Cameron" age={30}/>
      {Trainer({name: "Jordan B", age: 26, job: "Software"})}
      <Footer />
    </div>
  );
}

export default App;
