import page4main from "../../../public/assets/images/page4/page4main.png";
import logotext from "../../../public/assets/images/page4/logotext.png";
import Image from "next/image";
import { Buttons } from "@/components";
import { SecAboutWidgetStyled } from "./styled";

const SecAboutWidget = () => {
  return (
    <div className="About" id="About">
      <SecAboutWidgetStyled>
        <div className="about_container">
          <div className="ab_content_block">
            <div className="image_main">
              <Image className="main_image" src={page4main} />
            </div>
            <div className="main_text">
              <div className="logo_text">
                <Image className="logo_image" src={logotext} />
                <div className="head_text">
                  <div>E-COMMERCE PACKAGE</div>
                </div>
              </div>
              <div className="description_text">
                <div className="description_text_font">
                  1.ออกแบบเว็บไซต์ให้สามารถสั่งซื้อสินค้าออนไลน์ได้
                  <br />
                  &nbsp; - หน้าหลัก (Home)
                  <br />
                  &nbsp; - เกี่ยวกับเรา (About)
                  <br />
                  &nbsp; - สินค้า (Products)
                  <br />
                  &nbsp; - ข่าวสารและโปรโมชั่น (News & Promotion)
                  <br />
                  &nbsp; - ขั้นตอนการสั่งซื้อ (How to Buy)
                  <br />
                  &nbsp; - ติดต่อเรา (Contact Us)
                  <br /> 2. ระบบจัดการหลังร้าน
                  <br />
                  &nbsp; - ระบบจัดการแบนเนอร์สไลด์หน้าแรก
                  <br />
                  &nbsp; - ระบบจัดการข่าวสารและโปรโมชั่นได้
                  <br />
                  &nbsp; - ระบบจัดการสมาชิก และสินค้า
                  <br />
                  &nbsp; - ระบบชำระเงินแบบแจ้งโอนและตัดบัตรเครดิต
                  <br />
                  &nbsp; - ระบบตรวจสอบสถิติคนเข้าชม
                  <br />
                  3. จดโดเมน .com , .org , .net และอีเมล์โฮสติ้ง 10GB
                </div>
              </div>
              <div className="group_button">
                <div className="button_text">ราคา 20,XXX</div>
                <div className="button">
                  <Buttons.BgIconPrefix theme_about label={<p className="button_text">ติดต่อสอบถาม</p>} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecAboutWidgetStyled>
    </div>
  );
};

export default SecAboutWidget;
