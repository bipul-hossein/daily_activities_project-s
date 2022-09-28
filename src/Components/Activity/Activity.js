import React from 'react';
import './Activity.css'

const Activity = (props) => {
   const { handleAddToCart}=props
    const {img, name, activities_details, age, time_required} = props.singleActivity
    return (
        <div className='activity'>
           <img src={img} alt="" />
           <p>{name}</p>
           <p>{activities_details}</p>
           <p>For Age : {age}</p>
           <p>Time required : {time_required}</p>
           <button onClick={()=>handleAddToCart(time_required)}>Add To List</button>
        
        </div>
    );
};

export default Activity;