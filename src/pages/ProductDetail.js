import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Footer from "../components/Footer";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/YounHooooo/yh/products/${id}`;
    
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img-wrap">
            {product && (
              <img
                className="product-img"
                src={product.img}
                alt={product.title}
              />
            )}
          </Col>
          <Col>
            {product && (
              <>
                <strong className="product-title">{product.title}</strong>
                <div className="product-price">{product.price} 원</div>
                <div className="card-content-new">
                  {product.new ? "New" : ""}
                </div>

                <Dropdown className="size-button">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    사이즈 선택
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {product.size.map((size) => (
                      <Dropdown.Item key={size} href={`#/size-${size}`}>
                        {size}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div className="product-detail-button-wrap">
                  <button className="buy-button">바로 구매하기</button>
                  <button className="bag-button">장바구니 추가</button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
