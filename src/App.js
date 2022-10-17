import React from 'react';
import { useState } from 'react';
import QRcode from 'react-qr-code';
import QRcodeLink from 'qrcode';
import './style.css';

export default function App() {
  const [link, setLink] = useState('');
  const [qrcode, setQrcode] = useState('');
  function handleLink(e) {
    setLink(e.target.value);
    handleDownloadLink(e.target.value);
  }

  function handleDownloadLink(link_url) {
    QRcodeLink.toDataURL(
      link_url,
      {
        width: 500,
        margin: 3,
      },
      function (err, url) {
        setQrcode(url);
      }
    );
  }
  return (
    <div>
      <div className="container">
        <div className="group-input">
          <input
            type="text"
            placeholder="Coloque seu link..."
            onChange={(e) => handleLink(e)}
            value={link}
          />
          <a href={qrcode} download={`QRcode.png`}>
            baixar
          </a>
        </div>
        <div className="group-qrcode">
          {link == '' ? (
            <p className="text">seu link vai aparecer aqui...</p>
          ) : (
            <div
              style={{
                height: 'auto',
                margin: '0 auto',
                maxWidth: 275,
                width: '100%',
                background: 'white',
                padding: '20px',
                borderRadius: '15px',
              }}
            >
              <QRcode
                size={256}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={link}
                viewBox={`0 0 256 256`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
