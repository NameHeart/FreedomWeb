import styled from 'styled-components';

export const ScoreBlockStyled = styled.div`
  .score_block_container {
    width: fit-content;
    min-width: 150px;
    .sb_header {
      margin-bottom: 0.5rem;
      border-radius: 0.5rem;
      padding: 0.5rem;
      text-align: center;
      background: ${({ theme }) => theme.COLORS.PURPLE_1};
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
      font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_REGULAR};
    }
    .sb_body {
      border-radius: 0.5rem;
      padding: 0.75rem;
      background: ${({ theme }) => theme.COLORS.GRAY_4};
      text-align: center;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
      font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_MEDIUM};
    }
  }

  .theme_standard {
  }
`;
