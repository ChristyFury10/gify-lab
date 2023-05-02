import Gif from "./Gif"
import GifTitle from "./GifTitle"


const GifCard = ({gif})=>{
    
    const loaded=()=>{ 
    return(
        <div>
            {gif.data.title}
           
            <Gif/>
            <GifTitle/>
        </div>
    )}

    const loading=()=>{
        return <h2>Search for a Gif</h2>
    }

    return gif ? loaded() : loading();

};

export default GifCard;