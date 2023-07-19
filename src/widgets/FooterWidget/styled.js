import styled from "styled-components";

export const FooterWidgetStyled = styled.div`
  position: relative;
  padding: 40px;
  background: #15213a;
  .footer_container {
    max-width: 1440px;
    margin: auto;
    background: #15213a;
    .ft_content_block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .group_main {
        padding-top: 30px;
        .main_text_eng {
          color: ${({ theme }) => theme.COLORS.YELLOW_1};
          font-size: ${({ theme }) => theme.FONT.SIZE.S22};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
        }
        .main_text_thai {
          color: ${({ theme }) => theme.COLORS.YELLOW_1};
          font-size: ${({ theme }) => theme.FONT.SIZE.S22};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
        }
        .main_text_address {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
        }
        .main_phone {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S26};
          font-family: Kanit;
          font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          padding-top: 10px;
        }
        .main_email {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
          font-weight: 300;
          padding-top: 10px;
        }
        .button_line {
          display: inline-flex;
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          justify-content: center;
          align-items: center;
          padding-top: 10px;
          .button_text {
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: center;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
          }
        }
      }
      .group_detail {
        display: flex;
        column-gap: 20px;
        .group_service {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 30px;
          .group_service_head {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_service_list {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
        .group_porfolio {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 30px;

          .group_porfolio_head {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_porfolio_list {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    position: relative;
    padding: 20px;
    background: #15213a;

    .footer_container {
      .ft_content_block {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .group_main {
          padding-top: 30px;
          .main_text_eng {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_text_thai {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_text_address {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_phone {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S26};
            font-family: Kanit;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            padding-top: 10px;
          }
          .main_email {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            font-weight: 300;
            padding-top: 10px;
          }
          .button_line {
            display: inline-flex;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            .button_text {
              color: ${({ theme }) => theme.COLORS.WHITE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            }
          }
        }
        .group_service {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 30px;
          .group_service_head {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_service_list {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
        .group_porfolio {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 30px;

          .group_porfolio_head {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_porfolio_list {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    padding: 20px;

    .footer_container {
      .ft_content_block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .group_main {
          padding-top: 10px;
          .main_text_eng {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_text_thai {
            color: ${({ theme }) => theme.COLORS.YELLOW_1};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_text_address {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            padding-top: 10px;
          }
          .main_phone {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            font-family: Kanit;
            font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            padding-top: 10px;
          }
          .main_email {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            padding-top: 10px;
          }
          .button_line {
            display: inline-flex;
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            .button_text {
              color: ${({ theme }) => theme.COLORS.WHITE};
              text-align: center;
              font-weight: ${({ theme }) => theme.FONT.STYLE.MEDIUM};
            }
          }
        }
        .group_detail {
          display: flex;
          justify-content: flex-start;
          column-gap: 20px;
          padding-right: 10px;
          .group_service {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 20px;
            .group_service_head {
              color: ${({ theme }) => theme.COLORS.YELLOW_1};
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            }
            .group_service_list {
              color: ${({ theme }) => theme.COLORS.WHITE};
              font-size: ${({ theme }) => theme.FONT.SIZE.S12};
              font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
              line-height: 15px;
            }
          }
          .group_porfolio {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 20px;

            .group_porfolio_head {
              color: ${({ theme }) => theme.COLORS.YELLOW_1};
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            }
            .group_porfolio_list {
              color: ${({ theme }) => theme.COLORS.WHITE};
              font-size: ${({ theme }) => theme.FONT.SIZE.S12};
              font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
              line-height: 15px;
            }
          }
        }
      }
    }
  }
`;
