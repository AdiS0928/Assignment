import Homepage from '../../components/Home'
import Premium from '../../components/Premium'
import Flash from '../../components/Flash'
import Homebuttom from '../../components/Homebottom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Homenobtn'
import Cartbottom from '../../components/Cartbottom'



const Cart= () =>
{
return(
    

    <div>
        <Header/>
        <div>
            <Hero text="Our Gallery, 
Your Dreams!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>

        <Cartbottom />

    {/* <div className="left-0">
    <Footer />
    </div> */}
    </div>
)
}

export default Cart;