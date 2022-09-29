import React, { useEffect, useState } from 'react';
import { addToDb } from '../FakeData/fakedb';
import './Cart.css'
import Swal from 'sweetalert2'

const Cart = ({ exeTime }) => {
    let totalTime = 0;
    for (const time of exeTime) {
        totalTime = totalTime + time
    }
    const [rest, setRest]=useState(40)
    const handleBreak = (e)=>{
        setRest(e)
    }
  
    const handle = ()=>{
        Swal.fire(
            'Congratulations!',
            'You Activity Completed',
            'success'
          )
    }
   addToDb(rest)
    //console.log(rest)
    return (
        <div className='cart-container'>
            <div className='own-profile'>
                <img src="my-bg (1).png" alt="" />
                <div className='name-prop'>
                    <h3>MD BIPUL HOSSAIN</h3>
                    <p>jessore, Bangladesh</p>
                </div>
            </div>
            <div className='parsonal-info'>
                <div><h2>55kg</h2><p>Weight</p></div>
                <div><h2>5.6</h2><p>Height</p></div>
                <div><h2>25years</h2><p>Age</p></div>
            </div>
            <div>
                <h2>Add A Break</h2>
                <div className='break'>
                    
                    <h3 onClick={()=>handleBreak(55)}>55m</h3>
                    <h3 onClick={()=>handleBreak(40)}>40m</h3>
                    <h3 onClick={()=>handleBreak(25)}>25m</h3>
                    <h3 onClick={()=>handleBreak(20)}>20m</h3>
                   
                </div>
            </div>
            <div className='exercise-container'>
                <h2>Exercise Details</h2>
                <div className='exercise-details'><h3>Exercise Time</h3><span className='exercise-field'>{totalTime} Minutes</span></div>
                <div className='exercise-details'><h3>Break Time</h3><span className='exercise-field'>{rest} Minutes</span></div>
                <button onClick={()=>handle()} >Activity Completed</button>
                
            </div>

        </div>
    );
};

export default Cart;