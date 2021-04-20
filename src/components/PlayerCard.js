import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ batter_one, batter_one_image }) => {

    return (
        <div className='baseball_card'>
            <img className='batter_image' src={`${batter_one_image}`} alt='batter_image'></img>
            <img className='team_image' src={`${batter_one['teamImage']}`} alt='team_image'></img>
            <h1 className='batter_name'>{batter_one['fullName']}</h1>
        </div>
    )
}

export default PlayerCard;