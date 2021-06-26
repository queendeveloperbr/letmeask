import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { SignOut } from "./components/SignOut";

import { toast } from "react-toastify";

import { AuthContextProvider } from './contexts/AuthContext'

toast.configure({
	position: "bottom-right",
	autoClose: 3000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
});

function App() {
  return (
    <BrowserRouter>
       <AuthContextProvider>
         <SignOut />
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/rooms/new" component={NewRoom} />
         <Route path="/rooms/:id" component={Room} />
         <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
       </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App; 
