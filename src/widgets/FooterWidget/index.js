import line from "../../../public/assets/images/footer/line.png";
import Image from "next/image";
import { Buttons } from "@/components";
import { FooterWidgetStyled } from "./styled";

const FooterWidget = () => {
  return (
    <FooterWidgetStyled>
      <div className="footer_container">
        <div className="ft_content_block">
          <div className="group_main">
            <div className="main_text_eng">FREEDOM INNOVATION TECHNOLOGY CO., LTD.</div>
            <div className="main_text_thai">บริษัท ฟรีดอม อินโนเวชั่น เทคโนโลยี จำกัด.</div>
            <div className="main_text_address">
              ที่อยู่ เลขที่ 5 ตำบลป่าแดด อำเภอเมือง
              <br /> จังหวัดเชียงใหม่ 50100
            </div>
            <div className="main_phone">089 5545354</div>
            <div className="main_email">freedominnotech@gmail.com</div>
            <div className="button_line">
              <Buttons.BgIconPrefix label={<p className="button_text">ADD LINE</p>} theme_green icon={<Image className="logoimage" src={line} />} />
            </div>
          </div>
          <div className="group_detail">
            <div className="group_service">
              <div className="group_service_head">บริการหลัก</div>
              <div className="group_service_list">
                <p>รับออกแบบเว็ปไซต์</p>
                <p>ออกแบบเว็ปไซต์</p>
                <p>ระบบหลังบ้าน</p>
                <p>เว็ปไซต์</p>
                <p>designweb</p>
                <p>web</p>
                <p>design</p>
              </div>
            </div>
            <div className="group_porfolio">
              <div className="group_porfolio_head">Portfolio</div>
              <div className="group_porfolio_list">
                <p>Homepage</p>
                <p>contant</p>
                <p>Process</p>
                <p>Our sevice</p>
                <p>Package</p>
                <p>Workwith</p>
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWidgetStyled>
  );
};

export default FooterWidget;
