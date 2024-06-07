import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutPage from './components/AboutPage'
import EventPage from './components/EventPage'
import LifeExtension from './components/LifeExtension'
import TechnicalQuiz from './components/TechnicalQuiz'
import Cyber from './components/Cyber'
import Byte from './components/Byte'
import Witty from './components/Witty'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/life_extention",
    element: <LifeExtension />,
  },
  {
    path: "/technical_quiz",
    element: <TechnicalQuiz />,
  },
  {
    path: "/cyber_etymology",
    element: <Cyber />,
  },
  {
    path: "/byte_surge",
    element: <Byte />,
  },
  {
    path: "/witty_byte",
    element: <Witty />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);