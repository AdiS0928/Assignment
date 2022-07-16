const News = () =>
{
    return(
<div className="w-[1230px] h-[400px] absolute bg-white">
        <p className="newshead ml-[30vh] mt-[17vh]">Join Our News Letters</p>
    	<p className="newsdesc ml-[45vh] mt-[35vh]">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </p>
        <div className="w-[816px] h-[64px] absolute ml-[30vh] mt-[45vh] bg-slate-100 hover:cursor-text">
            <p className="newstext mt-[3.5vh] ml-[5vh]">Insert your mail here</p>
            <button className="ml-[115vh] mt-[1.5vh]"><img src="/newsbut.png" alt="" className="newsbut" /></button>
        </div>
</div>
    )

}

export default News;