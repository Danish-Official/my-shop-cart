import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 5",
      quantity: 0,
    },
  ];
  let [productList, setproductList] = useState(products);
  const [TotalAmount, setTotalAmount] = useState(0);

  let incrQuantity = (indx) => {
    let NewproductList = [...productList];
    NewproductList[indx].quantity++;
    setproductList(NewproductList);
    let NewTotalAmount = TotalAmount;
    NewTotalAmount += NewproductList[indx].price;
    setTotalAmount(NewTotalAmount);
  };

  let decrQuantity = (indx) => {
    let NewproductList = [...productList];
    let NewTotalAmount = TotalAmount;
    if (NewproductList[indx].quantity > 0) {
      NewproductList[indx].quantity--;
      NewTotalAmount -= NewproductList[indx].price;
    }
    setproductList(NewproductList);
    setTotalAmount(NewTotalAmount);
  };

  let Reset = ()=>{
    let NewproductList = [...productList];
    NewproductList.map((element)=>{
      return element.quantity=0;
    })
    setproductList(NewproductList);
    setTotalAmount(0);
  }
  let removeItem = (index)=>{
    let NewproductList = [...productList];
    let NewTotalAmount = TotalAmount;
    NewTotalAmount -= (NewproductList[index].price*NewproductList[index].quantity);
    NewproductList.splice(index,1);
    setTotalAmount(NewTotalAmount);
    setproductList(NewproductList);

  }
   let addItem = (name, price) => {
    let NewproductList = [...productList];
    NewproductList.push({
      name,
      price,
      quantity: 0
    });
    setproductList(NewproductList);

   }
  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <main className="container mt-5">
        <ProductList
          ProductList={productList}
          incrQuantity={incrQuantity}
          decrQuantity={decrQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer TotalAmount= {TotalAmount} Reset={Reset} />
    </>
  );
}

export default App;
