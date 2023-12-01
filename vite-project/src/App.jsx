import { RouterProvider, createBrowserRouter,  } from "react-router-dom";
import HomePage from './Pages/Home';

export default function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <HomePage />,
   } ,
  ]);
  return ( 
  <>
    <RouterProvider router={router} />
  </>
  );
}