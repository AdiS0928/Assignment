import Post from "../Post";

const Blogs = () =>
{
    return(
        <div className="blog  flex ">
            <div className="mb-[20px]">
                <Post/>
            </div>
            <div className="mt-[700px] ml-[105vh]">
                <Post/>
            </div>
            <div className="mb-[70px] ml-[-10vh] ">
                <Post/>
            </div>
            <div className="mt-[700px] ml-[-623px]">
                <Post/>
            </div>
            <p className="see mt-[-13vh] ml-[150vh]">See more</p>
            <p className="bloghead mt-[-25vh]">Get Better Insights from Our Articles</p>
            
        </div>
    )
}

export default Blogs;