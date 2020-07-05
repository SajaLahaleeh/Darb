import React from "react";

import "./index.css";

const Images = props => {
  return (
    <div className='images-contener'>
      {props.urls
        ? props.urls.map((url, i) =>
            url ? (
              <img
                onClick={() => {
                  props.changeSliderShow(i);
                }}
                className='image-room'
                src={url}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default Images;
