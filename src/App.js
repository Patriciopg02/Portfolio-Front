import './App.css';
import {GeneralContainer, Landing, Themes} from './components';
import {ThemeProvider} from 'styled-components'
import { useState } from 'react';
import Switch from './components/Switch/Switch';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [theme, setTheme] = useState('Light');

  return (
    <div className="App">
      <ThemeProvider theme={Themes[theme]}>
        <Switch theme={theme} setTheme={setTheme}/>
        <Navbar/>
        <Landing theme={Themes[theme]} setTheme={setTheme}/>
        <GeneralContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
