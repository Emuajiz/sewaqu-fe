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
import Payment from "./pages/Payment";
import PaymentBankMethod from "./pages/PaymentBankMethod";
import PaymentAddress from "./pages/PaymentAddress";
import PaymentConfirm from "./pages/PaymentConfirm";
import OrderCancel from "./pages/OrderCancel";
import RentReputation from "./pages/RentReputation";
import OrderDetail from "./pages/OrderDetail";
import WalletHistory from "./pages/WalletHistory";
import Setting from "./pages/Setting";
import ProductAdd from "./pages/ProductAdd";
import Help from "./pages/Help";
import AboutUs from "./pages/AboutUs";
import Feedback from "./pages/Feedback";
import Notification from "./pages/Notification";
import Wallet from "./pages/Wallet";
import WalletWithdraw from "./pages/WalletWithdraw";
import WalletWithdrawDetail from "./pages/WalletWithdrawDetail";
import OrderSolution from "./pages/OrderSolution";

function WebRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/order/solution">
                    <OrderSolution />
                </Route>
                <Route path="/wallet/withdraw/detail">
                    <WalletWithdrawDetail />
                </Route>
                <Route path="/wallet/withdraw">
                    <WalletWithdraw />
                </Route>
                <Route path="/wallet">
                    <Wallet />
                </Route>
                <Route path="/notification">
                    <Notification />
                </Route>
                <Route path="/feedback">
                    <Feedback />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/product/add">
                    <ProductAdd />
                </Route>
                <Route path="/setting">
                    <Setting />
                </Route>
                <Route path="/wallet/history">
                    <WalletHistory />
                </Route>
                <Route path="/order/detail">
                    <OrderDetail />
                </Route>
                <Route path="/rent/reputation">
                    <RentReputation />
                </Route>
                <Route path="/order/cancel">
                    <OrderCancel />
                </Route>
                <Route path="/payment/confirm">
                    <PaymentConfirm />
                </Route>
                <Route path="/payment/address">
                    <PaymentAddress />
                </Route>
                <Route path="/payment/bank">
                    <PaymentBankMethod />
                </Route>
                <Route path="/payment">
                    <Payment />
                </Route>
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
