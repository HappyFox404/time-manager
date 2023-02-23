import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import ApplicationRoutes from "./core/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="application-page columns">
        <Routes>
          <Route path={ApplicationRoutes.Base} element={<Base />} />
          <Route path={ApplicationRoutes.Authorization} element={<Authorization />} />
          <Route path={ApplicationRoutes.Registration} element={<Registration />} />
          <Route path="*" element={<Navigate to={ApplicationRoutes.Base} replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
