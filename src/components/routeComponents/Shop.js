import React,{useState} from 'react'
import "../../assets/css/Shop.css";
import Breadcrumbs from '../Breadcrumbs';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShopSidemenu from '../ShopSidemenu';
import ProductCard from '../ProductCard';
function Shop() {
  const [filterMenu,setFilterMenu] = useState(false)
  const handleFilterMenu = ()=>{
    setFilterMenu(!filterMenu)
  }
  return (
    <>
      <Breadcrumbs currPage="Shop"/>
      <div className="container shop-container">
        <div className="row w-100 m-0 postion-relative">
          <div className="filter-menu" onClick={handleFilterMenu}>
            <FontAwesomeIcon icon={faFilter}/><span> Filters</span>
          </div>
          <ShopSidemenu filterMenu={filterMenu}/>
          <div className="col-12 col-lg-9 col-md-8 col-sm-12 p-0">
            <div className="products-top">
              <div className='options-controller'>
                <div className="product-sort-options">
                  <select name="" id="">
                    <option value="">Default Sorting</option>
                  </select>
                </div>
                <div className="product-show-options">
                  <select name="" id="">
                    <option value="">Show: 09</option>
                  </select>
                </div>
              </div>
              <div className='products-showing'>
                  <p>Show 01-09 of 36 Products</p>
              </div>
            </div>
            <div className="products-card">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
