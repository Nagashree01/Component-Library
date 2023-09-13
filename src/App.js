import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./documentation/header/Header";
import { Home } from "./pages/home/Home";
import { Components } from "./pages/components/Components";
import { AlertDoc } from "./documentation/AlertDoc";
import { ButtonDoc } from "./documentation/ButtonDoc";
import { HeadingDoc } from "./documentation/HeadingDoc";
import { AvatarDoc } from "./documentation/AvatarDoc";
import { TextDoc } from "./documentation/TextDoc";
import { BadgeDoc } from "./documentation/BadgeDoc";
import { ImageDoc } from "./documentation/ImageDoc";
import { CardDoc } from "./documentation/CardDoc";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/alert" element={<AlertDoc />} />
          <Route path="/button" element={<ButtonDoc />} />
          <Route path="/heading" element={<HeadingDoc />} />
          <Route path="/avatar" element={<AvatarDoc />} />
          <Route path="/badge" element={<BadgeDoc />} />
          <Route path="/text" element={<TextDoc />} />
          <Route path="/image" element={<ImageDoc />} />
          <Route path="/card" element={<CardDoc />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
