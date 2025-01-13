import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "./index.css";
import Intro from "./Intro";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: "100vh",
        }}
      >
        <Intro />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
