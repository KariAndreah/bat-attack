import React from 'react';
import './PlayerCard.css';
import './StatsBox.css';

const StatsBox = ({ current_batter, current_batter_stats }) => {
    // To find what I need to add 
    // console.log(batter_one_stats)

    // Find total At Bat (AB) 2018 
    let total_at_bat = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_at_bat += current_batter_stats[i]['AB']
    }

    // Find total walks (BB) 2018
    let total_walks = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_walks += current_batter_stats[i]['BB']
    }

    // Find total hits (H) 2018
    let total_hits = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_hits += current_batter_stats[i]['H']
    }

    // Find total Hit by Pitch (HBP) 2018
    let total_hit_by_pitch = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_hit_by_pitch += current_batter_stats[i]['HBP']
    }

    // Find total Home runs (HR) 2018
    let total_home_runs = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_home_runs += current_batter_stats[i]['HR']
    }

    // Find total Strike Outs (K) 2018
    let total_strike_outs = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_strike_outs += current_batter_stats[i]['K']
    }

    // Find total Plate Appearences (PA) 2018 
    let total_plate_appearences = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_plate_appearences += current_batter_stats[i]['PA']
    }

    // Find total Runs batted in (RBI) 2018
    let total_runs_batted_in = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_runs_batted_in += current_batter_stats[i]['RBI']
    }

    // Find total sacrifice flies (SF) in 2018
    let total_sacrifice_flies = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_sacrifice_flies += current_batter_stats[i]['SF']
    }


    // Find total Bases (TB) in 2018 
    let total_bases = 0;
    for (let i = 0; i < current_batter_stats.length; i++) {
        total_bases += current_batter_stats[i]['TB']
    }

    // Find batting average (AVG) in 2018
    // Batting Average = Total Hits / Total At Bats
    let total_avg = (total_hits / total_at_bat).toFixed(3)

    // Find total On-base-percentage (OBP) in 2018
    let total_on_base_percentage = ((total_hits + total_walks + total_hit_by_pitch) / (total_at_bat + total_walks + total_hit_by_pitch + total_sacrifice_flies)).toFixed(3)

    // Find total Slugging (SLG) in 2018
    let total_slugging = ((total_bases) / (total_at_bat)).toFixed(3)

    // Find total On Base Plus Sligging (OPS) in 2018
    let total_ops = (parseFloat(total_on_base_percentage) + parseFloat(total_slugging)).toFixed(3)

    //BB, H, HBP, HR, K, PA, RBI, SF, TB 
    return (
        <div className='stats_box'>
            <h1 className = 'batter_name_stats'>{current_batter['fullName']}</h1>
            <table className='stats_table'>
                <thead>
                    <tr>
                        <th className='stats_header' colSpan="3">2018 Batting Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='stats'>AB: {total_at_bat}</td>
                        <td className='stats'>H: {total_hits}</td>
                        <td className='stats'>HR: {total_home_runs}</td>
                    </tr>
                    <tr>
                        <td className='stats'>RBI: {total_runs_batted_in}</td>
                        <td className='stats'>AVG: {total_avg}</td>
                        <td className='stats'>OBP: {total_on_base_percentage}</td>
                    </tr>
                    <tr>
                        <td className='stats'>SLG: {total_slugging}</td>
                        <td className='stats'>OPS: {total_ops}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StatsBox;