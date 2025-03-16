import { ListGroup, Button, Container } from "react-bootstrap";
import { useCart } from "../context/ShopContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Container className="mt-4">
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.length === 0 ? (
          <ListGroup.Item>Your cart is empty</ListGroup.Item>
        ) : (
          cart.map((item) => (
            <ListGroup.Item key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default CartPage;
