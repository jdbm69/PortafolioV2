import { useState } from 'react';
import Screen from './components/Screen';
import Welcome from './components/Welcome';
import IconsBloq from './components/IconsBloq';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [showScreen, setShowScreen] = useState(false);

  return (
    <div className="app-box">
      <BrowserRouter>
        {!showScreen && <Welcome setShowScreen={setShowScreen}/>}
        {showScreen && <Screen />}
        <IconsBloq /> 
      </BrowserRouter>  
    </div>
  );
}

export default App;