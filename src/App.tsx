import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TimersListPage from "./pages/TimersListPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route element={<TimersListPage />} path="/" />
      </Routes>
    </div>
  );
}
