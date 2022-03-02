import React from "react";
import Tilty from "react-tilty";
import 'tachyons';
import brains from "./brains.png";


const Navigation = ({onRouteChange, route}) => {
    if(route==="home"){ 
        return (
                <nav style={{display: 'flex', margin: '30px', justifyContent: "center"}}>
        
                    <div  style={{alignSelf: 'center'}}>
                    <Tilty  className="br2 shadow-2" 
                        style={{height: '90px', width: '90px',
                        background: 'rgb(229, 142, 236)'}}>
                            
                        <div >
                            <img className="pt1" alt="" src={brains} style={{height: '80px', width:'80px'}}/>
                        </div>
                        
                    </Tilty>
                    </div>
                    <div  style={{marginLeft: "auto"}}>
                        <input 
                        onClick={() => onRouteChange('signin')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                        type="submit" 
                        value="Sign-out"
                        style={{marginTop: "10px", marginBottom: "10px"}}
                    />
                    </div>
                </nav>
            )
        }
    else {
        return(
            <nav style={{display: 'flex', margin: '30px', justifyContent: "center"}}>
        
            <div  style={{alignSelf: 'center'}}>
            <Tilty  className="br2 shadow-2" 
                style={{height: '90px', width: '90px',
                background: 'linear-gradient(89deg, #FF5EDF 0%, #2fcac0 100%)'}}>
                    
                <div >
                    <img className="pt1" alt="" src={brains} style={{height: '80px', width:'80px'}}/>
                </div>
                
            </Tilty>
            </div>
            </nav>
        )
    }
}

export default Navigation; 