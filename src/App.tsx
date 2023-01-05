import { ModalProvider } from "./context/ModalContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
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
        <UserPage>
          <></>
        </UserPage>
      </ModalProvider>
    </>
  );
}

export default App;
