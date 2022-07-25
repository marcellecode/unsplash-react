import React from "react";
import styled from "styled-components";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 180px;
`;

const CardImage = styled.img`
  width: 350px;
  grid-row-end: span 3;
  border: 1px solid red;
  border-radius: 10px;
`;

const CardBlock = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`;

const ImageList = (props) => {
  return (
    <CardBlock>
      {props.imagesList.map((data) => (
        <CardList>
          <CardImage key={data.id} alt={data.description} src={data.urls.small} />
        </CardList>
      ))}
    </CardBlock>
  );
};

export default ImageList;
