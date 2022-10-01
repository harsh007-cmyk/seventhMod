import React,{useState,useEffect} from 'react'
import './cards.css'
const CardData=[];
function Cards(props) {
  console.log('props',props);
 let [cardItem,setcardItem]=useState('');
function handleCart(){
  console.log(props.cartItem)
  let cartNum=Number(props.cartItem);
  props.setFunction(cartNum+1);
}
  useEffect(() => {
    fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
    .then(response => response.json())
    .then(data => setcardItem(data))
  },[])
  for(const item in cardItem){
    CardData.push(cardItem[item])
  } 
  const CardBoxes=CardData.map((item)=>{
    return (
      <div className='cardItem'>
        <img src={item.productImage} alt="" />
        <div className='productName'>{item.productName}</div>
        <div className='oldPrice'>{item.oldPrice}</div>
        <div className='newPrice'>{item.newPrice}</div>
        <button onClick={handleCart} className='addToCart'>ADD TO CART</button>
      </div>
    )
  })
  
  return (
    <div className='cards'>{CardBoxes}</div>
  )
}

export default Cards