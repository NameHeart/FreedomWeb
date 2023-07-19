import styled from "styled-components";

export const SecProfolioWidgetStyled = styled.div`
  background-image: url("/assets/images/page3/porfoliobackgroup.png");
  background-size: cover;
  position: relative;
  min-height: 100vh;
  padding: 20px;
  .profolio_container {
    max-width: 1240px;
    margin: auto;

    .pf_content_block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .main_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;

        height: auto;
        border-radius: 22px;
        .freedomtext {
          max-width: 201px;
          height: auto;
        }
        .main_text_center {
          height: 63px;
          font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
          font-size: ${({ theme }) => theme.FONT.SIZE.S42};

          color: ${({ theme }) => theme.COLORS.BLUE};
        }
        .description {
          height: auto;
          display: flex;
          justify-content: center;
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};

          color: ${({ theme }) => theme.COLORS.BLACK_2};
        }
      }

      .group_card {
        display: flex;
        justify-content: center;
        padding-top: 30px;

        .group_card_wrab {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          padding-top: 30px;
          height: auto;
          column-gap: 20px;
          row-gap: 10px;
          .card {
            width: 210.6px;
            min-height: 220px;
            display: flex;
            margin: 10px;
            justify-content: center;
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.15);
            border-radius: 20px;
          }

          .image_card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            gap: 12px;
            min-width: 100px;
            height: auto;
            padding-top: 30px;
            .card_image {
              max-width: 52px;
              height: auto;
            }
            .text_image {
              min-width: 150px;
              height: auto;
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: ${({ theme }) => theme.FONT.SIZE.S18};
              /* identical to box height */

              text-align: center;

              color: ${({ theme }) => theme.COLORS.BLACK_1};
            }
            .text_thai {
              min-width: 170px;
              height: auto;
              font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
              font-size: ${({ theme }) => theme.FONT.SIZE.S16};
              /* identical to box height */

              text-align: center;

              color: ${({ theme }) => theme.COLORS.BLACK_2};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    padding: 20px;
    min-height: 100%;
    .profolio_container {
      max-width: 830px;
      margin: auto;
      .pf_content_block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .main_text {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;

          height: auto;
          border-radius: 22px;
          .freedomtext {
            max-width: 201px;
            height: auto;
          }
          .main_text_center {
            height: 63px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
            font-size: ${({ theme }) => theme.FONT.SIZE.S42};

            color: ${({ theme }) => theme.COLORS.BLUE};
          }
          .description {
            height: auto;
            display: flex;
            justify-content: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};

            color: ${({ theme }) => theme.COLORS.BLACK_2};
          }
        }

        .group_card {
          display: flex;
          justify-content: center;
          padding-top: 30px;
          align-items: center;
          .group_card_wrab {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding-top: 20px;
            height: auto;
            .card {
              width: 175px;
              min-height: 211px;
              display: flex;
              margin: 0px;
              justify-content: center;
              background: ${({ theme }) => theme.COLORS.BLACK_WHITE};
              box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.15);
              border-radius: 20px;
            }

            .image_card {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0px;
              gap: 12px;
              min-width: 100px;
              height: auto;
              padding-top: 30px;
              .card_image {
                max-width: 52px;
                height: auto;
              }
              .text_image {
                min-width: 150px;
                height: auto;
                font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                font-size: ${({ theme }) => theme.FONT.SIZE.S18};
                /* identical to box height */

                text-align: center;

                color: ${({ theme }) => theme.COLORS.BLACK_1};
              }
              .text_thai {
                min-width: 170px;
                height: auto;
                font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
                font-size: ${({ theme }) => theme.FONT.SIZE.S16};
                /* identical to box height */

                text-align: center;

                color: ${({ theme }) => theme.COLORS.BLACK_2};
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    position: relative;
    padding: 20px;
    .profolio_container {
      max-width: 830px;
      margin: auto;
      .pf_content_block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .main_text {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;

          height: auto;
          border-radius: 22px;
          .freedomtext {
            max-width: 148px;
            height: auto;
          }
          .main_text_center {
            height: 63px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
            font-size: ${({ theme }) => theme.FONT.SIZE.S32};

            color: ${({ theme }) => theme.COLORS.BLUE};
          }
          .description {
            height: auto;
            display: flex;
            justify-content: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            max-width: 300px;

            color: ${({ theme }) => theme.COLORS.BLACK_2};
          }
        }

        .group_card {
          display: flex;
          justify-content: center;
          padding-top: 10px;
          align-items: center;
          .group_card_wrab {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding-top: 20px;
            height: auto;
            .card {
              width: 150px;
              min-height: 160px;
              display: flex;
              margin: 0px;
              justify-content: center;
              background: ${({ theme }) => theme.COLORS.BLACK_WHITE};
              box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.15);
              border-radius: 20px;
            }

            .image_card {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0px;
              gap: 12px;
              min-width: 100px;
              height: auto;
              padding-top: 30px;
              .card_image {
                max-width: 42px;
                height: auto;
              }
              .text_image {
                min-width: 150px;
                height: auto;
                font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
                font-size: ${({ theme }) => theme.FONT.SIZE.S16};
                /* identical to box height */

                text-align: center;

                color: ${({ theme }) => theme.COLORS.BLACK_1};
              }
              .text_thai {
                min-width: 170px;
                height: auto;
                font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
                font-size: ${({ theme }) => theme.FONT.SIZE.S14};
                /* identical to box height */

                text-align: center;

                color: ${({ theme }) => theme.COLORS.BLACK_2};
              }
            }
          }
        }
      }
    }
  }
`;
