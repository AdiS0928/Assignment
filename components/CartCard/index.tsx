const Cartcard = () =>
{
return(
    <div className="absoluter w-[626px] h-[200px] ">
        <div className="imgholder12"></div>
        <p className="cartcardhead ml-[35vh]">Tropical Playsuit</p>
        <p className="cartcardsmall ml-[35vh] mt-[8vh]">Size :</p>
        <p className="cartcardsmall ml-[72.5vh] mt-[8vh]">M</p>
        <p className="cartcardsmall ml-[35vh] mt-[14vh]">Quantity :</p>
        <p className="cartcardsmalll ml-[60vh] mt-[14vh]">-  5  +</p>
        <p className="cartcardprice ml-[35vh] mt-[20vh]">$99</p>
        
                    <button className="but1 ml-[72vh] mt-[21vh]">
                <p className="buttext1 ml-[5vh]">Wishlist</p>
                <img src="/heart2.png" alt="" className="ml-[15vh] mt-[-3vh]"/>
            </button>
            <button className="ml-[60vh] mt-[22vh]">
            <img src="/del.png" alt="" />
        </button>

    </div>
)
}

export default Cartcard