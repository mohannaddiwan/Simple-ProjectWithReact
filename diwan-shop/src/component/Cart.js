import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { deleteCart, clearCart } from "../rtk/slices/cartSlice";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (previousScore, currentScore) =>
      (previousScore += currentScore.qnt * parseInt(currentScore.price)),
    0
  );

  return (
    <>
      <Container className="p-5">
        <h1>{cartItems.length === 0 ? "Empty Cart" : "Cart"}</h1>
        {cartItems.length > 0 && (
          <Table striped bordered hover className="m-3">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>qnt</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.id}</td>
                  <td>{cartItem.productName}</td>
                  <td>{cartItem.category}</td>
                  <td>{cartItem.price}</td>
                  <td>{cartItem.qnt}</td>
                  <td>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={() => dispatch(deleteCart(cartItem.id))}
                    >
                      Delete
                    </Button>

                    <Link to={`/Edit/${cartItem.id}`}>
                      <Button value={cartItem.id} variant="success">
                        Edit
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {cartItems.length > 0 && (
          <Row>
            <Col>
              <Button variant="dark" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
            </Col>
            <Col>
              <h5>Total:{total}</h5>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
export default Cart;
