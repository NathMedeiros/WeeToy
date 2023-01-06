import { Route, Routes } from "react-router-dom";
import { ModalProvider } from "./context/AuthContext";
import { ModalAnnounceProvider } from "./context/ModalAnnounceContext";

import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { Global } from "./styles/global";
import { ResetCss } from "./styles/resetCss";

function App() {
  return (
    <>
      <ModalAnnounceProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/UserPage"
              element={<UserPage children={undefined} />}
            />
          </Routes>
        </ModalProvider>
      </ModalAnnounceProvider>
    </>
  );
}

export default App;
