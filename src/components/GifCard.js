import Gif from "./Gif"
import GifTitle from "./GifTitle"


const GifCard = ({gif})=>{
    
    const loaded=()=>{ 
    return(
        <div>
            {/* {gif.title} */}
            
            display searched gif
            <Gif/>
            <GifTitle/>
            
        </div>
    )}
// console.log(gif)

    const loading=()=>{
        return <h2>Search for a Gif</h2>
    }

    return gif ? loaded() : loading();

};

export default GifCard;