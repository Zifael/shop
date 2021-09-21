import { observer } from "mobx-react-lite";
import React,{ useContext, useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userApi";
import Preloader from "./components/Preloader";


const App = observer(() => {

  const {user} = useContext(Context)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
      check().then(data=>{
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=>{setLoading(false)})
  }, [])

  if(loading){
      return <Preloader />
  }

  return (
      <BrowserRouter>
          <NavBar />
          <AppRouter />
      </BrowserRouter>
  );
})

export default App;
