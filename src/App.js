import "./App.css";
import { useState } from "react";
import Button from "./components/UI/Button";

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);

  console.log("Hi!");

  const toogleParagraph = () => {
    setIsParagraphShown((prevIsParagraphShown) => !prevIsParagraphShown);
  };

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {isParagraphShown && <p>New Paragraph</p>}
      <Button onClick={toogleParagraph}>Показать / Скрыть</Button>
    </div>
  );
}

export default App;
