import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col font-sans h-max bg-blend-saturation bg-[#F5F6FB]">
      
      <Navbar />
      <Dashboard />
      
    </div>
  );

}

export default App;
