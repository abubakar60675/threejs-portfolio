import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ScrollToTop />}>
        <Route index element={<Home />} exact />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
