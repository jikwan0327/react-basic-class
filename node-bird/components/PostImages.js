import { PlusOutlined } from "@ant-design/icons";
import PropoTypes from "prop-types";
import { useCallback, useState } from "react";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[1].src} width="50%" alt={images[1].src} onClick={onZoom} />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          src={images[1].src}
          style={{ width: "50%", display: "inline-block" }}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }
  return (
    <div>
      <img role="presentation" style={{ width: "50%" }} src={images[0].src} onClick={onZoom} />
      <div
        role="presentation"
        style={{ display: "inline-block", width: "50%", textAlign: "center", verticalAlign: "middle" }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
    </div>
  );
};

PostImages.propType = {
  images: PropoTypes.arrayOf(PropoTypes.object),
};

export default PostImages;