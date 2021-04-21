import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ current_batter, current_batter_image }) => {

    return (
        <div className='baseball_card'>
            <img className='batter_image' src={`${current_batter_image}`} alt='batter_image'></img>
            <img className='team_image' src={`${current_batter['teamImage']}`} alt='team_image'></img>
            <h1 className='batter_name'>{current_batter['fullName']}</h1>
        </div>
    )
}

export default PlayerCard;