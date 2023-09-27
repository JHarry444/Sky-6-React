import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/state/Counter';
import Converter from './components/state/Converter';
import FilterableProductTable from './components/state/exercises/FilterableProductTable';
import FilterableTrainers from './components/external/FilterableTrainers';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <br />
      <Converter />
      <br />
      <FilterableProductTable/>
      <FilterableTrainers/>
      <Footer />
    </div>
  );
}

export default App;
