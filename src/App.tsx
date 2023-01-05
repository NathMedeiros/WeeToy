import { ModalProvider } from "./context/ModalContext";
import { Home } from "./pages/Home";
import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";

function App() {
  return (
    <>
      <ModalProvider>
        <Global />
        <ResetCss />
        <Home />
        <Global />
      </ModalProvider>
    </>
  );
}

export default App;
