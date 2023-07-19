import styled from "styled-components";

export const SecAboutWidgetStyled = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10px;
  .about_container {
    max-width: 1440px;
    margin: auto;
    .ab_content_block {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .image_main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 271px;
        margin: 250px;
        .main_image {
          max-width: 629px;
          height: auto;
        }
      }
      .main_text {
        height: auto;
        padding-top: 100px;
        .logo_text {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }
        .head_text {
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S26};
          font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
        }
        .description_text {
          display: flex;
          max-width: 344px;
          height: auto;
          flex-direction: column;
          flex-shrink: 0;
          .description_text_font {
            padding-top: 20px;
            color: ${({ theme }) => theme.COLORS.BLACK_2};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          }
        }
      }
      .group_button {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .button_text {
          display: flex;
          justify-content: center;
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
        }
        .button {
          max-width: 180.643px;
          height: auto;
          .button_text {
            color: ${({ theme }) => theme.COLORS.BLUE};
            text-align: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    min-height: 100%;
    .about_container {
      .ab_content_block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        .image_main {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 271px;
          margin: 80px;
          .main_image {
            max-width: 360px;
            height: auto;
          }
        }
        .main_text {
          height: auto;
          padding-top: 100px;
          .logo_text {
            display: inline-flex;
            align-items: center;
            gap: 14px;
          }
          .head_text {
            color: ${({ theme }) => theme.COLORS.BLUE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S22};
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          }
          .description_text {
            display: flex;
            max-width: 344px;
            height: auto;
            flex-direction: column;
            flex-shrink: 0;
            .description_text_font {
              padding-top: 20px;
              color: ${({ theme }) => theme.COLORS.BLACK_2};
              font-size: ${({ theme }) => theme.FONT.SIZE.S16};
              font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            }
          }
        }
        .group_button {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .button_text {
            display: flex;
            justify-content: center;
            color: ${({ theme }) => theme.COLORS.BLUE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .button {
            max-width: 200.643px;
            height: auto;
            .button_text {
              color: ${({ theme }) => theme.COLORS.BLUE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
              font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .about_container {
      max-width: 350px;
      margin: auto;
      .ab_content_block {
        justify-content: flex-start;
        flex-direction: column;
        .image_main {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 271px;
          .main_image {
            max-width: 332px;
            height: auto;
          }
        }
        .main_text {
          height: auto;
          padding-top: 10px;
          .logo_text {
            display: inline-flex;
            align-items: center;
            gap: 5px;
          }

          .head_text {
            color: ${({ theme }) => theme.COLORS.BLUE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S22};
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          }
          .description_text {
            display: flex;
            max-width: 344px;
            height: auto;
            flex-direction: column;
            flex-shrink: 0;
            .description_text_font {
              padding: 20px;
              color: ${({ theme }) => theme.COLORS.BLACK_2};
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            }
          }
        }
        .group_button {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .button_text {
            display: flex;
            justify-content: center;
            color: ${({ theme }) => theme.COLORS.BLUE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .button {
            max-width: 180.643px;
            height: auto;
            .button_text {
              color: ${({ theme }) => theme.COLORS.BLUE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
              font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            }
          }
        }
      }
    }
  }
`;
