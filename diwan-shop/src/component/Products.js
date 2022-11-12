import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { api, deletePro } from "../rtk/slices/productsSlice";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { MDBCol } from "mdbreact";

function Products() {
  const { products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api());
  }, [dispatch]);
  const [filterVal, setFilter] = useState("");
  const filter = (e) => {
    setFilter(e.target.value);
  };
  const sonuc = () => {
    const e = products.filter((e) => e.productName.includes(filterVal));
    return e;
  };
  console.log(sonuc());
  return (
    <>
      <Container className="mt-5">
        <h1 className="pb-5 text-start">Mange Products</h1>

        {error && <Alert color="warning">Error in Api</Alert>}
        <div className="d-flex align-items-center justify-content-center">
          <MDBCol md="3">
            <form className="form-inline mt-4 mb-4">
              <input
                className="form-control form-control-sm ml-3 w-75 input-style"
                type="text"
                placeholder="Search"
                value={filterVal}
                aria-label="Search"
                onChange={filter}
              />
            </form>
          </MDBCol>

          <Link to="/AddProduct">
            <Button variant="dark">Add Product</Button>
          </Link>
        </div>
        {sonuc().length > 0 && (
          <Table striped bordered hover className="m-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>First Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {sonuc().map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img
                      src={product.img}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`/Delete/${product.id}`}>
                      <Button
                        className="m-2"
                        variant="danger"
                        onClick={() => {
                          dispatch(deletePro(product));
                        }}
                      >
                        Delete
                      </Button>
                    </Link>

                    <Link to={`/Update/${product.id}`}>
                      <Button value={product.id} variant="success">
                        Edit
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}
export default Products;
