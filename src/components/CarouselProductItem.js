import React from "react";
import { faShoppingBag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../state/reducers/TotalPriceReducer.js";
import { AddProducts } from "../state/reducers/AddToCartReducers.js";
import { products } from "../products.js";
function CarouselProductItem(props) {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state)=>state.CartItems)
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
      <Carousel cols={3} autoplay={3000} showDots loop gap={20}>
        {products.map((items, key) => {
          const {id,name,category,price,discount,image} = items
          return (
               <Carousel.Item key={id}>
              <div className="carousel-image">
                <div className="addtocart" onClick={()=>handleCart(id)}>
                  <button>
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </button>
                </div>
                <div className="addFavourite">
                  <button>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
                <img src={image} alt={name}/>
              </div>
              <div className="product-banner-caption">
                <p>{category}</p>
                <p>{name}</p>
                <p>
                ${price} <span style={{textDecoration:"line-through",color:"rgb(184, 184, 184)"}}>${discount}</span>
              </p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselProductItem;
