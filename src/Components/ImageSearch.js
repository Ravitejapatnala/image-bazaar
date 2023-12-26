import React, {useEffect, useState} from "react";
import axios from "axios";

const ImageSearch=({setImages})=>{

    const[searchTerm, setSearchTerm]= useState("");

    useEffect(()=>{
        fetchImages(null, "random")
    })

    async function fetchImages(e, initialResults){
        if(e){
            e.preventDefault();
        }

        try{
            const response= await axios.get("https://api.unsplash.com/search/photos", {
            headers:{
                "Accept-Version": "v1",
                "Authorization": "Client-ID 4ZbC8l7Q3I5PF2QR32DT8RUiAmouSmXJAav-n6z2Axg"
            },
            params:{
                query: searchTerm || initialResults,
            }
        })
        console.log(response.data.results)
        setImages(response.data.results)
        }

        catch(error){
            console.log(error);
        }
    }
    return(
        <div>
            <form onSubmit={fetchImages}>
                <input type="text" placeholder="Search Images..." onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch;