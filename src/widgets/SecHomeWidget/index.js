import Logomain from "../../../public/assets/images/homepage/Logomian.png";
import Freedominnovation from "../../../public/assets/images/homepage/Freedominnovation.png";
import Image from "next/image";
import imagephone from "../../../public/assets/images/homepage/imagephone.png";
import logoaddline from "../../../public/assets/images/homepage/logoaddline.png";
import { Buttons } from "@/components";
import { SecHomeWidgetStyled } from "./styled";

const SecHomeWidget = () => {
  return (
    <div id="Home">
      <SecHomeWidgetStyled>
        <div className="homepage_container">
          <div className="hp_content_block">
            <div className="logomain">
              <Image className="logoimage" src={Logomain} />
            </div>
            <div className="main_text">
              <Image className="logofreedomimage" src={Freedominnovation} />
              <div className="main_description">
                ยกระดับธุรกิจ ด้วยเทคโนโลยีที่ทันสมัย
                <br /> แนวคิดที่ก้าวไกล อิสระสร้างได้ด้วยตัวคุณเอง
              </div>
              <div className="text_description">รับทำแอปพลิเคชัน, รับทำเว็บไซต์ รับทำเว็บแอปพลิเคชัน, ออกแบบ ux/ui</div>
              <div className="text_phone">064-578-6898</div>
              <div className="btn_line">
                <div>
                  <Buttons.BgIconPrefix label={<p className="button_text">ADD LINE</p>} theme_line icon={<Image className="logoaddline" src={logoaddline} />} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image className="hp_bg" src={imagephone} />
      </SecHomeWidgetStyled>
    </div>
  );
};

export default SecHomeWidget;
