import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';

const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Contact Us',
      path: '/contact-us'
    },
    {
      title: 'Blog',
      path: '/blog'
    },

    {
      title: 'Login',
      path: '/login'
    },
  ]

export default function Navigation () {
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className= "site-navigation" role="navigation">
        <span className="menu-title">GEMEGEME</span>
        <div className={ `menu-content-container ${menuActive && 'active'}` }>
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
            <span className="menu-avatar-container">
                <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span className="menu-avatar-name">Me</span>
            </span>
        </div>
        <i 
            className="ion-ios-menu"
            onClick={(ev) => setMenuActive(!menuActive)}
        />
    </nav>
  )
}