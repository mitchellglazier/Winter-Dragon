import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import ReservationForm from  './components/ReservationForm';
import Menus from './components/Menus';
import EditMenu from './components/EditMenu';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer'
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute'
import Admin from './components/Admin';
import TaxnFees from './components/TaxnFees';
import Users from './components/Users';
import User from './components/User';
import ConfirmationRes from './components/ConfirmationRes'
import Cart from './components/Cart';
import TaxnFeeForm from './components/TaxnFeeForm'; 
import OrderOnline from './components/OrderOnline'
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import ConfirmationContact from './components/ConfirmationContact';

const App = () => (
  <Fragment>
     <NavBar />
     <FetchUser>
    <Switch>
      <Route exact path='/' component={Home} />      
      <Route exact path='/taxnfees' component={TaxnFees} />
      <Route exact path='/taxnfeeform' component={TaxnFeeForm} />
      <AdminRoute exact path='/edit-menu/:id' component={EditMenu} />
      <AdminRoute exact path='/create-new-menu' component={Menus} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/order-online' component={OrderOnline} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/reservations' component={Reservations} />
      <Route exact path='/reservationform' component={ReservationForm} />
      <Route exact path='/contactform' component={ContactForm} />
      <Route exact path='/payment' component={Payment} />
      <Route exact path='/paymentsuccess' component={PaymentSuccess} />
      <Route exact path='/taxnfees' component={TaxnFees} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <AdminRoute exact path="/users" component={Users} />
      <AdminRoute exact path="/users/:id" component={User} />
      <Route exact path="/confirmation" component={ConfirmationRes} />
      <Route exact path="/confirmation-contact" component={ConfirmationContact} />


      
      
      <ProtectedRoute exact path="/admin" component={Admin} />
      <Route component={NoMatch} />

    </Switch>
    </FetchUser>
    <Footer />
  </Fragment>
);


export default App;
