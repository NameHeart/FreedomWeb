import { DetailPage3Styled } from "./styled";
import logodetail3 from "../../../../public/assets/images/page2/logodetail3.png";
import Image from "next/image";

export default function DetailPage3() {
  return (
    <DetailPage3Styled>
      <div className="detail_process_container">
        <div className="dt_pc_content_block">
          <div className="main_image">
            <Image className="detail_image" src={logodetail3} />
          </div>
          <div className="detail_text">
            <div className="head_text">กระบวนการพัฒนา</div>
            <div className="description_text">
              ทีม Design เริ่มออกแบบ จัดทำ wire frame ส่งให้ลูกค้าตรวจสอบ แก้ไขได้อย่างอิสระตามที่ลูกค้าต้องการ
              เพื่อให้ทีมพัฒนานำไปสร้างต่อส่งให้ลูกค้าทดสอบเป็นระยะ ปรับปรุงแก้ไขข้อผิดพลาดตลอดการพัฒนาให้พึงพอใจลูกค้า ด้วยการเน้นคุณภาพและมาตรฐาน
            </div>
          </div>
        </div>
      </div>
    </DetailPage3Styled>
  );
}
