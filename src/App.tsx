import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import ServerBasedProductSection from './components/serverBasedProductSection/ServerBasedProductSection'
import UpdatesPanel from './components/updatesPanel/UpdatesPanel'

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<UpdatesPanel />
			<ProductsSection />
			<ServerBasedProductSection />
			<Footer />
		</>
	)
}

export default App
