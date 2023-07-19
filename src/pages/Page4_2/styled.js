import styled from "styled-components";

export const Page4_2Styled = styled.div`
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .image_main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 271px;
      margin: 250px;
      .main_image {
        width: 629px;
        height: 553px;
      }
    }
    .main_text {
      height: 516px;

      .logo_text {
        display: inline-flex;
        align-items: center;
        gap: 14px;
      }
      .head_text {
        color: #2269b2;
        font-size: 26px;
        font-family: Kanit;
        font-weight: 500;
      }
      .description_text {
        left: 20px;
        display: flex;
        width: 344px;
        height: 353px;
        flex-direction: column;
        flex-shrink: 0;
        .description_text_font {
          color: #4d4d4d;
          font-size: 16px;
          font-family: Kanit;
          font-weight: 600;
        }
      }
    }
    .group_button {
      left: 982px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      .button_text {
        display: flex;
        justify-content: center;
        color: #2275bb;
        font-size: 18px;
        font-family: Kanit;
        font-weight: bold;
      }
      .button {
        top: 35px;
        width: 180.643px;
        height: 50px;
        flex-shrink: 0;
      }
    }
  }
`;
