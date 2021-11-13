
import { ChakraProvider } from "@chakra-ui/react";
import { WeatherInfo } from './pages/WeatherInfoPage';
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <WeatherInfo />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
