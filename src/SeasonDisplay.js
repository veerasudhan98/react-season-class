import './SeasonDisplay.css'
import React from 'react'
// ORGANIZING DATA FOR EASY USE
const seasonConfig = {
    summer:{
        text:'LET HIT THE BEACH',
        icon:'massive sun icon'
    },
    winter:{
        text:'WOW LETS PLAY WITH SNOW',
        icon:'massive snowflake icon'
    }
}
// HELPER FUNCTION TO GET SEASON
const getSeason = (lat, month) => {
    if(month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}
// COMPONENT
const SeasonDisplay = (props) =>{
    var season = getSeason(props.lat, new Date().getMonth())
    const {text, icon} = seasonConfig[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`left-icon ${icon}`}></i>
        <h1>{text}</h1>
        <i className={`right-icon ${icon}`}></i>
    </div>
    )
}

export default SeasonDisplay