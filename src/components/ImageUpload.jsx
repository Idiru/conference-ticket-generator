import { useState } from "react";

export default function ImageUpload() {
  const [imgSrc, setImgSrc] = useState(
    localStorage.getItem("uploadedImage") || ""
  );

  const [error, setError] = useState(false);
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file) {
        if (file.size > MAX_FILE_SIZE) {
          setError(true);
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          setImgSrc(reader.result);
          localStorage.setItem("uploadedImage", reader.result);
          setError(false);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleImageRemove = () => {
    setImgSrc("");
    localStorage.removeItem("uploadedImage", imgSrc);
    setError(false);
  };


  return (
    <div className="container-upload">
      <label htmlFor="">Upload Avatar</label>
      <div
        className="upload-area"
        onClick={
          !imgSrc ? () => document.getElementById("fileInput").click() : ""
        }
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        {!imgSrc ? (
          <div className="upload-area-empty">
            <img src="/upload-icon.svg" alt="upload-icon" />
            <p className="upload-text">Drag and drop or click to upload</p>
          </div>
        ) : (
          <div className="uploaded-container">
            <div
              className="uploaded-image"
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="uploaded-container-buttons">
              <button
                type="button"
                className="upload-button"
                onClick={() => handleImageRemove()}
              >
                Remove image
              </button>{" "}
              <button
                type="button"
                className="upload-button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Change Image
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container-disclaimer">
        {error ? (
          <p className="disclaimer error">
            <img src="/info-icon-red.svg" alt="info-icon" />
            File too large. Please upload a photo under 5MB.
          </p>
        ) : (
          <p className="disclaimer">
            <img src="/info-icon.svg" alt="info-icon" />
            Upload your photo (JPG or PNG, max size: 5MB).
          </p>
        )}
      </div>
    </div>
  );
}
