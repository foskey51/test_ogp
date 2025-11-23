import React, { useState, useEffect } from 'react';
import satori from 'satori';
import { toPng } from 'html-to-image';

const PreviewCard = () => {
  const [imgSrc, setImgSrc] = useState(null);

  const generatePreview = async () => {
    const jsx = (
      <div style={{ width: 1200, height: 630, backgroundColor: '#1e1e1e', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: 60 }}>Windmill.dev</h1>
        <p style={{ fontSize: 32 }}>Drag-and-drop app builder preview</p>
      </div>
    );

    // Satori generates SVG
    const svg = await satori(jsx, { width: 1200, height: 630 });
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    setImgSrc(url);
  };

  return (
    <div>
      <button onClick={generatePreview}>Generate Preview</button>
      {imgSrc && <img src={imgSrc} alt="Preview" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default PreviewCard;
