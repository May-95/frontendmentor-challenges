import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Introduction from "./components/Introduction";
import Nutrition from "./components/Nutrition";
import Preparation from "./components/Preparation";

function App() {
  return (
    <>
      <Introduction />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </>
  );
}

export default App;
