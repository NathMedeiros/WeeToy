import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import { ModalAnnounceProvider } from "./context/AnnounceContext";
import { RegisterProvider } from "./context/RegisterContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <>
      <ModalAnnounceProvider>
        <RegisterProvider>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/UserPage"
                element={<UserPage children={undefined} />}
              />
            </Routes>
          </LoginProvider>
        </RegisterProvider>
      </ModalAnnounceProvider>
    </>
  );
}

export default App;
