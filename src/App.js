import './App.css';
import React from 'react';
import HomePage  from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { connect} from 'react-redux';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { Route, Switch } from 'react-router-dom';
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.action';



class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      else {
        setCurrentUser({userAuth});
      }
    });
  }


  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch> 
    </div>
  )
  };
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
