import styled from "styled-components";

export const DetailPageStyled = styled.div`
  position: relative;
  padding: 50px;
  .detail_process_container {
    .dt_pc_content_block {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      column-gap: 55px;
      .main_image {
        .detail_image {
          max-width: 319px;
          height: auto;
          padding-top: 45px;
        }
      }
      .detail_text {
        min-width: 571px;
        height: auto;
        .head_text {
          max-width: 150px;
          height: auto;

          font-family: "Kanit";
          font-style: normal;
          font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};
          line-height: 30px;
          /* identical to box height */

          color: ${({ theme }) => theme.COLORS.BLUE};

          /* Inside auto layout */

          flex: none;
          order: 0;
          flex-grow: 0;
        }
        .description_text {
          max-width: 570px;
          height: auto;
          font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          line-height: 27px;
          letter-spacing: 0.04em;

          color: ${({ theme }) => theme.COLORS.GRAY_1};

          /* Inside auto layout */

          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    position: relative;
    padding: 55px;

    .detail_process_container {
      .dt_pc_content_block {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        column-gap: 20px;
        .main_image {
          .detail_image {
            max-width: 319px;
            height: auto;
            padding-top: 45px;
          }
        }
        .detail_text {
          min-width: 250px;
          height: auto;
          .head_text {
            max-width: 150px;
            height: auto;

            font-style: normal;
            font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            line-height: 30px;
            /* identical to box height */

            color: ${({ theme }) => theme.COLORS.BLUE};

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .description_text {
            max-width: 500px;
            height: auto;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            line-height: 27px;
            letter-spacing: 0.04em;

            color: ${({ theme }) => theme.COLORS.GRAY_1};

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    position: relative;
    padding: 20px;

    .detail_process_container {
      .dt_pc_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        column-gap: 20px;
        .main_image {
          .detail_image {
            max-width: 161px;
            height: auto;
            padding-top: 45px;
          }
        }
        .detail_text {
          min-width: 300px;
          height: auto;
          padding: 10px;
          .head_text {
            max-width: 150px;
            height: auto;

            font-style: normal;
            font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            line-height: 30px;
            /* identical to box height */

            color: ${({ theme }) => theme.COLORS.BLUE};

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .description_text {
            max-width: 300px;
            height: auto;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            line-height: 27px;
            letter-spacing: 0.04em;

            color: ${({ theme }) => theme.COLORS.GRAY_1};

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;
          }
        }
      }
    }
  }
`;
