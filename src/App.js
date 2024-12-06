import CreatePresentation from "./CreatePresentation";
import DocTemplate from "./DocTemplate";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        {/* view last presentation button and create new presentation button will be here */}
        <Route path="/" element={<Main />} />
        {/* last presentation view page */}
        <Route path="/view" element={<DocTemplate />} />
        <Route path="/create-presentation" element={<CreatePresentation />} />
      </Routes>
    </>
  );
}

export default App;
