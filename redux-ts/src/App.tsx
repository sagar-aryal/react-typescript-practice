import { Provider } from "react-redux";

import { store } from "./redux";
import PackagesList from "./components/PackagesList";

const App = () => {
  return (
    <Provider store={store}>
      <h2>Search for a Package</h2>
      <PackagesList />
    </Provider>
  );
};

export default App;
