import React from "react";

const ImageList=({images})=>{
    return(
        <div>
            {
                images.map(value=>(
                    <img src={value.urls.regular} alt={value.alt_description}></img>
                ))
            }
        </div>
    )
}

export default ImageList;