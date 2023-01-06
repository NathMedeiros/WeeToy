import { LoginProvider } from "./context/LoginContext";
import { RegisterProvider } from "./context/RegisterContext";
import { ModalAnnounceProvider } from "./context/ModalAnnounceContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";

function App() {
  return (
    <>
      <ModalAnnounceProvider>
        <RegisterProvider>
          <LoginProvider>
            <Global />
            <ResetCss />
            <Home />
            <Global />
            <UserPage>
              <></>
            </UserPage>
          </LoginProvider>
        </RegisterProvider>
      </ModalAnnounceProvider>
    </>
  );
}

export default App;
