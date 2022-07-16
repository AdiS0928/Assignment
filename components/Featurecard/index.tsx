const Featurecard = (props:any) =>
{
    return(
<div className="w-[233px] h-[80px]">
    <div className="imgholder6">
        <img src={props.image} className="w-[70px] h-[70px] ml-[0.6vh] mt-[0.6vh]" alt="" />
    </div>
    <p className="featurehead ml-[13vh] mt-[2vh]">{props.name}</p>
    <p className="featureprice ml-[18vh] mt-[6vh]">${props.price}</p>
</div>
    )
}

export default Featurecard;