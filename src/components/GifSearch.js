import {useState} from "react";


const GifSearch = (props) =>{
    const [formData, setFormData] = useState({searchTerm: ''})

    const handleChange = (event)=>{
        setFormData(
            {...formData, [event.target.name]: event.target.value}
        )
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        props.gifSearch(formData.GifSearch)
    }
   return(
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="searchTerm"
            value={formData.searchTerm}
            onChange={handleChange}
        />
        <input type="submit" value="submit"/>
    </form>
   )

}

export default GifSearch;