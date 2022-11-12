import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { update } from "../rtk/slices/productsSlice";

function UpdatePro() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  const { products } = useSelector((state) => state.products);
  const selectedProduct = products.filter(
    (user) => user.id.toString() === params.id.toString()
  );
  const { productName, category, price, img } = selectedProduct[0];
  const [value, setValue] = useState({
    productName,
    price,
    category,
    img,
  });
  const HandleUpdate = () => {
    dispatch(
      update({
        id: params.id,
        productName: value.productName,
        price: value.price,
        category: value.category,
        img: "./img/" + value.img.slice(12),
      })
    );
    navigate("/");
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>unitPrice</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setValue({ ...value, img: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => HandleUpdate()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdatePro;
