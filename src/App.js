import { useSelector } from 'react-redux';
import './App.css';
import { Input } from './Components/Input';
import Profile from './Components/Profile';
import Spiner from './Components/Spiner';

function App() {
  const store = useSelector(state => state.user.spiner)
  console.log(store);
  if (store) {
    return (
      <div className="App">
        <Spiner />
      </div>
    );
  }
  if (localStorage.getItem('key')) {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Input />

      </div>
    );

  }
}

export default App;
