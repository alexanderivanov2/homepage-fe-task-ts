import Footer from './Footer/Footer'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import ProductsSection from './ProductsSection/ProductsSection'
import ServerBasedProductSection from './ServerBasedProductSection/ServerBasedProductSection'
import UpdatesPanel from './UpdatesPanelSection/UpdatesPanelSection'

function LandingPage() {
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

export default LandingPage