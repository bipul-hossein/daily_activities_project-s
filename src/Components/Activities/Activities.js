import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = (props) => {
const {handleCart} = props; 
const [activities, setActivities] = useState([]);
useEffect(()=>{
    fetch('activity.json')
    .then(res=>res.json())
    .then(data=>setActivities(data))
},[])



    return (
        <div className='home-container'>
            <h1>Daily Exercise Activities</h1>
            <p className='select-par'>Select today’s exercise</p>
            <div className='activity-container'>
            {
                activities.map(activity => <Activity key={activity.id} singleActivity={activity} handleAddToCart={handleCart}></Activity>)           
            }
            </div>                
        </div>
    );
};

export default Activities;