import './App.css';
import HelloHooks from './components/HelloHooks';
import Count from './components/Count';
import Layout from './components/Layout';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import UpdateObject from './components/UpdateObject';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-20 items-center">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="count" element={<Count />} />
          <Route path="hellohooks" element={<HelloHooks />} />
          <Route path="object" element={<UpdateObject />} />
          <Route path="quiz1" element={<Quiz1 />} />
          <Route path="quiz2" element={<Quiz2 />} />
          <Route path="quiz3" element={<Quiz3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
