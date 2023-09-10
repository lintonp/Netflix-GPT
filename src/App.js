import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import AppStore from "./Store/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Outlet />
    </Provider>
  );
}

export default App;
