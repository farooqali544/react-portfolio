import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
