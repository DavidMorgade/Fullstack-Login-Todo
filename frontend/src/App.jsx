import './App.css';

//Theming
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { lightTheme } from './components/GlobalStyles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div>
        <h1>Hola Mundo</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
