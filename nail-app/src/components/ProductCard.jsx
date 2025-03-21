import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/ShopContext";
import Badge from "react-bootstrap/Badge";


const RatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i +1){
            stars.push(<i key={i} className='bi-star-fill'></i>);
        } else if (rating >= i + 0.5) {
            stars.push(<i key={i} className="bi-star-half"></i>);
        } else {
            stars.push(<i class="bi-star"></i>)
        }
    }
    return stars;
}

const ProductCard = ({ product }) => {
  
    const { addToCart } = useCart();

  return (
    <Card className="h-100 bg-secondary text-white">
                {/* Favorite Button */}
                <Button variant="danger" className="position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                <i class="bi bi-heart"></i>
                </Button>

                {/* Sale Badge */}
                {product.salePrice && (
                  <Badge bg="dark" className="position-absolute" style={{ top: "0.5rem", left: "0.5rem" }}>
                    Sale
                  </Badge>
                )}

                {/* Product Image */}
                <Card.Img variant="top" src={product.image} alt={product.name} />

                {/* Product Details */}
                <Card.Body className="text-center">
                  <Card.Title className="fw-bolder">{product.title}</Card.Title>
                  <div className="d-flex justify-content-center small mb-2">{RatingStars(product.rating)}</div>
                  <Card.Text>
                    {product.salePrice ? (
                      <>
                        <span className="text-muted text-decoration-line-through">${product.salePrice.toFixed(2)}</span>{" "}
                        ${product.price.toFixed(2)}
                      </>
                    ) : (
                      <>${product.price.toFixed(2)}</>
                    )}
                  </Card.Text>
                </Card.Body>

                {/* Add to Cart Button */}
                <Card.Footer className="p-4 pt-0 border-top-0 bg-light">
                  <div className="text-center">
                    <Button variant="outline-light" className="bg-light mt-auto" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
  );
};

export default ProductCard;
