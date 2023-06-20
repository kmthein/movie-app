import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import {loader as upcomingLoader} from "./components/Upcoming";
import {loader as popularLoader} from "./components/Popular";
import {loader as detailLoader} from "./components/MovieDetail";
import {loader as searchLoader} from "./components/Searched";
import MovieDetail from "./components/MovieDetail";
import Detail from "./layout/Detail";
import Searched from "./components/Searched";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {index: true, element: <Popular />, loader: popularLoader},
        {path: "/upcoming", element: <Upcoming />, loader: upcomingLoader},
      ]
    },
    {
      path: "/movie/:id",
      element: <Detail />,
      children: [
        {index: true, element: <MovieDetail />, loader: detailLoader},
      ]
    },
    {
      path: "/search/:title",
      element: <Detail />,
      children: [
        {index: true, element: <Searched />, loader: searchLoader}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
