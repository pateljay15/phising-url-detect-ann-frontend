import './App.css';
import Card from './Card';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TechStack from './Components/TechStack';
import "./css/style.css"
import "./css/utilities.css"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
