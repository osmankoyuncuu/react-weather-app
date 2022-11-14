import { ThemeProvider } from "styled-components";
import { DetailProvider } from "./context/DetailContext";
import { GetWeatherProvider } from "./context/GetWeatherContext";
import { SearchTextProvider } from "./context/SearchTextContext";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./Styles/Global.styled";
import theme from "./Styles/theme.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchTextProvider>
        <DetailProvider>
          <GetWeatherProvider>
            <AppRouter />
          </GetWeatherProvider>
        </DetailProvider>
      </SearchTextProvider>
    </ThemeProvider>
  );
};

export default App;
