import { ThemeProvider } from 'styled-components';

import Navigation from "./navigations/Navigation";
import { theme } from './utils/theme';


const MainApp = () => {
  return (

    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default MainApp