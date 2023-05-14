import './App.css';
import Navbar from './components/header/navbar';
import Content from './components/main/content';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Footer/> 
    </div>
  );
}

export default App;
