import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
