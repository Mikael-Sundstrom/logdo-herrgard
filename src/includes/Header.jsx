/* Core */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

/* Images */
import logo from './../assets/images/logo.jpg'

/* Component */
const Header = (props) => {
	useEffect(() => {
		M.Sidenav.init(document.getElementById('nav-mobile'), {
			edge: 'right',
			draggable: true,
			inDuration: 200,
			outDuration: 150,
			onOpenStart: null,
			onOpenEnd: null,
			onCloseStart: null,
			onCloseEnd: null,
			preventScrolling: true
		})
	})

	const routes = props.routes
	const nav = routes.map((item, key) =>
		<li key={key} className={item.class}>
			<NavLink className={(navData) => (navData.isActive ? "active waves-effect" : 'waves-effect')} to={item.path}>
				{item.name}
			</NavLink>
		</li>
	)

	return (
		<header>
			<nav className='container'>
				<NavLink to="/"><img className='monogram' src={logo} alt="logo" /></NavLink>
				<h1><NavLink to={'/'}>Lögdö Herrgård</NavLink></h1>
				<button type="button" data-target="nav-mobile" className="menu-button sidenav-trigger">
					<svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24" fill="#aaa"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
				</button>
				<ul className="menu">
					{nav}
				</ul>
			</nav>

			<ul id="nav-mobile" className="sidenav">
				{nav}
			</ul>
		</header>
	)
}

export default Header