import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider,Navigate, useNavigate} from 'react-router-dom'
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Main from "./pages/Main.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
    const navigate = useNavigate();
    const router = createBrowserRouter([
        {path:"/",
          element:navigate('/login')
        },
        {path:"/login",
          element:<Login />
        },
        {path:"/forgotpassword",
            element:<ForgotPassword />
        },
        {path:"/resetPassword",
            element:<ResetPassword />
        },{path:"/main",
            element:<MainPage />

        }
      ])
    return (
        <div className='p-4 h-screen flex items-center justify-center'>
<ToastContainer />
<RouterProvider router={router}
/>
    </div>
    );
}

export default App;