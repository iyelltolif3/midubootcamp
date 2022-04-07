import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>Esta es mi primera descripción</p>
}

const App = () => {   
  return (
    <div className="App">
      <Mensaje color= 'red' message='Estamos trabajando' />
      <Mensaje color= 'green' message='En un curso'/>
      <Mensaje color= 'yellow' message='De react'/>
      <Description/>
    </div>
  );
}

export default App;
