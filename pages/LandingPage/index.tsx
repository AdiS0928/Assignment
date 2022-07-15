import Homepage from '../../components/Home'
import Premium from '../../components/Premium'
import Flash from '../../components/Flash'
import Homebuttom from '../../components/Homebottom'
import Footer from '../../components/Footer'



const Landingpage = () =>


{
return(
    <div>
    <Homepage/>
    <Premium text="Our Premium Collection"/>
    <Flash />
    <Homebuttom />
    <div className="mt-[8100px] left-0">
    <Footer />
    </div>
    </div>
)
}

export default Landingpage;