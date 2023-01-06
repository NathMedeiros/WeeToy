import { ModalAnnounceProvider } from "./context/ModalAnnounceContext";
import { ModalProvider } from "./context/ModalContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";

function App() {
  return (
    <>
      <ModalAnnounceProvider>
        <ModalProvider>
          {/* <Global /> */}
          <ResetCss />
          {/* <Home /> */}
          <Global />
          <UserPage>
            <></>
          </UserPage>
        </ModalProvider>
      </ModalAnnounceProvider>
    </>
  );
}

export default App;
