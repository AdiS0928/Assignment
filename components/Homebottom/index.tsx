import Seller from "../Seller";
import Blogs from "../Blogs";
import News from "../News";
const Homebutton = () => {
return(
<div className="bg-slate-100 absolute w-[2440px] h-[4200px] top-[3600px] ">
    <div className="w-[180vh] h-[109.8vh] ml-[20vh] mt-[30vh] ">
        <p className="read">Read Full Story</p>
        <div className="storyhead">
        Story about
Our Brand
        </div>
        <div className="storydesc">
        Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
        </div>
        
        <div className="imgholder2">

        </div>
    </div>
<div className="achieve">
    <p className="achievehead">Our Achievement</p>
    <img src="/shape1.png" alt="" className="alogo top-[45vh] left-[26vh]" />
    <img src="/shape2.png" alt="" className="alogo top-[45vh] left-[56vh]" />
    <img src="/shape3.png" alt="" className="alogo top-[45vh] left-[86vh]" />
    <img src="/shape4.png" alt="" className="alogo top-[45vh] left-[116vh]" />
    <img src="/shape5.png" alt="" className="alogo top-[45vh] left-[146vh]" />
    <img src="/shape1.png" alt="" className="alogo top-[45vh] left-[176vh]" />
</div>
    <div className="mt-[75vh] ml-[20vh]">
    <Seller/>
    </div>

    <div className="mt-[190vh] ml-[20vh]">
    <Blogs />
    </div>

    <div className="mt-[100vh] ml-[16vh]">
    <News />
    </div>


</div>

)

}

export default Homebutton;