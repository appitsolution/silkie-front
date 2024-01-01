import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Answer from "./pages/answer";
import News from "./pages/news";
import Privacy from "./pages/privacy";
import Permission from "./pages/permission";
import Docs from "./pages/docs";
import Rules from "./pages/rules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="/news" element={<News />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/permission" element={<Permission />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}

export default App;
