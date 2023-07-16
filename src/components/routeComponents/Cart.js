import React, { useEffect, useState } from "react";
import "../../assets/css/Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveProducts,UpdateQuantity } from "../../state/reducers/AddToCartReducers";
import {minusPrice} from "../../state/reducers/TotalPriceReducer";
function Cart() {
  const addedProducts = useSelector((state) => state.CartItems);
  const dispatch = useDispatch();
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalQty,setTotalQty] = useState(0)

  useEffect(()=>{
    let totalPrice = 0
    let totalQty = 0
    addedProducts.map((items)=>{
      totalPrice += items.totalPrice
      totalQty += Number(items.initialQty)
      return false
    })
    setTotalPrice(totalPrice)
    setTotalQty(totalQty)
  },[addedProducts])

  const removeItem = (id) => {
    let filterProduct = addedProducts.filter((items)=>{
      return items.item.id === id
    })
    dispatch(minusPrice(filterProduct[0].item.price-filterProduct[0].item.discount))
    let index = addedProducts.findIndex((items) => {
       if(items.item.id === id){
        return items.item
       }
       return false
    });
    dispatch(RemoveProducts(index));
  };

  const handleQty = (e,id)=>{
    dispatch(UpdateQuantity({id,qty:e.target.value}))
  }

  return (
    <>
      <div className="cart-section container">
        <div className="row w-100 m-0">
          <div className="col-12 col-lg-8 col-md-8 col-sm-12 py-3">
            <div className="cart-head">
              <h4>SHOPPING CART</h4>
            </div>
            <div className="cart-table">
              <table>
                <thead>
                  <tr style={{ borderBottom: "1px solid black" }}>
                    <th>PRODUCT DETAILS</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {addedProducts.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center fw-bold"
                        style={{ fontSize: "18px" }}
                      >
                        Empty Cart
                      </td>
                    </tr>
                  ) : (
                    addedProducts.map((items) => {
                      const { id, name, category, price, discount, image } =
                        items.item;
                      return (
                        <tr key={id}>
                          <td>
                            <div className="product">
                              <div className="addedproduct-image">
                                <img src={image} alt="" />
                              </div>
                              <div className="product-details ps-3">
                                <h5>{name}</h5>
                                <p>{category}</p>
                                <Link onClick={() => removeItem(id)}>
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="qty-controller text-center">
                              <input
                                type="number"
                                name=""
                                min={1}
                                max={10}
                                id=""
                                value={items.initialQty}
                                onChange={(e)=>handleQty(e,id)}
                              />
                            </div>
                          </td>
                          <td className="text-center">
                            <p className="m-0">${price - discount}</p>
                          </td>
                          <td className="text-center">
                            <p className="m-0">${items.totalPrice}</p>
                          </td>
                        </tr>
                      );
                    })
                  )}
                  <tr>
                    <td className="fw-bold">Total Price = ${totalPrice}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <Link to={"/ecom-website/shop"}>Continue Shopping</Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12">
            <div className="summary-card">
              <div className="summary-head">
                <h4>ORDER SUMMARY</h4>
              </div>
              <div className="summary-items">
                <p>ITEMS X{totalQty}</p>
                <p>${totalPrice}</p>
              </div>
              <div className="total-cost">
                <p>TOTAL COST</p>
                <p>${totalPrice}</p>
              </div>
              <div className="checkout-btn">
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
