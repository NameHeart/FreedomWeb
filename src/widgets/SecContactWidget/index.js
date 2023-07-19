import maintext from "../../../public/assets/images/page5/main_text.png";
import Group from "../../../public/assets/images/page5/Group.png";
import Image from "next/image";
import mainimage from "../../../public/assets/images/page5/mainimage.png";
import merge from "../../../public/assets/images/page5/merge.png";
import broker from "../../../public/assets/images/page5/broker.png";
import fund from "../../../public/assets/images/page5/fund.png";

import { SecContactWidgetStyled } from "./styled";

const SecContactWidget = () => {
  return (
    <div id="Contact">
      <SecContactWidgetStyled>
        <div className="contact_container">
          <div className="ct_content_block">
            <div className="main_headtext">
              <Image className="main_text" src={maintext} alt="maintext" />
              <Image className="main_logo" src={Group} alt="Group" />
            </div>
            <div className="center_description">
              <Image className="main_image" src={mainimage} alt="mainimage" />
              <div className="description">
                <div className="description_font">
                  บริษัทเราได้รับความไว้วางใจ ให้ช่วยเข้ามาเติมเต็มในส่วนของด้านเทคโนโลยี เพื่อเพิ่มขีด
                  ความสามารถในการแข่งขันในโลกที่เทคโนโลยีความสำคัญต่อการพัฒนาธุรกิจ บริษัท ฟรีดอม อินโนเวชั่น เทคโนโลยี จำกัด
                  สามารถตอบโจทย์ให้กับลูกค้าทุกกลุ่มที่ อุตสาหกรรมที่มีความต้องการ นำเทคโนโลยีมาช่วยยกระดับองค์กรหรือสร้างความได้เปรียบ ในการแข่งขันเหนือคู่แข่ง
                  ทาง บริษัท ฟรีดอม อินโนเวชั่น เทคโนโลยี จำกัด ยินดีให้คำปรึกษาก่อนตัดสินใจ เพราะ เวลา ไม่เคยหยุดรอโอกาส ผู้นำ กล้าที่จะเปลี่ยนแปลง
                </div>
              </div>
            </div>
            <div className="logo_image">
              <Image className="merge_image" src={merge} alt="merge" />
              <Image className="broker_image" src={broker} alt="broker" />
              <Image className="fund_image" src={fund} alt="fund" />
            </div>
          </div>
        </div>
      </SecContactWidgetStyled>
    </div>
  );
};

export default SecContactWidget;
