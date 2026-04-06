"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

export const ClUpload = () => {
  const [image, setImage] = useState("");

  const uploadImage = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;
    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
    }
  };
  console.log(image);

  const preset = "food-delivery";
  return (
    <div>
      <CldUploadWidget uploadPreset={preset} onSuccess={uploadImage}>
        {({ open }) => {
          return (
            <button className="button" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
