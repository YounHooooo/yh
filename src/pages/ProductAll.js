import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let categoryQuery = query.get("category") || "";
    let url = `http://my-json-server.typicode.com/YounHooooo/yh/products`;

    // URL 생성 로직
    if (searchQuery && categoryQuery) {
      url += `?q=${searchQuery}&category=${categoryQuery}`;
    } else if (searchQuery) {
      url += `?q=${searchQuery}`;
    } else if (categoryQuery) {
      url += `?category=${categoryQuery}`;
    }

    let response = await fetch(url);
    let data = await response.json();
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
