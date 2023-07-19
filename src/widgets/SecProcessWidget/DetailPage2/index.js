import { DetailPage2Styled } from "./styled";
import logodetail2 from "../../../../public/assets/images/page2/logodetail2.png";
import Image from "next/image";

export default function DetailPage2() {
  return (
    <DetailPage2Styled>
      <div className="detail_process_container">
        <div className="dt_pc_content_block">
          <div className="main_image">
            <Image className="detail_image" src={logodetail2} alt="logodetail2" />
          </div>
          <div className="detail_text">
            <div className="head_text">การประเมินราคา</div>
            <div className="description_text">
              บริษัทประเมินราคาตามความเหมาะสมกับสิ่งที่คุณต้องการ โดยจัดทำเอกสารประเมินราคา รวมถึงสัญญาที่เป็นธรรมปรับตามความเหมาะสมให้กับสิ่งที่ลูกค้าต้องการ
            </div>
          </div>
        </div>
      </div>
    </DetailPage2Styled>
  );
}
