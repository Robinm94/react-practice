import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
//sick
const App = () => {
  return (
    <BrowserRouter>

        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
