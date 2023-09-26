import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import StaticData from './components/StaticData';
import Counter from './components/state/Counter';
import Converter from './components/state/Converter';
import FilterableProductTable from './components/state/exercises/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <br />
      <Converter />
      <br />
      <FilterableProductTable/>
      <Footer />
    </div>
  );
}

export default App;
