import Shopcard from "../Shopcard";
import Sidebar from "../Sidebar";
import News from "../News";
const Shopbottom = () =>
{
return(
    <div className="h-[2400px] w-[2440px] bg-slate-100">
            
            <Sidebar />
            <div className="ml-[70vh]">
                <Shopcard />
            </div>
            <div className="ml-[137vh]">
                <Shopcard />
            </div>
            <div className="ml-[70vh] mt-[-60vh]">
                <Shopcard />
            </div>

            <div className="ml-[137vh] mt-[-60vh]">
                <Shopcard />
            </div>

            <div className="ml-[70vh] mt-[-120vh]">
                <Shopcard />
            </div>

            <div className="ml-[137vh] mt-[-120vh]">
                <Shopcard />
            </div>

            <div className="ml-[70vh] mt-[-180vh]">
                <Shopcard />
            </div>

            <div className="ml-[137vh] mt-[-180vh]">
                <Shopcard />
            </div>

            <button className="shopbutcard mt-[250vh] ml-[130vh]">
                <p className="shopcardbuttext ml-[3.5vh] text-white">
                    See More
                </p>
            </button>
            <div className="mt-[270vh] ml-[15vh]">
                <News />
            </div>
            
            

    </div>
)
}

export default Shopbottom;