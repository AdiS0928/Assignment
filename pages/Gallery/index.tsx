
import Premium from '../../components/Premium'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Homenobtn'
import Seller from '../../components/Seller'
import News from '../../components/News'

const Gallery = () =>
{
return(
    

    <div>
        <Header/>
        <div>
            <Hero text="Our Gallery, 
Your Dreams!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    <Premium text="Our Gallery"/>

    <div className=' mt-[-43vh] ml-[20vh] bg-slate-100'>
    <Seller/>
    </div>
    
    <div className='w-[2440px] h-[600px] bg-slate-100 mt-[452vh]'>
        
    </div>
    <div className='ml-[15vh] mt-[-10vh]'>
    <News></News>
    </div>
    <div className='w-[2440px] h-[600px] bg-slate-100 mt-20vh]'>
        
    </div>
 
        
    <div className="left-0">
    <Footer />
    </div>
    </div>
)
}

export default Gallery;