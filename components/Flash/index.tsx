import Card from "../Flashcard";
const Flash = () =>
{
    return(
    <div className="Flash">

        <p className="flashHead ml-[80vh] mt-[20vh]">Top Items</p>
        <p className="flashdesc ml-[70vh] mt-[35vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
<div className="ml-[250vh] mt-[50vh]">
        <Card />
        </div>

<div className="ml-[185vh] mt-[50vh]">
        <Card />
        </div>
<div className="ml-[120vh] mt-[50vh]">
        <Card />
        </div>
<div className="ml-[55vh] mt-[50vh]">
        <Card />
        </div>
        <div className="ml-[-10vh] mt-[50vh]">
        <Card />
        </div>

        <div className="mt-[130vh] flex flex-wrap flex-row ml-[-40vh]">
            <img className="ml-[145vh] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse2.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
        </div>
    </div>
    )

}

export default Flash;