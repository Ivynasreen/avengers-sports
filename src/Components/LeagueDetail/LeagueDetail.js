import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import flag from '../../Icon/flag (1) 1.png';
import founded from '../../Icon/found 1.png';
import sports from '../../Icon/football (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faYoutube } from "@fortawesome/free-brands-svg-icons";



const LeagueDetail = () => {
    const {idLeague} = useParams ();
    const [league , setLeague] = useState({});

    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague])
    return (
        <div className = "header">
            <img src= {league.strBanner} alt = ""/>
            <img style = {{height:'150px' , width: '400px'}}className = "logo" src = {league.strLogo} alt = ""/>
            <div className = "league-info">
                <div className="container">
                    <div className = "league-details ">
                        <h4> {league.strLeague}</h4>
                        <p><img style =  {{width: '30px', height: '30px',margin: 'auto'  }} src = {founded} alt = ""/> <span style = {{marginLeft: '5px'}}>Founded : {league.intFormedYear}</span></p>
                        <p><img style =  {{width: '30px', height: '30px', margin: 'auto' }} src = {flag} alt = ""/> <span style = {{marginLeft: '5px'}}>Country : {league.strCountry}</span></p>
                        <p><img style =  {{width: '30px', height: '30px' ,margin: 'auto'  }} src = {sports} alt = ""/> <span style = {{marginLeft: '5px'}}>Sport type : {league.strSport}</span></p>
                        <p><img style =  {{width: '30px', height: '30px', margin: 'auto' }} src = {gender} alt = ""/> <span style = {{marginLeft: '5px'}}>Gender : {league.strGender}</span></p>
                    </div>
                    <div className = "league-image">
                        {league.strGender && (
                        league.strGender === 'Male' ? <img src= {maleImage} alt = "" /> : <img src = {femaleImage} alt = ""/>
                        )}
                    </div>
                </div>
                    <p style = {{marginTop : '20px'}}>{league.strDescriptionEN}</p> 
                <div className ="social-icons">
                    <a href = {`https://${league.strFacebook}`} target="_blank"><FontAwesomeIcon className = "facebook" icon={faFacebook} /></a>
                    <a href = {`https://${league.strTwitter}`} target="_blank"><FontAwesomeIcon className = "twitter" icon={faTwitter} /></a>
                    <a href = {`https://${league.strYoutube}`} target="_blank"><FontAwesomeIcon className = "youtube" icon={faYoutube} /></a>
                </div>
            </div>
        </div>
        
    );
};

export default LeagueDetail;