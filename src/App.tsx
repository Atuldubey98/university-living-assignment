import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TimersListPage from "./pages/TimersListPage";
import WorldClockPage from "./pages/WorldClockPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route element={<TimersListPage />} path="/" />
        <Route element={<WorldClockPage />} path="/world-clock" />
      </Routes>
    </div>
  );
}
