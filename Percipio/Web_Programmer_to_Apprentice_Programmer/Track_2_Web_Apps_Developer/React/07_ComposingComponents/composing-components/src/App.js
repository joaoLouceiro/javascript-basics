import image from "./pexels-arkhod-9556703.jpg";
import './App.css';
import Table from './Table';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <Table/>
      </header>
    </div>
  )
}
