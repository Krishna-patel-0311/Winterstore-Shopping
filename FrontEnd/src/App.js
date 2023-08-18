import './App.css';
import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from './Components/SideBar';
import {BrowserRouter as Router  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './Components/context';
function App() {
  
 
  return (
    <AppProvider>
    <Router>
    <ProSidebarProvider>
   <SideBar/>
   <ToastContainer  position="bottom-right"
            autoClose={2000}
          hideProgressBar
            closeOnClick={true}
            pauseOnHover={false}
            draggable={true}

            progress={undefined}
            theme="colored" />
    </ProSidebarProvider>
    </Router>
    </AppProvider>

  )
}

export default App;
