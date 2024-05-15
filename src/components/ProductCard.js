import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="card-wrap" onClick={showDetail}>
      <img src={item?.img} />
      <div className="card-content">
        <div>{item?.choice == true ? "Conscious choice" : ""}</div>
        <strong>{item?.title}</strong>
        <div>₩{item?.price}</div>
        <div className="card-content-new">{item?.new == true ? "New" : ""}</div>
        <strong style={{ color: "red" }}>
          {item?.soldout == true ? "soldout" : ""}
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;
