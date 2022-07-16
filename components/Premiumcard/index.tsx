const card = (props:any) =>
{
return(
    <div className="Premiumcard bg-white">
        <img src={props.image} alt="" className="w-[340px] h-[340px] ml-[4vh]"/>
        <img src="arrow.png" alt="" className="arrow" />
        <button className="cardbtn mt-[3vh]">

            <img src="/arrButton.png" alt="" className="roundcon"/>
            
        </button>
        <p className="cardhead ml-[-5vh]">{props.name}</p>
        <p className="cardtop">Category {props.cat}</p>

    </div>
)
}

export default card;