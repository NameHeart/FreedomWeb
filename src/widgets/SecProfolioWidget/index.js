import maid from "../../../public/assets/images/page3/maid.png";
import Orderservice from "../../../public/assets/images/page3/Orderservice.png";
import Image from "next/image";
import parttime from "../../../public/assets/images/page3/parttime.png";
import FREEDOM from "../../../public/assets/images/page3/FREEDOM.png";
import driver from "../../../public/assets/images/page3/driver.png";
import shopping from "../../../public/assets/images/page3/shopping.png";
import learning from "../../../public/assets/images/page3/learning.png";
import laundry from "../../../public/assets/images/page3/laundry.png";
import deliverly from "../../../public/assets/images/page3/laundry.png";
import ecommerce from "../../../public/assets/images/page3/e-commerce.png";
import CRMAdmin from "../../../public/assets/images/page3/CRMAdmin.png";
import { SecProfolioWidgetStyled } from "./styled";

const SecProfolioWidget = () => {
  return (
    <div id="Profolio">
      <SecProfolioWidgetStyled>
        <div className="profolio_container">
          <div className="pf_content_block">
            <div className="main_text">
              <Image className="freedomtext" src={FREEDOM} />
              <div className="main_text_center">OUR SERVICE</div>
              <div className="description">คุณคิด เราทำ พัฒนาความต้องการที่อิสระของคุณ สร้างสรรสิ่งใหม่เพื่ออนาคตที่ไม่เหมือนเดิม</div>
            </div>
            <div className="group_card">
              <div className="group_card_wrab">
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={maid} />
                    <div className="text_image">Maid service</div>
                    <div className="text_thai">ระบบบริการเรียกแม่บ้าน</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={parttime} />
                    <div className="text_image">Part time service</div>
                    <div className="text_thai">
                      ระบบบริการ <br />
                      เรียกพนักงานทดแทน
                    </div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={driver} />
                    <div className="text_image">Driver service</div>
                    <div className="text_thai">ระบบบริการเรียกคนขับรถ</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={shopping} />
                    <div className="text_image">Shopping online</div>
                    <div className="text_thai">ระบบร้านค้าออนไลน์</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={learning} />
                    <div className="text_image">E-learning </div>
                    <div className="text_thai">ระบบการเรียนออนไลน์</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={Orderservice} />
                    <div className="text_image">Maid service</div>
                    <div className="text_thai">ระบบบริการเรียกแม่บ้าน</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={laundry} />
                    <div className="text_image">Laundry service</div>
                    <div className="text_thai">ระบบร้านซักผ้า</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={deliverly} />
                    <div className="text_image">Food Deliverly</div>
                    <div className="text_thai">ระบบส่งอาหารเดลิเวอรี่</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={ecommerce} />
                    <div className="text_image">E COMMERCE</div>
                    <div className="text_thai">หน้าร้านค้าออนไลน์</div>
                  </div>
                </a>
                <a href="/" className="card" target="_blank" rel="noopener noreferrer">
                  <div className="image_card">
                    <Image className="card_image" src={CRMAdmin} />
                    <div className="text_image">CRM</div>
                    <div className="text_thai">ระบบแอดมินเพจ</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SecProfolioWidgetStyled>
    </div>
  );
};

export default SecProfolioWidget;
