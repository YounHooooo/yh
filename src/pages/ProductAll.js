import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let categoryQuery = query.get("category") || "";
    let url = `https://my-json-server.typicode.com/YounHooooo/yh/products`;

    let response = await fetch(url);
    let data = await response.json();

    if (searchQuery) {
      data = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryQuery) {
      data = data.filter((product) => product.category === categoryQuery);
    }

    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductAll;
