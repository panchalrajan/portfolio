import { BrowserRouter } from "react-router-dom";
import SessionRoutes from "./pages/SessionRoutes";

const App = () => (
  <BrowserRouter>
    <SessionRoutes />
  </BrowserRouter>
);

export default App;
