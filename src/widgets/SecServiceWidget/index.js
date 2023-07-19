import Coding from "../../../public/assets/images/page1/coding 1.png";
import computer from "../../../public/assets/images/page1/computer 1.png";
import Image from "next/image";
import ux from "../../../public/assets/images/page1/ux 1.png";
import { SecServiceWidgetStyled } from "./styled";

const SecServiceWidget = () => {
  return (
    <div className="Service" id="Service">
      <SecServiceWidgetStyled>
        <div className="service_container">
          <div className="sv_content_block">
            <div className="main_text">
              <div className="text_style">
                <div className="group_text">
                  <div className="text1">เวลา</div>
                  <div>ไม่เคยหยุดรอโอกาส</div>
                </div>
                <div className="text2">ผู้นำกล้าที่จะเปลี่ยนแปลง</div>
              </div>
            </div>
            <div className="group_card">
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="image_card">
                  <Image className="codingimage" src={Coding} alt="Coding" />
                  <div className="text_image">รับทำเว็บแอปพลิเคชัน</div>
                  <div className="text_eng">MOBILE APP NATIVE / CROSS PLATFORM</div>
                  <div className="text_description">เริ่มต้นธุรกิจของคุณง่ายๆ ด้วยการทำแอปพลิเคชัน สร้าง Platform รองรับตลาดเทคโนโลยี</div>
                </div>
              </a>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="image_card">
                  <Image className="codingimage" src={computer} alt="computer" />
                  <div className="text_image">รับทำเว็บไซต์</div>
                  <div className="text_eng">WEBSITE / WEB APP</div>
                  <div className="text_description">
                    ทำเว็บไซต์เป็นหน้าร้านช่องทาง <br /> การขายได้ 24 ชั่วโมง <br /> หรือเป็นตัวแทนในการสื่อสารแบรนด์ของคุณ
                  </div>{" "}
                </div>
              </a>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="image_card">
                  <Image className="codingimage" src={ux} alt="ux" />
                  <div className="text_image">ออกแบบ UX / UI</div>
                  <div className="text_eng">User Experience / User Interface</div>
                  <div className="text_description">
                    เปลี่ยนไอเดียให้เป็นภาพในแบบที่คุณต้อง
                    <br />
                    การด้วยการออกแบบ Graphic Design
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </SecServiceWidgetStyled>
    </div>
  );
};

export default SecServiceWidget;
