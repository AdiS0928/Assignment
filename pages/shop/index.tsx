import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Homenobtn'
import Shopbottom from '../../components/Shopbottom'

const Shop = () =>
{
return(
    

    <div>
        <Header/>
        <div>
            <Hero text="Home Shopping, Your Choice!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        <div className='mt-[970px]'>
            <Shopbottom />
        </div>

    <div className="left-0">
    <Footer />
    </div>
    </div>
)
}

export default Shop;