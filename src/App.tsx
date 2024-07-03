import "./App.css";
import { Boxes } from "./components/BackgroundBoxes";
import { HorizontalScroll } from "./components/horizontal-scroll/HorizontalScroll";
import ContentComponent from "./components/landing/Content";
import HeadingComponent from "./components/landing/Heading";

function App() {
  return (
    <>
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center bg-bgprimary">
        <Boxes />
        <HeadingComponent heading="BitPay" />
        <ContentComponent content="Revolutionizing digital transactions, one bit at a time." />
      </div>
      <HorizontalScroll />
    </>
  );
}

export default App;
