import './App.css';
import HelloHooks from './components/HelloHooks';
import Count from './components/Count';
import Layout from './components/Layout';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App cardContainer">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="count" element={<Count />} />
          <Route path="hellohooks" element={<HelloHooks />} />
          <Route path="quiz1" element={<Quiz1 />} />
          <Route path="quiz2" element={<Quiz2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
