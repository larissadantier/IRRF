import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationRoutes from "../../routes";
import Header from "../Header";
import { store } from "../../redux/store";
import { Container } from "./styles";
import GlobalStyles from "../../assets/styles/global";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Container>
          <NavigationRoutes />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
