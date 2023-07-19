import styled from "styled-components";

export const SecServiceWidgetStyled = styled.div`
  position: relative;
  background-image: url("/assets/images/page1/servicebackgroup.png");
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
  .service_container {
    max-width: 1400px;
    margin: auto;
    .sv_content_block {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .main_text {
        .text_style {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 22px 20px 28px;
          gap: 2px;

          max-width: 442px;
          height: auto;

          border-radius: 22px;

          .group_text {
            display: flex;
            flex-direction: row;
            padding: 0px;
            gap: 18px;

            max-width: 410px;
            height: 57px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: 38px;
            line-height: 57px;
            /* identical to box height */

            color: #349ed2;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;
            .text1 {
              max-width: 72px;
              height: 57px;

              font-style: normal;
              font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
              line-height: 57px;
              /* identical to box height */

              color: #1f4394;
            }
          }
          .text2 {
            height: 48px;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: 32px;
            line-height: 48px;
            /* identical to box height */

            color: #7a7a7a;

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;
          }
        }
      }

      .group_card {
        display: flex;
        column-gap: 20px;
        padding: 20px;
        .card {
          width: 354px;
          height: 345px;
          background: ${({ theme }) => theme.COLORS.WHITE};
          box-shadow: 0px 0px 10px 1px rgba(25, 71, 151, 0.25);
          border-radius: 22px;
        }

        .image_card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .codingimage {
            display: flex;
            justify-content: center;
            padding-top: 30px;
            max-width: 52px;
            height: 52px;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .text_image {
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            color: ${({ theme }) => theme.COLORS.BLACK_1};
          }
        }
        .text_eng {
          font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          line-height: 27px;
          /* identical to box height */

          text-align: center;

          color: ${({ theme }) => theme.COLORS.GRAY_1};
        }
        .text_description {
          height: 72px;
          max-width: 350px;
          padding-top: 25px;
          text-align: center;
          font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};

          color: ${({ theme }) => theme.COLORS.BLACK_2};
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    min-height: 100%;
    .service_container {
      .sv_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .main_text {
          .text_style {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 22px 20px 28px;
            gap: 2px;

            max-width: 442px;
            height: auto;

            border-radius: 22px;

            .group_text {
              display: flex;
              flex-direction: row;
              padding: 0px;
              gap: 18px;

              width: 410px;
              height: 57px;
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: 38px;
              line-height: 57px;
              /* identical to box height */

              color: #349ed2;

              .text1 {
                width: 72px;
                height: 57px;

                font-style: normal;
                font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
                line-height: 57px;
                /* identical to box height */

                color: #1f4394;
              }
            }
            .text2 {
              height: 48px;
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: 32px;
              line-height: 48px;
              /* identical to box height */

              color: #7a7a7a;

              /* Inside auto layout */

              flex: none;
              order: 1;
              flex-grow: 0;
            }
          }
        }

        .group_card {
          display: flex;
          column-gap: 20px;
          padding: 15px;
          .card {
            width: 235px;
            height: 355px;
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 0px 10px 1px rgba(25, 71, 151, 0.25);
            border-radius: 22px;
          }

          .image_card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .codingimage {
              display: flex;
              justify-content: center;
              padding-top: 30px;
              max-width: 52px;
              height: 52px;

              /* Inside auto layout */

              flex: none;
              order: 0;
              flex-grow: 0;
            }
            .text_image {
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: ${({ theme }) => theme.FONT.SIZE.S20};
              color: ${({ theme }) => theme.COLORS.BLACK_1};
            }
          }
          .text_eng {
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            line-height: 27px;
            /* identical to box height */

            text-align: center;

            color: ${({ theme }) => theme.COLORS.GRAY_1};
          }
          .text_description {
            height: 72px;
            max-width: 190.304px;
            padding-top: 25px;
            text-align: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};

            color: ${({ theme }) => theme.COLORS.BLACK_2};
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    padding: 10px;
    .service_container {
      .sv_content_block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .main_text {
          .text_style {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 22px 20px 28px;
            gap: 0px;

            max-width: 300px;
            height: auto;

            border-radius: 22px;

            .group_text {
              display: flex;
              flex-direction: row;

              padding: 0px;
              gap: 1px;

              max-width: 250px;
              height: auto;
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: 22px;
              line-height: 57px;
              /* identical to box height */

              color: #349ed2;

              /* Inside auto layout */

              .text1 {
                max-width: 72px;
                height: 57px;

                font-style: normal;
                font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
                line-height: 57px;
                /* identical to box height */

                color: #1f4394;
              }
            }
            .text2 {
              height: auto;
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: 22px;
              line-height: 38px;
              /* identical to box height */

              color: #7a7a7a;

              /* Inside auto layout */

              flex: none;
              order: 1;
              flex-grow: 0;
            }
          }
        }

        .group_card {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          padding: 10px;
          gap: 15px;
          .card {
            width: 300px;
            height: 200px;
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 0px 10px 1px rgba(25, 71, 151, 0.25);
            border-radius: 22px;
          }

          .image_card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .codingimage {
              display: flex;
              justify-content: center;
              padding-top: 10px;
              max-width: 52px;
              height: 52px;
            }
            .text_image {
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
              font-size: ${({ theme }) => theme.FONT.SIZE.S16};
              color: ${({ theme }) => theme.COLORS.BLACK_1};
            }
          }
          .text_eng {
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            line-height: 27px;
            /* identical to box height */

            text-align: center;

            color: ${({ theme }) => theme.COLORS.GRAY_1};
          }
          .text_description {
            height: 72px;
            max-width: 250px;
            padding-top: 10px;
            text-align: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};

            color: ${({ theme }) => theme.COLORS.BLACK_2};
          }
        }
      }
    }
  }
`;
