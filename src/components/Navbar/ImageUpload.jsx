import { useState } from "react"

export default function ImageUpload() {

const [imgSrc, setImgSrc] = useState(localStorage.getItem("uploadedImage") || "")

const handleImageUpload = (event) => {
  const file = event.target.file[0]
  if (file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      setImgSrc(reader.result)
      localStorage.setItem('uploadedImage', reader.result)
    }
    reader.readAsDataURL(file)
  }
}

  return (
    <div className="container-upload" onClick={handleImageUpload}>
    <label htmlFor="">Upload Avatar</label>
    <div className="upload-area">
      <img src="/public/upload-icon.svg" alt="upload-icon" />
      <p className="upload-text">Drag and drop or click to upload</p>
    </div>
    <div className="container-disclaimer">
      <p className="disclaimer">
        <img src="/public/info-icon.svg" alt="info-icon" />
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  </div>
  )
}
