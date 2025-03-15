import React from "react";
// import { useState } from "react";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/col";


const products =[
    {
        id: 1, 
        title:"#Red #Short #Round" , 
        price: 15.99,
        originalPrice:33.45, 
        image:'./images/red-round-medium.jpg',
        rating: 1,
        sale: true
    },
    {
        id: 2, 
        title:"#Red #Medium #Coffin #Floral" , 
        price: 42.75,
        originalPrice:54.95, 
        image:'./images/red-short-floral.jpeg',
        rating: 4,
        sale:true
    },
    {
        id: 3, 
        title:"#Red #Long #Stilleto #Spooky" , 
        price: 69.99, 
        image:'./images/red-long-spooky.jpg',
        rating: 4.5,
        // sale: false
    },
    {
        id: 4, 
        title:"#Red #Square #Long #Winter" , 
        price: 35.00, 
        image:'./images/red-winter-coffin.jpg',
        rating: 2,
        // sale: false
    },
    {
        id: 5, 
        title:"#Green #Short #Square" , 
        price: 34.99,
        originalPrice:45.00, 
        image:'./images/green-short-square.jpg',
        rating: 5,
        sale: true
    },
    {
        id: 6, 
        title:"#Green #Long #Coffin #Floral" ,    
        price: 45.00,
        originalPrice: 60.00,
        image:'./images/green-floral-coffin.jpg',
        rating: 2.5,
        sale: true
    },
    {
        id: 7, 
        title:"#Green #Medium #Square #Winter" , 
        price: 18.00,
        originalPrice: 25.00, 
        image:'./images/green-medium-square-winter.jpg',
        rating: 1.5,
        sale: true
    },
    {
        id: 8, 
        title:"#Green #Square #XL" , 
        price: 70.00, 
        image:'./images/green-xl-square.jpg',
        rating: 3.5,
        // sale: false
    },
    {
        id: 9, 
        title:"#Orange #Long #Coffin #Fall" , 
        price: 66.00, 
        image:'./images/orange-fall-coffin.jpg',
        rating: 5,
        // sale: false
    },
    {
        id: 10, 
        title:"#Orange #Short #Square #Spooky" , 
        price: 50.00, 
        image:'./images/orange-short-spooky.jpg',
        rating: 5,
        // sale: false
    },
    {
        id: 11, 
        title:"#Orange #Medium #Floral #Square" , 
        price: 55.00, 
        image: './images/orange-floral-long.jpg',
        rating: 5,
        // sale: false
    },
    {
        id: 12, 
        title:"#Orange #XL #Stilleto" , 
        price: 55.00,
        originalPrice:70.00,
        image:'./images/orange-xl-stilleto.jpg',
        rating: 0.5,
        sale: true
    },
    {
        id: 13, 
        title:"#Pink #Short #Square #Floral" , 
        price: 39.99, 
        image:'./images/pink-short-floral.jpg',
        rating: 5,
        // sale: false
    },
    {
        id: 14, 
        title:"#Pink #Medium #Square #Spooky " , 
        price: 58.75, 
        image:'./images/pink-medium-square-spooky.jpg',
        rating: 4,
        // sale: false
    },
    {
        id: 15, 
        title:"#Pink #Coffin #Long #Winter" , 
        price: 19.99,
        originalPrice: 29.99, 
        image:'./images/pink-coffin-winter.jpg',
        rating: 2,
        sale: true
    },
    {
        id: 16, 
        title:"#Pink #Short #Round" , 
        price: 20.00, 
        image:'./images/pink-short-round.jpg',
        rating: 4.5,
        // sale: false
    }
];

const RatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i +1){
            stars.push(<i key={i} className='bi-star-fill'></i>);
        } else if (rating >= i + 0.5) {
            stars.push(<i key={i} class="bi-star-half"></i>);
        } else {
            stars.push(<i class="bi-star"></i>)
        }
    }
    return stars;
}

// function Product({title, image, price}) {
//     return (
//         <li>
//             <img src="{image}" alt="{title}" />
//             <h2>{title}</h2>
//             <p></p>
//         </li>
//     )
// }

function ProductList() {
    // const [currentProducts, setCurrentProducts] = useState(products)

    // const ProductList = currentProducts.map(product => 
    //     <Product
    //         key={product.id}
    //         image={product.image}
    //     />
    // )

    return (
        <section id="product-list" className="py-5 bg-dark text-white">
          <Container>
            <Row className="gx-4 gx-lg-5 justify-content-center">
              {products.map((product) => (
                <Col key={product.id} md={6} lg={4} xl={3} className="mb-5">
                  <Card className="h-100 bg-secondary text-white">
                    {/* Favorite Button */}
                    <Button variant="danger" className="position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                    <i className="bi-heart-fill"></i>
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
                      <Card.Title className="fw-bolder">{product.name}</Card.Title>
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
                    <Card.Footer className="p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Button variant="outline-light" className="mt-auto">
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      );
    };
    
    export default ProductList;
