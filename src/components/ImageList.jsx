import React from "react";

const ImageList = (props) => {
    // console.log(props.imagesList)
    if (props.ImagesList) {
      console.log(props.imagesList);
    return (
      <div>
        {props.imagesList.map((data) => (
          <img alt={data.description} src={data.urls.regular} />
        ))}
      </div>
    );
  }else {
    return (
        <div>
          Erro
        </div>
      );
  }
};

export default ImageList;
