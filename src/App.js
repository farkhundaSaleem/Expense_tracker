import './App.css';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Login login={false} />
    <Expenses/>
    </>
  );
}

export default App;
