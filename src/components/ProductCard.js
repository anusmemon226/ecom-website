import React from "react";
import { faShoppingBag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch,useSelector } from "react-redux";
import { AddProducts } from "../state/reducers/AddToCartReducers";
import { setTotalPrice } from "../state/reducers/TotalPriceReducer";
import { products } from "../products";
function ProductCard() {
  
  const addedProducts = useSelector((state)=>state.CartItems)
  const dispatch = useDispatch();

  const handleCart = (id)=>{
    let product = products.filter((items)=>{
      return items.id === id
    })
    if(addedProducts.length===0){
      dispatch(AddProducts(...product))
      dispatch(setTotalPrice(product[0].price-product[0].discount))
    }else{
      let check = addedProducts.map((items)=>{
          return items.item.id
      })
      if(check.includes(product[0].id)){
        alert("Product Already Added")
      }else{
        dispatch(AddProducts(...product))
        dispatch(setTotalPrice(product[0].price-product[0].discount))
      }
    }
  }

  return (
    <>
      {products.map((items, key) => {
        const {id,name,category,price,discount,image} = items
        return (
          <div key={id} className="product-card col-12 col-lg-4 col-md-6 col-sm-12">
            <div className="product-image">
              <div className="addtocart" onClick={()=>{handleCart(id)}}>
                <button>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </button>
              </div>
              <div className="addFavourite">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <img src={image} alt="" />
            </div>
            <div className="product-body">
              <span>{category}</span>
              <p>{name}</p>
              <p>
                ${price} <span>${discount}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
