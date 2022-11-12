import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import Slider from "./Slider";
import Categories from "./Categories";
import "./Home.css";
function Home() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api());
  }, [dispatch]);

  return (
    <>
      {/* <Categories />
      <Slider /> */}
      <Container className="mt-5 pt-5">
        <h1 className="pb-5">Products</h1>

        <Row>
          {products.map((product) => (
            <Col
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-12 col-style"
              style={{ height: "480px" }}
            >
              <Card className="card-style">
                <Card.Img
                  variant="top"
                  src={product.img}
                  style={{ height: "100%", width: "100%" }}
                />
                <Card.Body className="px-0 mt-4">
                  <Card.Text className="text-start">
                    {product.productName}
                  </Card.Text>
                  <Card.Title className="text-start">
                    {product.price} $
                  </Card.Title>
                  <Button
                    className="w-100 mt-1"
                    variant="dark"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <i className="fa-solid fa-cart-shopping"></i> Add TO Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;
