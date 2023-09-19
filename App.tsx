import { Provider } from "react-redux";
import Navigation from "./src/navigations/Navigation";

import store from "./src/store/store";


function App(): JSX.Element {
  return (

    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
