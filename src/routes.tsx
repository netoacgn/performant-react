import {
    createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/home";
import './index.css';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
]);