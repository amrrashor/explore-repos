import { Provider } from "react-redux";
import Navigation from "./src/navigations/Navigation";

import store from "./src/store/store";
import MainApp from "./src";


function App(): JSX.Element {
  return (

    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
