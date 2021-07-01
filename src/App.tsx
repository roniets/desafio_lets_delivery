import Route from './routes.js';
import NavHeaderBar from './components/navHeaderBar/navHeaderBar'
import Footer from './components/footer/footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavHeaderBar />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
