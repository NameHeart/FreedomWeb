import styled from 'styled-components';

export const QrCodeItemStyled = styled.div`
  .qrcode_item_container {
    width: fit-content;
    text-align: center;
    .qrcode_label {
      color: ${({ theme }) => theme.COLORS.BLUE_2};
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
      font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_REGULAR};
    }
    .btn_qrcode_download {
      margin: auto;
      border-radius: 1rem;
      padding: 0.05rem 0.5rem;
      background: ${({ theme }) => theme.COLORS.BLUE_4};
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
      font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_REGULAR};
      cursor: pointer;
    }
  }

  .theme_standard {
  }
`;
