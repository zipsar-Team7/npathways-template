import { useState, useRef } from "react";
import Button from "../common/Button";
import "./FileUploader.css";

const FileUploader = ({ onUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    // Convert FileList to array and pass to parent
    const fileArray = Array.from(files);
    onUpload(fileArray);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="file-uploader-container">
      <form
        className={`file-upload-form ${dragActive ? "drag-active" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          id="file-upload"
          multiple={true}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <div className="upload-prompt">
          <div className="upload-icon">Upload</div>
          <p>Drag and drop your files here or</p>
          <Button variant="outline" onClick={onButtonClick} type="button">
            Browse Files
          </Button>
          <p className="upload-hint">Supported: PDF, JPG, PNG (Max 5MB)</p>
        </div>
      </form>
    </div>
  );
};

export default FileUploader;
