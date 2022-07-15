const Home = (props:any) =>
{
    return(
    <div className="hero">
        <p className="headtext">{props.text}</p>
        <p className="desc">{props.desc}</p>

        <div className="mask">
            <img src="/Ellipse 157.png" alt="" className="el1" />
            <img src="/Ellipse 159.png" alt="" className="el2" />
            <img src="/Ellipse 158.png" alt="" className="el3" />
            <img src="/Ellipse 156.png" alt="" className="el4" />
            <img src="/Ellipse 155.png" alt="" className="el5" />
            <img src="/Ellipse 155.png" alt="" className="el6" />
            <img src="/Ellipse 153.png" alt="" className="el7" />
        </div>
    </div>)
}

export default Home;