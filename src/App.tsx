import "./App.css";
import { Boxes } from "./components/BackgroundBoxes";

function App() {
  return (
    <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center bg-bgprimary">
      <Boxes />
    </div>
  );
}

export default App;
