import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import { insert, addProduct } from "../rtk/slices/productsSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Edit.css";
function AddProduct() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productName = useRef(null);
  const category = useRef(null);
  const price = useRef(null);
  const img = useRef(null);
  console.log(img);
  const Add = () => {
    const product = {
      productName: productName.current.value,
      category: category.current.value,
      price: price.current.value,
      img: "./img/" + img.current.value.slice(12),
    };

    dispatch(insert(product));
    navigate("/products");
  };

  return (
    <div className="editForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ProductName</Form.Label>
          <Form.Control type="text" ref={productName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" ref={category} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" ref={price} />
          target
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" ref={img} />
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            Add();
          }}
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
