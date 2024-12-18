import { useEffect } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ScrollToTop;
