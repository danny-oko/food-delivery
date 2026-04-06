"use client";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

type ClUploadProps = {
  onUpload: (url: string) => void;
};

export const ClUpload = ({ onUpload }: ClUploadProps) => {
  const uploadImage = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;
    if (typeof info === "object" && info.secure_url) {
      onUpload(info.secure_url);
    }
  };

  return (
    <div>
      <CldUploadWidget uploadPreset="food-delivery" onSuccess={uploadImage}>
        {({ open }) => (
          <button
            type="button"
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => open()}
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};
