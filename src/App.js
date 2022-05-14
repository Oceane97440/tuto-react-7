import logo from './logo.svg';
import FunctionState from './components/FunctionState';
import FunctionUseEffet from './components/FunctionUseEffet';
import Todo from './components/Todo';
import './App.css';

function App() {

  
  return (
    <div className="App">
      {/* <FunctionState/> */}
      <Todo/>
      <FunctionUseEffet/>
    </div>
  );
}

export default App;
