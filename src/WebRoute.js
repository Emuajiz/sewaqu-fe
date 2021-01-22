import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home1 from "./pages/Home1";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import ProfileChange from "./pages/ProfileChange";
import Store from "./pages/Store";
import StoreRegister from "./pages/StoreRegister";
import Chats from "./pages/Chats";
import Chat from "./pages/Chat";
import OrderHistory from "./pages/OrderHistory";
import Order from "./pages/Order";
import Rent from "./pages/Rent";
import Category from "./pages/Category";

function WebRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/rent">
                    <Rent />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="/order/history">
                    <OrderHistory />
                </Route>
                <Route path="/chat/:id">
                    <Chat />
                </Route>
                <Route path="/chats">
                    <Chats />
                </Route>
                <Route path="/store/register">
                    <StoreRegister />
                </Route>
                <Route path="/store">
                    <Store />
                </Route>
                <Route path="/profile/change">
                    <ProfileChange />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/detail">
                    <Detail />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home1 />
                </Route>
            </Switch>
        </Router>
    );
}

export default WebRoute;
