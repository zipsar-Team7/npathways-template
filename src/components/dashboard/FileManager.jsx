import { useState } from "react";
import Button from "../common/Button";
import "./FileManager.css";

const FileManager = ({ files, onDelete }) => {
  if (!files || files.length === 0) {
    return (
      <div className="file-manager-empty">
        <p>No files uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="file-manager">
      <h3>Uploaded Documents ({files.length})</h3>
      <div className="files-list">
        {files.map((file) => (
          <div key={file.id} className="file-item">
            <div className="file-icon">
              {file.type.includes("pdf") ? "PDF" : "IMG"}
            </div>
            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <span className="file-meta">
                {file.size} • Uploaded {file.date}
              </span>
            </div>
            <div className="file-actions">
              <Button
                variant="ghost"
                size="small"
                onClick={() => alert(`Downloading ${file.name}`)}
              >
                Download
              </Button>
              <Button
                variant="ghost"
                size="small"
                className="text-error"
                onClick={() => onDelete(file.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileManager;
