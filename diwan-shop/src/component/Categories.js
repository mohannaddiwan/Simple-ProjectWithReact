import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../rtk/slices/categoriesSlice";
const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api());
  }, [dispatch]);
  return (
    <>
      <Container className="">
        <h1 className="pb-5">Categories</h1>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} className="col-md-3 p-5">
              <Card style={{ width: "240px", height: "250px" }}>
                <Card.Img
                  variant="top"
                  src={category.img}
                  style={{ height: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{category.categoryName}</Card.Title>
                  {/* <Card.Text>{category.unitPrice}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
