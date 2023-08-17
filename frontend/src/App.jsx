import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FactorState from './context/factorState';

function App() {
  return (
    <div className="flex flex-col font-sans h-max bg-blend-saturation bg-[#F5F6FB]">
      
      <FactorState>
      <Navbar />
      <Dashboard />
      </FactorState>
      
    </div>
  );

}

export default App;
