import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.utils"
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCarttHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selector"

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.component.scss'

const Header = ({ currentUser, hidden }) => {

  return (
    <div className="header">
      <Link className='logo-container' to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div
              className='option'
              onClick={() => {
                return auth.signOut()
              }}
            >
              SIGN OUT
            </div>
            :
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCarttHidden
  })

export default connect(mapStateToProps)(Header)
