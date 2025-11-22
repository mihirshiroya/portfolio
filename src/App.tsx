import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Main from "./Components/Main";
import ScrollToTop from "./Components/scroll-to-top";
import Loading from "./Components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Main children={undefined} />
            <div className="absolute right-5 bottom-5">
              <ScrollToTop />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
