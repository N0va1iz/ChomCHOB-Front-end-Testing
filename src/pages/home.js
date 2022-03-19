import React, {useEffect, useState} from "react";
import axios from 'axios';
import './home.css'
import FullStar from '../fullStar'
import Star from '../star'


const Home = () => {     
    const [data, setData] = useState({ products: [] })    

    useEffect(async () => {
        const result = await axios('https://cc-mock-api.herokuapp.com/product',
        );
        setData({
            products: result.data                     
        });             
    }, {}); 
      
    let count = data.products.length    
    
    return (
        <div class="body">
            <h5 class="countProduct">Products ({count})</h5>
            <div class="container">
                {data.products.map(product => (
                    <div key={product._id}>
                        <div class="card">
                            <img src={product.image_url} alt="product" class="productImg"/>
                            <div class="grid-container">
                                <div class="container-brandImg">
                                    <img src={product.brand_info.url} alt="brand" class="brandImg"/>    
                                </div>
                                <div class="container-productName">
                                    <b class="productName">{product.name}</b>
                                </div>
                                <div class="container-price">
                                    <p class="colorGray">Price</p>
                                    <p class="colorRed">฿{product.price}</p>
                                </div>
                                <div class="container-reviews">
                                    {product.review.number === 0 &&
                                        <p></p>
                                    }
                                    {product.review.number >= 1 &&
                                        <p class="colorGray">Reviews ({product.review.number} reviews)</p>
                                    }                                     
                                    <div class="rating star">                                        
                                        {product.review.rating === 1 &&
                                            <span><FullStar/><Star/><Star/><Star/><Star/></span>
                                        }
                                        {product.review.rating === 2 &&
                                            <span><FullStar/><FullStar/><Star/><Star/><Star/></span>
                                        }
                                        {product.review.rating === 3 &&
                                            <span><FullStar/><FullStar/><FullStar/><Star/><Star/></span>
                                        }
                                        {product.review.rating === 4 &&
                                            <span><FullStar/><FullStar/><FullStar/><FullStar/><Star/></span>
                                        }
                                        {product.review.rating === 5 &&
                                            <span><FullStar/><FullStar/><FullStar/><FullStar/><FullStar/></span>
                                        }
                                        {product.review.rating === 0 &&
                                            <span></span>
                                        } 
                                    </div> 
                                </div>
                            </div>   
                                              
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default Home