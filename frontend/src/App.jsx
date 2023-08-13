import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductSection from './components/Section'
function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      <Navbar />
      <ProductSection />
      <Dashboard />
      
    </div>
  );

}

export default App;
