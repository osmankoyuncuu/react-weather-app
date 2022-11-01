import React from "react";
import DetailContainer, { Card, Super } from "../Styles/Detail.styled";
import { TfiLocationPin } from "react-icons/tfi";

const Detail = () => {
  return (
    <DetailContainer>
      <Card>
        <h2>
          <TfiLocationPin />
          Ankara <Super>TR</Super>
        </h2>

        <h3>Temp</h3>
      </Card>
    </DetailContainer>
  );
};

export default Detail;
