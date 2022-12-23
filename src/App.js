import logo from './logo.svg';
import '../src/natour/css/natour.css';
import Header from './natour/header/Header';
import About from './natour/about/About';
import Features from './natour/features/Features';
import Tours from './natour/tours/Tours';
import Stories from './natour/stories/Stories';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Features/>
      <Tours/>
      <Stories/>
    </div>
  );
}

export default App;
