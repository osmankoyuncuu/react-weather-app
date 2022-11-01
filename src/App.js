import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./Styles/Global.styled";

const theme = {
  color: {
    first: "white",
  },
  responsive: {
    small: "576px",
    medium: "768px",
    large: "992px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
