import React from 'react';

const ImageLinkForm = ({onInputChange, onbuttonSubmit}) => {
    return(
        <div style={{displa: 'flex'}}>
            <p className='f3'>{`Type or copy a link of an Image to detect a Face`}</p>
            <div className='center'>
                <div className='form center' >
                    <div 
                    className='pa4 center br4 shadow-5 center' 
                    style={{width: '70%', display: 'flex'}}
                    >
                        <input 
                        className='f4 pa2 center' 
                        style={{width: '70%'}} 
                        onChange={onInputChange} 
                        />
                        
                        <button 
                        className='grow f4 link ph3 dib white bg-ligh ' 
                        style={{color: 'black', width: '30%', fontSize: '2vw'}}
                        onClick={(e)=>{onbuttonSubmit(e)}}
                        >
                            Detect
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;