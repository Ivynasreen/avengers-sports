import React, { useEffect, useState } from 'react';
import './Home.css';
import League from './League/League';


const Home = () => {
    const [leagues , setLeagues] = useState([]);

    useEffect(()=> {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res=> res.json())
        .then(data=> setLeagues(data.leagues.slice(0 , 15)))

    },[])
    return (
        <div className = "header">
            <img src="https://www.etftrends.com/wp-content/uploads/2019/09/ETF-Provider-SoFi-Purchases-Naming-Rights-for-LA-Football-Stadium.jpg" alt=""/>
            <h3>Avengers Sports</h3>
            <div>
                {
                    leagues.map(league=> <League league = {league}></League>)
                }    
            </div>
        </div> 
    
    );
};

export default Home;