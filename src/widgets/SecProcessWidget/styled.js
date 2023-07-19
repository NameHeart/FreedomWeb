import styled from "styled-components";

export const AaPlatformStyled = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 25px;
  .process_container {
    max-width: 1440px;
    margin: auto;
    .pc_content_block {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      .main_text {
        padding-top: 30px;
        height: auto;
        font-size: ${({ theme }) => theme.FONT.SIZE.S34};
        line-height: 51px;
        /* identical to box height */
        text-align: center;
        font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
        color: ${({ theme }) => theme.COLORS.BLUE};
      }

      .toptap {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        min-height: 120px;
        column-gap: 5px;
        .tabs {
          min-width: 280px;
          height: auto;
          border: none;
          border-radius: 22px 22px 0px 0px;

          .card_toptap {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .image_toptap {
              max-width: 49.5px;
              height: auto;
              opacity: 0.5;
            }
            .text_image {
              display: flex;
              justify-content: space-between;
              height: 27px;

              .Rectangle {
                width: 35px;
                height: 35px;
                opacity: 0.499999988079071;
                mix-blend-mode: luminosity;
                filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.1));
              }
              .text_image_font {
                font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                font-size: ${({ theme }) => theme.FONT.SIZE.S22};
                line-height: 33px;
                padding-left: 10px;
                color: #979797;
              }
            }
          }
        }
        .tabs:not(:last-child) {
          border-right: 1px solid rgba(0, 0, 0, 0.274);
        }

        .active-tabs {
          border-bottom: 1px solid transparent;
          background: ${({ theme }) => theme.COLORS.BLUE};
          border: none;
          border-radius: 22px 22px 0 0;
          .card_toptap {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .image_toptap {
              max-width: 49.5px;
              height: auto;
              opacity: 5;
            }
            .text_image {
              display: flex;
              justify-content: space-between;
              height: 27px;

              .Rectangle {
                width: 35px;
                height: 35px;
                filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.1));
                opacity: 5;
              }
              .text_image_font {
                font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                font-size: ${({ theme }) => theme.FONT.SIZE.S22};
                line-height: 33px;
                padding-left: 10px;
                color: ${({ theme }) => theme.COLORS.WHITE};
              }
            }
          }
        }
      }
      .content {
        background: white;
        padding: 20px;
        max-width: 100%;
        height: auto;
        display: none;
      }

      .active-content {
        display: block;
      }
    }
  }
  .process_container_mobile {
    display: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    padding: 20px;
    min-height: 100%;
    .process_container {
      max-width: 840px;
      .pc_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .main_text {
          padding-top: 30px;
          height: auto;
          font-size: ${({ theme }) => theme.FONT.SIZE.S30};
          line-height: 51px;
          /* identical to box height */
          text-align: center;
          font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          color: ${({ theme }) => theme.COLORS.BLUE};
        }

        .toptap {
          display: flex;
          justify-content: center;
          padding-top: 50px;
          max-height: 150px;

          .tabs {
            max-height: 80px;
            min-width: 186px;
            border: none;
            border-radius: 22px 22px 0px 0px;

            .card_toptap {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .image_toptap {
                display: none;
                max-width: 49.5px;
                height: auto;
                opacity: 0.5;
              }
              .text_image {
                display: flex;
                justify-content: space-between;
                height: 27px;

                .Rectangle {
                  width: 35px;
                  height: 35px;
                  opacity: 0.499999988079071;
                  mix-blend-mode: luminosity;
                  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.1));
                }
                .text_image_font {
                  font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                  font-size: ${({ theme }) => theme.FONT.SIZE.S18};
                  line-height: 33px;
                  padding-left: 10px;
                  color: #979797;
                }
              }
            }
          }
          .tabs:not(:last-child) {
            border-right: 1px solid rgba(0, 0, 0, 0.274);
          }

          .active-tabs {
            border-bottom: 1px solid transparent;
            background: ${({ theme }) => theme.COLORS.BLUE};
            border: none;
            border-radius: 22px 22px 0 0;
            .card_toptap {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .image_toptap {
                max-width: 49.5px;
                height: auto;
                opacity: 5;
              }
              .text_image {
                display: flex;
                justify-content: space-between;
                height: 27px;

                .Rectangle {
                  width: 35px;
                  height: 35px;
                  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.1));
                  opacity: 5;
                }
                .text_image_font {
                  font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                  font-size: ${({ theme }) => theme.FONT.SIZE.S18};
                  line-height: 33px;
                  padding-left: 10px;
                  color: ${({ theme }) => theme.COLORS.WHITE};
                }
              }
            }
          }
        }
        .content {
          background: white;
          padding: 20px;
          max-width: 100%;
          height: auto;
          display: none;
        }

        .active-content {
          display: block;
        }
      }
    }
    .process_container_mobile {
      display: none;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    padding: 20px;
    .process_container {
      display: none;
    }
    .process_container_mobile {
      display: flex;
      max-width: 350px;
      margin: auto;
      .pc_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        .main_text {
          padding-top: 30px;
          height: auto;
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};
          line-height: 51px;
          /* identical to box height */
          text-align: center;
          font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          color: ${({ theme }) => theme.COLORS.BLUE};
        }

        .toptap {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          padding-top: 50px;
          min-height: 120px;
          .card {
            min-width: 280px;
            height: auto;

            .card_toptap {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border: 2px;
              border-style: solid;
              border-color: #67c0df #2277be #215aa6 #7bcee4;
              background: #f3f3f3;
              border-radius: 22.5px;
              max-width: 333px;
              height: 45px;

              .image_toptap {
                max-width: 49.5px;
                height: auto;
                opacity: 0.50000001192092896;
              }
              .text_image {
                display: flex;
                justify-content: space-between;
                height: 27px;

                .Rectangle {
                  box-sizing: border-box;
                  max-width: 30px;
                  height: auto;
                }
                .text_image_font {
                  font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                  font-size: ${({ theme }) => theme.FONT.SIZE.S16};
                  line-height: 33px;
                  padding-left: 10px;
                  color: ${({ theme }) => theme.COLORS.BLUE};
                }
              }
            }
          }
        }
        .page_detail {
          position: relative;
        }
      }
    }
  }
`;
