import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
