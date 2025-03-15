import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard() {
    return (<div className="product col mb-5" data-price="34.99" data-name="#Green #Short #Square">
                <div class="card h-100">
                    <button id="favoriteButton" class="btn btn-danger position-absolute" type="input" style="top: 0.5rem; right: 0.5rem">
                        <i class="bi bi-heart-fill"></i>
                    </button>
                    {/* <!-- Sale badge--> */}
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; left: 0.5rem">Sale</div>
                    {/* <!-- Product image--> */}
                    <img class="card-img-top" src="images/green-short-square.jpg" 
                    alt="#Green#Short#Square" />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="card-title fw-bolder text-white">#Green #Short #Square</h5>
                            <div class="d-flex justify-content-center small text-white mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            <div class="card-text price">
                            {/* <!-- Product price--> */}
                            <span class="text-muted text-decoration-line-through">$45.00</span>
                            $34.99
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-light mt-auto" href="#">Add to cart</a></div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;