import styled from "styled-components";

export const SecPartnerWidgetStyled = styled.div`
  position: relative;
  min-height: 100vh;

  .partner_container {
    max-width: 1440px;
    margin: auto;
    .pn_content_block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .head_text {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: ${({ theme }) => theme.FONT.SIZE.S36};
        font-weight: ${({ theme }) => theme.FONT.STYLE.BOLD};
      }
      .top_logo {
        padding-top: 62px;
        display: flex;
        justify-content: space-around;
        column-gap: 100px;
        .maejo_image {
          max-width: 170px;
          height: auto;
        }
        .fund_image {
          max-width: 170px;
          height: auto;
        }

        .nia_image {
          max-width: 170px;
          height: auto;
        }
      }
      .button_logo {
        display: flex;
        justify-content: space-between;
        column-gap: 100px;
        padding-top: 62px;
        .tpqi_image {
          max-width: 170px;
          height: auto;
        }
        .broker_image {
          max-width: 170px;
          height: auto;
        }
        .startup_image {
          max-width: 170px;
          height: auto;
        }
        .university_image {
          max-width: 170px;
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    min-height: 100%;
    padding-bottom: 50px;
    .partner_container {
      .pn_content_block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .head_text {
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S32};
          font-weight: ${({ theme }) => theme.FONT.STYLE.BOLD};
        }
        .top_logo {
          padding-top: 62px;
          display: flex;
          justify-content: center;
          column-gap: 50px;
          .maejo_image {
            max-width: 150px;
            height: auto;
          }
          .fund_image {
            max-width: 150px;
            height: auto;
          }

          .nia_image {
            max-width: 150px;
            height: auto;
          }
        }
        .button_logo {
          display: flex;
          justify-content: center;
          column-gap: 50px;
          padding-top: 62px;
          .tpqi_image {
            max-width: 150px;
            height: auto;
          }
          .broker_image {
            max-width: 150px;
            height: auto;
          }
          .startup_image {
            max-width: 150px;
            height: auto;
          }
          .university_image {
            max-width: 150px;
            height: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    position: relative;
    min-height: 100vh;
    .partner_container {
      .pn_content_block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .head_text {
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S22};
          font-weight: ${({ theme }) => theme.FONT.STYLE.BOLD};
        }
        .top_logo {
          padding-top: 20px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          row-gap: 10px;
          .maejo_image {
            max-width: 150px;
            height: auto;
          }
          .fund_image {
            max-width: 150px;
            height: auto;
          }

          .nia_image {
            max-width: 150px;
            height: auto;
          }
        }
        .button_logo {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          padding-top: 20px;
          row-gap: 20px;
          .tpqi_image {
            max-width: 150px;
            height: auto;
          }
          .broker_image {
            max-width: 150px;
            height: auto;
          }
          .startup_image {
            max-width: 150px;
            height: auto;
          }
          .university_image {
            max-width: 150px;
            height: auto;
          }
        }
      }
    }
  }
`;
