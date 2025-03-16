import React from 'react';
import { useCart } from '../context/ShopContext';
import products from '../data';

const PopularPage = () => {
  const { addToCart } = useCart();

  // Filter products with rating 4 or higher
  const popularProducts = products.filter((product) => product.rating >= 3.5);

  return (
    <Container>
      <h2 className='text-center'>Popular Items</h2>
        <Row className="gx-4 gx-lg-5 justify-content-center">
          {products.map((product) => (
            <Col key = {product.id} md={6} lg={4} xl={3} className="mb-5">
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
            </Col>
          ))}
        </Row>
      </Container>
  );
};

export default PopularPage;