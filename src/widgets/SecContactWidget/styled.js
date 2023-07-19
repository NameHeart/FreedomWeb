import styled from "styled-components";

export const SecContactWidgetStyled = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 25px;
  .contact_container {
    max-width: 1440px;
    margin: auto;
    .ct_content_block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .main_headtext {
        display: flex;
        justify-content: space-around;
        .main_text {
          max-width: 629.724px;
          height: auto;
          padding: 60px;
        }
        .main_logo {
          max-width: 384px;
          max-height: 80px;
          padding: 30px;
        }
      }
      .center_description {
        display: flex;
        justify-content: center;
        align-items: center;
        .main_image {
          max-width: 425px;
          height: auto;

          padding: 50px;
        }
        .description {
          display: flex;
          max-width: 680px;
          height: auto;
          flex-direction: column;

          .description_font {
            color: ${({ theme }) => theme.COLORS.BLACK_2};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            letter-spacing: 0.36px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
        }
      }
      .logo_image {
        display: flex;
        justify-content: space-around;
        column-gap: 100px;
        padding: 50px;
        .merge_image {
          max-width: 286px;
          height: auto;
        }
        .broker_image {
          max-width: 210.8px;
          height: auto;
        }
        .fund_image {
          max-width: 210.8px;
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    padding: 25px;
    min-height: 100%;
    .contact_container {
      .ct_content_block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .main_headtext {
          display: flex;
          justify-content: space-around;
          .main_text {
            max-width: 600px;
            height: auto;
            padding: 30px;
          }
          .main_logo {
            display: none;
            max-width: 0px;
            max-height: 0px;
            padding: 0px;
          }
        }
        .center_description {
          display: flex;
          justify-content: center;
          align-items: center;
          .main_image {
            max-width: 300px;
            height: auto;

            padding: 15px;
          }
          .description {
            display: flex;
            max-width: 428px;
            height: auto;
            flex-direction: column;

            .description_font {
              color: ${({ theme }) => theme.COLORS.BLACK_2};
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            }
          }
        }
        .logo_image {
          display: flex;
          justify-content: space-evenly;
          padding: 20px;
          column-gap: 15px;
          .merge_image {
            max-width: 210px;
            height: auto;
          }
          .broker_image {
            max-width: 170px;
            height: auto;
          }
          .fund_image {
            max-width: 210px;
            height: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    padding: 10px;
    .contact_container {
      .ct_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        .main_headtext {
          display: flex;
          justify-content: space-around;
          .main_text {
            max-width: 300px;
            height: auto;
            padding: 30px;
          }
          .main_logo {
            display: none;
            max-width: 0px;
            max-height: 0px;
            padding: 0px;
          }
        }
        .center_description {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .main_image {
            max-width: 330px;
            height: auto;

            padding: 15px;
          }
          .description {
            display: flex;
            max-width: 330px;
            height: auto;
            flex-direction: column;

            .description_font {
              color: ${({ theme }) => theme.COLORS.BLACK_2};
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            }
          }
        }
        .logo_image {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          column-gap: 15px;
          row-gap: 10px;
          .merge_image {
            max-width: 270px;
            height: auto;
          }
          .broker_image {
            max-width: 230px;
            height: auto;
          }
          .fund_image {
            max-width: 270px;
            height: auto;
          }
        }
      }
    }
  }
`;
