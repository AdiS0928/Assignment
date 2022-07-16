const Footer = () =>
{
    return(
        <div className="w-[1440px] h-[476px] bg-white absolute">
            <p className="foothead ml-[70vh] mt-[10vh]">Dealerz.</p>
            <div className="w-[200px] h-[40px] absolute flex ml-[160vh] mt-[14vh]">
               <button> <img src="/yt.png" alt="" className=""/></button>
               <button> <img src="/fb.png" alt="" className="ml-[2vh] "/></button>
               <button> <img src="/tw.png" alt="" className="ml-[2vh]"/></button>
               <button> <img src="/ig.png" alt="" className="ml-[2vh]"/></button>
            </div>
            <p className="terms ml-[70vh] mt-[32vh]">Terms and Condition</p>
            <p className="policy ml-[70vh] mt-[25vh]">Privacy Policy</p>
            <p className="studio ml-[70vh] mt-[60vh]">@2020 TanahAir Studio. All rights reserved.</p>
            <div className="w-[360px] h-[360px] absolute bg-[#E2E2EA] mt-[10vh] ml-[8vh]">

            </div>
        </div>
    )
}

export default Footer;