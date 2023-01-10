import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import { ModalAnnounceProvider } from "./context/AnnounceContext";
import { RegisterProvider } from "./context/RegisterContext";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { ModalDeleteProvider } from "./context/DeleteContext";
import { UserAnnounceProvider } from "./context/UserAnnounceContext";
import { CardProvider } from "./context/CardModalContext";

function App() {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserAnnounceProvider>
            <ModalDeleteProvider>
              <ModalAnnounceProvider>
                <CardProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/UserPage"
                      element={<UserPage children={undefined} />}
                    />
                  </Routes>
                </CardProvider>
              </ModalAnnounceProvider>
            </ModalDeleteProvider>
          </UserAnnounceProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
}

export default App;
