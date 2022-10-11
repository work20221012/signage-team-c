import logoA from './img/logo-b.png';
import logoB from './img/logo2-b.png';
import './App.css';
import Tabs from './Tab';

function App() {
  const wrapStyle = {
    width: 1080,
    height: 1920,
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: 'solid 0px #000',
    position: 'relative' 
  }

  const contentStyle = {
    position: 'absolute',
    left: 0,
    top: 143,
    width: 1080,
    height: 1647
  }

  return (
    <div style={wrapStyle}>
      <header>
        <img src={logoA} />
      </header>
      <div style={contentStyle}>
        <Tabs />
      </div>
      <footer>
        <img src={logoB} />
      </footer>
    </div>
  );
}

export default App;
