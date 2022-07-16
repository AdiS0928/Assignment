import Cartcard from "../CartCard";
import Checkout from "../Checkout/Checkout";
import Flash from "../Flash";
import News from "../News";
import Footer from "../Footer";
const Cartbottom = () =>
{
    return(
        <div className="h-[1400px] w-[2440] mt-[1000px] bg-slate-100 ">
            <div className="w-[1236px] h-[1151px]  ml-[15vh] mt-[20vh] absolute">
            <p className="sc">1. Shopping Cart</p>
            <p className="check ml-[30vh]">2. Checkout</p>
            <p className="check  ml-[60vh]">3. Order Succesed</p>
            <p className="cartheadd  mt-[15vh]">My Cart</p>
            <div className="mt-[30vh]"> 
            <Cartcard />
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard />
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard />
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard />
            </div>

            <div className="mt-[-152vh] ml-[110vh]">
                <Checkout />
            </div>

            <div className="absolute mt-[170vh] ml-[-25vh]">
            <Flash />
            </div>

            <div className="absolute w-[2440px] h-[680px] bg-slate-100 mt-[320vh] ml-[-20vh]">
                <div className="absolute mt-[20vh] ml-[20vh]">
                <News />
                </div>
            </div>

            <div className="absolute   mt-[440vh]">
                <Footer />
            </div>
            </div>
        </div>
    )
}

export default Cartbottom;