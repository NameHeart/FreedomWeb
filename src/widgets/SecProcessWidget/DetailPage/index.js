import { DetailPageStyled } from "./styled";
import detailimage from "../../../../public/assets/images/detailimage.png";
import Image from "next/image";

export default function DetailPage() {
  return (
    <DetailPageStyled>
      <div className="detail_process_container">
        <div className="dt_pc_content_block">
          <div className="main_image">
            <Image className="detail_image" src={detailimage} alt="detailimage" />
          </div>
          <div className="detail_text">
            <div className="head_text">ส่งรายละเอียด</div>
            <div className="description_text">
              พัฒนาตามความต้องการของลูกค้า คุณสามารถส่งข้อมูลรายละเอียด ความสามารถของแอพหรือเว็บไซต์ รวมทั้งฟีเจอร์
              ฟังก์ชั่นของการทำงานที่คุณต้องการได้อย่างอิสระ
            </div>
          </div>
        </div>
      </div>
    </DetailPageStyled>
  );
}
