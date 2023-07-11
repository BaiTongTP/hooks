import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);


  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice}</h3>
      </div>
      <div>       
        <img src="teaset.png" alt='teaset' width="10%" /><br />
        ชุดน้ำชา ราคา {product1}
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product1);
        }}>เพิ่มสินค้าเข้าตะกร้า</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product1);
        }}>นำสินค้าออกจากตะกร้า</buttom>
      <div>
        <img src="chessset.png" alt='chtssset' width="10%" /><br />
        ชุดหมากรุก ราคา {product3}
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product3);
        }}>เพิ่มสินค้าเข้าตะกร้า</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product3);
        }}>นำสินค้าออกจากตะกร้า</buttom>
      <div>
        <img src="barbecuegrill.png" alt='barbecuegrill' width="10%" /><br />
        เตาย่างบาร์บีคิว ราคา {product2}
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product2);
        }}>เพิ่มสินค้าเข้าตะกร้า</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product2);
        }}>นำสินค้าออกจากตะกร้า</buttom>
    </div>
  );
}

export default App;
