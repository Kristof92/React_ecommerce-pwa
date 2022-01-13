import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObj => {
      if (userAuthObj) {
        const userRef = await createUserProfileDocument(userAuthObj)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuthObj)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route
            path='/signin'
            element={ currentUser ? <Navigate to='/' /> : <SignInAndSignUp />}
          />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
