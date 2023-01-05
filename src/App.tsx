import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";
import imageTest from "./assets/test.webp"
import { CardHistoricBuy } from "./components/CardHistoricBuy";

function App() {
  return (
    <>
      <ResetCss/>
      <Global/>
      <CardHistoricBuy name="teste" price={2.50} image={imageTest} />
    </>
  );
}

export default App;