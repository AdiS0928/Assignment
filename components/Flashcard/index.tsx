const card = (props:any) =>

{
    return(
    <div className="item">
        <img src={props.image} className="w-[200px] h-[200px] mt-[10vh] ml-[15vh]" alt="" />
        <p className="seller ml-[-3vh]">{props.name}</p>
        <p className="flashprod">Apple Cherry</p>
        <div className="line"></div>
        <p className="price1 ml-[3vh]">$454</p>
        <p className="price2 ml-[-3vh]">${props.price}</p>
        <div className="tag">
        <div className="back"> </div>
            <p className="label">SALE</p>
            
        </div>

        
    </div>
    )
}

export default card;