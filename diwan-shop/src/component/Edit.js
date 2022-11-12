import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { updateCart } from "../rtk/slices/cartSlice";

import "./Edit.css";
function Edit() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  const cartItems = useSelector((state) => state.cart);
  const selectedCart = cartItems.filter(
    (user) => user.id.toString() === params.id.toString()
  );
  const { productName, category, price } = selectedCart[0];
  const [value, setValue] = useState({
    productName,
    price,
    category,
  });
  const HandleEdit = () => {
    dispatch(
      updateCart({
        id: params.id,
        productName: value.productName,
        price: value.price,
        category: value.category,
      })
    );
    navigate("/cart");
  };
  return (
    <div className="editForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ProductName</Form.Label>
          <Form.Control
            type="text"
            value={value.productName}
            onChange={(e) =>
              setValue({ ...value, productName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>quantityPerUnit</Form.Label>
          <Form.Control
            type="text"
            value={value.price}
            onChange={(e) => setValue({ ...value, price: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>unitPrice</Form.Label>
          <Form.Control
            type="text"
            value={value.category}
            onChange={(e) => setValue({ ...value, category: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => HandleEdit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
