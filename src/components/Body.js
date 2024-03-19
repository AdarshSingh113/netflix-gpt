import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import PlayMovie from "./PlayMovie";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviePage",
      element: <PlayMovie/>,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
