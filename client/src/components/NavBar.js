import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu, Segment} from 'semantic-ui-react'
import styled from 'styled-components';
import dragon_icon from '../assets/dragon_icon.jpg';


const NavBar = () => (
  <Transparent>
    <Menu secondary>
    <a href="/"><Logo /></a>
    <Menu.Menu position='right'>
      <Menu.Item>
         <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'15px',}} exact to='/'>
         Home</NavLink>
      </Menu.Item>
      <Menu.Item >
          <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'15px',}} exact to='/menu'>
          Menu</NavLink>
      </Menu.Item>
      <Menu.Item>
          <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'15px',}} exact to='/reservationform'>
          Reservations</NavLink>
      </Menu.Item>
      <Menu.Item>
          <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'15px',}} exact to='/contactform'>
          Contact Us</NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button primary style={{backgroundColor:'#e0d538',
          color:'black',
          fontSize:'15px'}}>
          <NavLink style={{color:'black', fontSize:'15px',}} exact to='/order-online'>
          Order Online</NavLink>
          </Button>
      </Menu.Item>
    </Menu.Menu>
    </Menu>
  </Transparent>
)

const Transparent = styled.div`
  width: 100%;
  padding: 30px 0px !important;
  background: transparent !important;
  margin: 0px;
  padding: 10px !important;
  background-color: rgba(0,0,0, 0.3) !important;
  position: fixed;
  top: 0;
  z-index: 1;
  // position: sticky;
`

const Logo = styled.div`
  background-image: url(${dragon_icon});
  background-size: cover;
  display: flex;
  border: 0.5px grey solid;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  text-align:center;
  background-color: #e0d538;
  position: relative;
  left: 40px;
`

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#white !important',
    backgroundColor: '#333',
    padding: '6px 10px',
    border: '0.5px dotted black',
    borderRadius: '7px',
  }
}

export default NavBar
