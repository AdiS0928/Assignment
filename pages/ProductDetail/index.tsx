import Header from '../../components/Header'
import Productdetailbottom from '../../components/Productdetailbottom';
import Flash from '../../components/Flash';
import Footer from '../../components/Footer';
const ProductDetail = () =>
{

    return(
        <div>
            <Header/>
            <div>
                <Productdetailbottom />
   
                <Flash />

                {/* <div className="left-0 mt-[4000px] ">
                <Footer />
                </div> */}
            </div>
        </div>
    )

}

export default ProductDetail;