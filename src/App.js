import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/state/Counter';
import Converter from './components/state/Converter';
import FilterableProductTable from './components/state/exercises/FilterableProductTable';
import FilterableTrainers from './components/external/FilterableTrainers';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TrainerDetails from './components/TrainerDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<h2>Abandon all hope, ye who enter here</h2>}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/converter' element={<Converter />}/>
          <Route path='/products' element={<FilterableProductTable />}/>
          <Route path='/trainers' element={<FilterableTrainers />}/>
          <Route path='/trainer/:id' element={<TrainerDetails/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
