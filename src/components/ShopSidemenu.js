import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import MultiRangeSlider from "multi-range-slider-react";
function ShopSidemenu(props) {
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(100);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
      };
    return (
        <>
            <div className={`${props.filterMenu?"sidemenu-mobile-controller":"sidemenu-controller"} col-12 col-lg-3 col-md-4 col-sm-11`}>
                <div className="categories">
                <div className="cat-head">
                    <h4>
                    Categories
                    </h4>
                </div>
                <div className="cat-links">
                    <Link>Men's</Link>
                    <Link>Women's</Link>
                    <Link>kids's</Link>
                </div>
                </div>
                <div className="brands">
                <div className="brand-head">
                    <h4>
                    Brands
                    </h4>
                </div>
                <div className="brands-links">
                    <div>
                    <input type="checkbox" />
                    <Link> Calvin Klein</Link>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <Link> Diesel</Link>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <Link> Polo</Link>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <Link> Tommy Hilfiger</Link>
                    </div>
                </div>
                </div>
                <div className="price-range">
                <div className="pr-head">
                    <h4>
                    Price
                    </h4>
                </div>
                <div className="pr-links">
                    <div className='ranges'>
                    <span>${minValue}</span>
                    <span>${maxValue}</span>
                    </div>
                    <div className="range-slide">
                    <MultiRangeSlider
                        min={0}
                        max={100}
                        step={5}
                        ruler={false}
                        label={false}
                        barInnerColor='#e7ab3c'
                        minValue={minValue}
                        maxValue={maxValue}
                        maxCaption={false}
                        style={{boxShadow:"none",border:"none",padding:"30px 0",width:"75%"}}
                        onInput={(e) => {
                        handleInput(e);
                        }}
                    />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ShopSidemenu
