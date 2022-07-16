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
                

        
  
                <div className='absolute w-[2440px] h-[40vh] bg-slate-100 mt-[-40vh]'>

                </div>

                <div className="left-0 mt-[3800px] ">
                <Footer />
                </div>
            </div>
        </div>
    )

}

export default ProductDetail;