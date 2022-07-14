const Header = () => {
    return(
    <div className="navBar">
    <div className="w-[1440px] h-[93px] left-0 top-0 absolute bg-[#ffffff]">
    <div className="w-[1440px] h-[93px] left-0 top-0 absolute bg-[#ffffff]">
        <div className="Logo">
        <h1 >Dealerz.</h1>
        </div>
        <div className="w-[118px] h-[24px] left-[1008px] top-[37px]">
            <div className="phone">
            <img src="/Vector.png" alt="Phone" className="vector"/>
            </div>
            <p className="CallCenterText">Call Center</p>
            
        </div>

        <div className="w-[178px] h-[24px] left-[1158px] top-[37px]">
            <div className="truck">
                <img src="/ship.png" alt="" className="ship"/>
            </div>
        <p className="shipText"> Shipping & Returns</p>

        </div>
    </div>
    </div>
<div className="absolute w-[1440px] h-[112px] left-0 top-[93px] bg-slate-100">
        <div className="w-[256px] h-[19px] left-[94p] top-[140px]">
        <p className="shop">Shop</p>
        <p className="promo">Promo</p>
        <p className="about">About</p>
        <p className="blog">Blog</p>
    </div>

    <div className="w-[248px] h-[44px] left-[1088px] top-[121px] absolute">
        <div className="absolute w-[24px] h-[24px] left-[-1085px] top-[-210px]">
        <div className="badgecon">
            <img src="/Container.png" alt="" />
        </div>
            <p className="badgeText">
                3
            </p>
        
        </div>
        <div className="absolute w-[32px] h-[32px] left-[72px] top-[-80px]">
            <img src="/Vectorcart.png" alt="" className="cart"/>
        </div>
        <div className="absolute w-[32px] h-[32px] left-[0px] top-[-80px]">
            <img src="/Vectorheart.png" alt="" className="heart"/>
        </div>
        <div className="absolute w-[32px] h-[32px] left-[216px] top-[-80px]">
            <img src="/Vectorbell.png" alt="" className="not"/>
        </div>
        <div className="absolute w-[32px] h-[32px] left-[144px] top-[-80px]">
            <div className="group">
            <img src="/profiletop.png" alt="" className="usertop"/>
            <img src="/profile.png" alt="" className="user" />
            </div>
        </div>
    </div>
    <div className="consearch">

            <p className="search">Search What You Need</p>
            <div className="searchlogo">
                <img src="/Vectorsearchlogo.png" alt="" />

        </div>
    </div>
        </div>

    
    </div>

    )

}

export default Header;