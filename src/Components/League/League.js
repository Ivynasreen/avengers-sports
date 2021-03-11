import React from 'react';
import { useHistory } from 'react-router';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const League = (props) => {
    const {strLeague , strSport , idLeague} = props.league;
    let history = useHistory();
    const handleClick = idLeague => {
        const url = `leagues/${idLeague}`;
        history.push(url)
    }
    return (
        <div className = "leagues">
            <div className = "league">
                <h4>  {strLeague}</h4> 
                <p> Sports type : {strSport}</p>
                <button onClick= {()=> handleClick(idLeague)} className = "button">Explore<FontAwesomeIcon style ={{paddingLeft: '8px'}} icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>

    );
};

export default League;