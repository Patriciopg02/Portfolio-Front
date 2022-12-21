import './App.css';
import {GeneralContainer, Landing, Themes} from './components';
import {ThemeProvider} from 'styled-components'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Themes['Light']}>
        <Landing theme={Themes['Light']}/>
        <GeneralContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
