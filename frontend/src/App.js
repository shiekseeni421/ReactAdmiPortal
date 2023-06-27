import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import ViewPage from "./pages/ViewPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/homepage" element={<HomePage />}></Route>
        <Route exact path="/createPage" element={<CreatePage />}></Route>
        <Route exact path="/updatepage" element={<UpdatePage />}></Route>
        <Route exact path="/viewpage" element={<ViewPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
