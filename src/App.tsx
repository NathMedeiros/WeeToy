import { LoginProvider } from "./context/LoginContext";
import { RegisterProvider } from "./context/RegisterContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
