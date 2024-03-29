import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './includes/_ScrollToTop'

// Pages
import Home from './pages/Home'
import History from './pages/History'
import Gallery from './pages/Gallery'
import Activities from './pages/Activities'
import BaB from './pages/BaB'
import Hostel from './pages/Hostel'
import Cafe from './pages/Cafe'
import Error404 from './pages/Error404'
import Pottery from './pages/Pottery'

// Components
import Header from './includes/Header'
import Footer from './includes/Footer'
import Premises from './pages/Premises'

// Routes
// https://materializecss.com/helpers.html#hiding
const routes = [
	{
		name: "Hem",
		path: "logdo-herrgard",
		component: <Home />,
		"class": "hide"
	}, {
		name: "Bed & Brekfast",
		path: "BaB",
		component: <BaB />,
		"class": "show"
	}, {
		name: "Kafé",
		path: "kafe",
		component: <Cafe />,
		"class": "show"
	}, {
		name: "Vandrarhem",
		path: "vandrarhem",
		component: <Hostel />,
		"class": "show"
	}, {
		name: "Lokaler",
		path: "lokal",
		component: <Premises />,
		"class": "show"
	}, {
		name: "Keramik",
		path: "keramik",
		component: <Pottery />,
		"class": "hide"
	}, {
		name: "Galleri",
		path: "galleri",
		component: <Gallery />,
		"class": "hide"
	}, {
		name: "Aktiviter i området",
		path: "aktiviteter",
		component: <Activities />,
		"class": "hide-on-extra-large-only"
	}, {
		name: "Historia",
		path: "historia",
		component: <History />,
		"class": "show"
	}
]

// Component
const App = () => {
	const location = useLocation()

	return (
		<>
			<Header routes={routes} />

			<main>
				<ScrollToTop />
				<AnimatePresence exitBeforeEnter>
					<Routes key={location.pathname} location={location}>
						<Route index element={<Home />} />
						{routes.map(
							({ path, component }, index) =>
								<Route key={index} path={path} element={component} />
						)}
						<Route path="*" element={<Error404 />} />
					</Routes>
				</AnimatePresence>
			</main>

			<Footer />
		</>
	)
}

export default App
