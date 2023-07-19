import styled from "styled-components";

export const SecHomeWidgetStyled = styled.div`
  position: relative;
  background: #f9feff;
  padding: 70px;
  min-height: calc(100vh - 90px - 140px);
  .homepage_container {
    .hp_content_block {
      display: flex;
      column-gap: 70px;
      .logomain {
        .logoimage {
          max-width: 270px;
          height: auto;
        }
      }
      .main_text {
        padding-top: 40px;
        .main_description {
          max-width: 560px;
          padding-top: 20px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S28};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
        }
        .text_description {
          max-width: 375px;
          padding-top: 20px;
          font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          font-size: ${({ theme }) => theme.FONT.SIZE.S23};
          line-height: 36px;
        }
        .text_phone {
          padding-top: 20px;
          font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          font-size: ${({ theme }) => theme.FONT.SIZE.S28};
          line-height: 42px;
          color: ${({ theme }) => theme.COLORS.BLUE};
        }
        .btn_line {
          padding-top: 30px;
          .logoaddline {
            max-width: 37.337px;
            height: 34px;
          }
          .button_text {
            color: ${({ theme }) => theme.COLORS.BLUE};
            text-align: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
          }
        }
      }
    }
  }
  .hp_bg {
    position: absolute;
    right: 0px;
    bottom: 0px;
    max-width: 600px;
    height: auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    position: relative;
    padding: 45px;
    .homepage_container {
      .hp_content_block {
        display: flex;
        column-gap: 30px;
        .logomain {
          .logoimage {
            max-width: 190px;
            height: auto;
          }
        }
        .main_text {
          padding-top: 40px;
          .logofreedomimage {
            max-width: 413px;
            height: auto;
          }
          .main_description {
            max-width: 560px;
            padding-top: 20px;
            font-size: ${({ theme }) => theme.FONT.SIZE.S28};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .text_description {
            max-width: 375px;
            padding-top: 20px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S23};
            line-height: 36px;
          }
          .text_phone {
            padding-top: 20px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            font-size: ${({ theme }) => theme.FONT.SIZE.S28};
            line-height: 42px;
            color: ${({ theme }) => theme.COLORS.BLUE};
          }
          .btn_line {
            padding-top: 30px;
            .logoaddline {
              max-width: 37.337px;
              height: 34px;
            }
            .button_text {
              color: ${({ theme }) => theme.COLORS.BLUE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
              font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            }
          }
        }
      }
    }
    .hp_bg {
      display: none;
      position: absolute;
      right: 0px;
      bottom: 0px;
      max-width: 327px;
      height: auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    position: relative;
    padding: 10px;
    min-height: calc(100vh - 90px - 140px);
    .homepage_container {
      .hp_content_block {
        display: flex;
        column-gap: 15px;
        .logomain {
          .logoimage {
            display: none;
            max-width: 270px;
            height: auto;
          }
        }
        .main_text {
          padding-top: 20px;
          .logofreedomimage {
            max-width: 300px;
            height: auto;
          }

          .main_description {
            max-width: 560px;
            padding-top: 20px;
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .text_description {
            max-width: 375px;
            padding-top: 20px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            line-height: 36px;
          }
          .text_phone {
            padding-top: 20px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            line-height: 42px;
            color: ${({ theme }) => theme.COLORS.BLUE};
          }
          .btn_line {
            padding-top: 30px;
            .logoaddline {
              max-width: 23px;
              height: 20px;
            }
            .button_text {
              color: ${({ theme }) => theme.COLORS.BLUE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
              font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            }
          }
        }
      }
    }
    .hp_bg {
      display: flex;
      position: relative;
      left: 50%;
      right: 0px;
      bottom: 0px;
      max-width: 200px;
      height: auto;
    }
  }
`;
