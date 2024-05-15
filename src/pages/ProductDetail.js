import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Footer from "../components/Footer";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/YounHooooo/yh-data/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img-wrap">
            <img className="product-img" src={product?.img} />
          </Col>
          <Col>
            <strong className="product-title">{product?.title}</strong>
            <div className="product-price">{product?.price} 원</div>
            <Dropdown className="size-button">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/size-S">S</Dropdown.Item>
                <Dropdown.Item href="#/size-M">M</Dropdown.Item>
                <Dropdown.Item href="#/size-L">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="product-detail-button-wrap">
              <button className="buy-button">바로 구매하기</button>
              <button className="bag-button">장바구니 추가</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
