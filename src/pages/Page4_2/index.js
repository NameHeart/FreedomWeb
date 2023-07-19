import { Page4_2Styled } from "./styled";
import page4main2 from "../../../public/assets/images/page4/page4main2.png";
import logotext from "../../../public/assets/images/page4/logotext.png";
import Image from "next/image";
import { Buttons } from "@/components";

export default function Page4_2() {
  return (
    <Page4_2Styled>
      <div className="main">
        <div className="image_main">
          <Image className="main_image" src={page4main2} />
        </div>
        <div className="main_text">
          <div className="logo_text">
            <Image className="main_image" src={logotext} />
            <div className="head_text">
              <div>รับทำ SEO</div>
            </div>
          </div>
          <div className="description_text">
            <div className="description_text_font">
              เรามีบริการรับทำ SEO โดยมืออาชีพมากกว่า 10 ปี
              <br /> เราทำ SEO แบบสายขาว คือหากติดหน้าแรกแล้ว
              <br /> ส่วนมากจะติดถาวร เพราะเราเพิ่ม
              <br /> Backlink ที่มีคุณภาพจำนวนมาก
              <br /> รวมทั้งการแก้ไขเนื้อหาบนเว็บไซต์ของท่าน
              <br /> ให้ถูกต้องตามที่ Search Engine ชอบ
            </div>
          </div>
          <div className="group_button">
            <div className="button_text">ราคา 30,XXX</div>
            <div className="button">
              <Buttons.BgStandard theme_line label="ติดต่อสอบถาม" />
            </div>
          </div>
        </div>
      </div>
    </Page4_2Styled>
  );
}
