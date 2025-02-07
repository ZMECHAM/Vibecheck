import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/nav"


function App() {
  // Manage login state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <>
      {/* Only show nav bar if user is logged in */}
      {isLoggedIn && <Navbar/>}
      <main>
        <Outlet context={{ isLoggedIn, setIsLoggedIn }}/>
      </main>
    </>
  );
}

export default App
