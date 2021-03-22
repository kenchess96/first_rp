import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent'
import Ccomponent from './Ccomponent';
import { Menu } from './Menu';

import UserProfiles from './Component/UserProfiles';
import Succes from './Component/Succes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Facebook
        </p>
        <Succes />
      </header>
    </div>
  );
}

export default App;
