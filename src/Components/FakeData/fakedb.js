import { useEffect, useState } from "react";


const addToDb = rest =>{
//   let shoppingCart = {}
//const []=useState([])
// useEffect(()=>{
//   console.log(preTime)
//   const storedCart = localStorage.getItem('rest-time');
// },[preTime])



// const storedCart = localStorage.getItem('rest-time');
// const shoppingCart = JSON.parse(storedCart);
//  if(storedCart){
//        JSON.parse(shoppingCart);
//     }
//     else{
  //  localStorage.setItem('rest-time' ,rest)
   localStorage.setItem('shopping-cart', JSON.stringify(rest));
  //  console.log(shoppingCart)


 

}
export {addToDb}