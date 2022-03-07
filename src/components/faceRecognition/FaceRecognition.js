import React from "react";
import "./faceBorder.css";
import "tachyons";

const FaceRecognition = ({imageUrl, box}) => {
 
    const faces = box.map((face, i) => {
        return <div 
        key={i} 
        className='bounding-box' 
        style={{top: face.topRow, left: face.leftCol, bottom: face.bottomRow, right:face.rightCol}}
        >
            <h1><span className="img_name">{face.name.toUpperCase()}</span></h1>
        </div>
    })
    
    return (
        
    <div className='imageContent'>
    <div className='imageContent2'>
        
            <img id='inputimage' className="" 
             alt='' src={imageUrl} width='500px' height='auto' 
             />
            {faces}
    </div>
    </div>
    )
}

export default FaceRecognition;