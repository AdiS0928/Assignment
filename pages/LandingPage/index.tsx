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
    <div className='mt-[450vh] ml-[-15vh] absolute'>

    <Flash />
    </div>
    

    <Homebuttom />
<div className='mt-[1250vh] absolute'>
    <Footer />
    </div>
    </div>
)
}

export default Landingpage;