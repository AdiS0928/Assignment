const Checkout = () =>
{
return(
    <div className="absolute w-[507px] h-[652px]">
                <div className="w-[504px] h-[240px] bg-white absolute rounded-[8px]">
                <p className="cartcardhead ml-[8vh] mt-[5vh]">Have a Coupon?</p>
                <div className="cartinput ml-[8vh] mt-[15vh] hover:cursor-text">
                    <p className="cartinputtxt ml-[3vh] mt-[2.5vh]">Input your email here</p>
                </div>
                <img src="/Apply.png" alt="" className="w-[80px] ml-[8vh] mt-[28vh]"/>

                <p className="cartcardhead mt-[15vh]">Cart Totals</p>
                <p className="cartcardsmall mt-[25vh] ">Subtotal</p>
                <p className="cctext mt-[25vh] ml-[30vh]">$150 </p>
                <p className="cartcardsmall mt-[35vh] ">Shipping</p>
                <p className="cctext mt-[35vh] ml-[30vh]">FreeShipping</p>
                <p className="cctext mt-[45vh] ml-[30vh]">Shipping to Sydney</p>
                <p className="cctextorng mt-[45vh] ml-[65vh] hover:cursor-pointer">Change</p>
                <p className="cartcardsmall mt-[55vh] ">Total</p>
                <p className="ccprice mt-[55vh] ml-[30vh]">$350</p>
                <button className="ccbut mt-[65vh]">
                    <p className="ccbuttxt ml-[30vh]">Checkout</p>
                </button>
                </div>
    </div>
)
}
export default Checkout;