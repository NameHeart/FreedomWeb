import { DetailPage4Styled } from "./styled";
import logodetail4 from "../../../../public/assets/images/page2/logodetail4.png";
import Image from "next/image";

export default function DetailPage4() {
  return (
    <DetailPage4Styled>
      <div className="detail_process_container">
        <div className="dt_pc_content_block">
          <div className="main_image">
            <Image className="detail_image" src={logodetail4} alt="logodetail4" />
          </div>
          <div className="detail_text">
            <div className="head_text">การเปิดใช้งาน</div>
            <div className="description_text">
              เมื่อเปิดใช้งานอย่างเป็นทางการ บริษัทดูแลหลังการขายตลอดระยะเวลา 1 ปี หลังจากการให้บริการ มีทีมงานคอยดูแลแก้ไขปัญหาให้อยู่เสมอ ตรวจสอบ
              แก้ไขข้อผิดพลาดที่เกิดขึ้น
            </div>
          </div>
        </div>
      </div>
    </DetailPage4Styled>
  );
}
