import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { PlateDetails } from "./pages/PlateDetails";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PlateDetails />
    </ThemeProvider>
  );
}

export default App;
