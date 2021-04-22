import React from 'react';
import './SelectorButton.css';

const SelectorButton = ({ current_batter, current_batter_image, change_batter }) => {

    return (
        <div>
            <button className="selector_button" onClick={change_batter}>
                <img className="button_image" src={current_batter_image} alt="Batter Image" />
                <h3 className="button_name">{current_batter['fullName']}</h3>
            </button>
        </div>
    )
}

export default SelectorButton;