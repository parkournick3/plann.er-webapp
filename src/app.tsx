import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTripPage from "./pages/create-trip";
import TripDetailsPage from "./pages/trip-details";
import "react-day-picker/dist/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
