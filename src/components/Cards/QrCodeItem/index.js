import React from 'react';
import cx from 'classnames';
// import PropTypes from 'prop-types'
import { QrCodeItemStyled } from './styled';
import QRCode from 'react-qr-code';

const QrCodeItem = ({ theme_standard, code }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const _onImageCownload = () => {
    const svg = document.getElementById('QRCode');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'QRCode';
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <QrCodeItemStyled>
      <div className={customClass}>
        <div className="qrcode_item_container">
          <QRCode
            title="Yamaha activity qrcode"
            id="QRCode"
            value={code}
            size={156}
          />
          <div className="qrcode_label">{code}</div>
          <button
            className="btn_qrcode_download"
            type="button"
            onClick={_onImageCownload}
          >
            Download
          </button>
        </div>
      </div>
    </QrCodeItemStyled>
  );
};

QrCodeItem.propTypes = {};

export default QrCodeItem;
