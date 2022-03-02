import React from "react";


const Rank = ({entries, name}) => {
    return(
        <div>
            <div className="white f3" style={{marginTop: "70px"}}>{`${name}, Your no. of entries are....`}</div>
            <div className="white f1">{entries}</div>
        </div>
    );
}

export default Rank;