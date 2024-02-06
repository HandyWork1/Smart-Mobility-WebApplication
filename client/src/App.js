import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md py-4">
        {/* Add your header content here */}
      </header>
      <main className="flex-grow">
        <Home />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;
