import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import ServerBasedProductSection from './components/serverBasedProductSection/ServerBasedProductSection'
import UpdatesPanel from './components/UpdatesPanelSection/UpdatesPanelSection'

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
