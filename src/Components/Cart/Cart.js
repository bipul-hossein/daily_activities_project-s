import React, { useEffect, useState } from 'react';
import { addToDb } from '../FakeData/fakedb';
import './Cart.css'

const Cart = ({ exeTime }) => {
    let totalTime = 0;
    for (const time of exeTime) {
        totalTime = totalTime + time
    }
    const [rest, setRest]=useState(0)
    const handleBreak = (e)=>{
        setRest(e)
    }


    const addToDb = id =>{
        let shoppingCart = {};
    
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            shoppingCart = JSON.parse(storedCart,id);
            console.log(shoppingCart)
        }
    
        // // add quantity
        // const quantity = shoppingCart[id];
        // if(quantity){
        //     const newQuantity = quantity + 1;
        //     shoppingCart[id] = newQuantity;
        // }
        // else{
        //     shoppingCart[id] = 1;
        // }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
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
                    <h3 onClick={()=>handleBreak(20)}>20</h3>
                    <h3 onClick={()=>handleBreak(55)}>55</h3>
                    <h3 onClick={()=>handleBreak(25)}>25</h3>
                    <h3 onClick={()=>handleBreak(40)}>40</h3>
                </div>
            </div>
            <div className='exercise-container'>
                <h2>Exercise Details</h2>
                <div className='exercise-details'><h3>Exercise Time</h3><span className='exercise-field'>{totalTime}</span></div>
                <div className='exercise-details'><h3>Break Time</h3><span className='exercise-field'>{rest}</span></div>
                <button>Activity Completed</button>

            </div>

        </div>
    );
};

export default Cart;