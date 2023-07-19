import { useState } from "react";
import verified from "../../../public/assets/images/verified .png";
import Rectangle from "../../../public/assets/images/Rectangle.png";
import Image from "next/image";
import checklist from "../../../public/assets/images/checklist.png";
import growth from "../../../public/assets/images/growth.png";
import powebutton from "../../../public/assets/images/powebutton.png";
import DetailPage from "./DetailPage";
import { AaPlatformStyled } from "./styled";

import DetailPage3 from "./DetailPage3";
import DetailPage2 from "./DetailPage2";
import DetailPage4 from "./DetailPage4";

const AaPlatform = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="Process" id="Process">
      <AaPlatformStyled>
        <div className="process_container">
          <div className="pc_content_block">
            <div className="main_text">ขั้นตอน Process</div>
            <div className="toptap">
              <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                <div className="card_toptap">
                  <Image className="image_toptap" src={verified} alt="verified" />
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">ส่งรายละเอียด</div>
                  </div>
                </div>
              </button>
              <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                <div className="card_toptap">
                  <Image className="image_toptap" src={checklist} alt="checklist" />
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">ประเมินราคา</div>
                  </div>
                </div>
              </button>
              <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                <div className="card_toptap">
                  <Image className="image_toptap" src={growth} alt="growth" />
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">เริ่มพัฒนา</div>
                  </div>
                </div>
              </button>
              <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                <div className="card_toptap">
                  <Image className="image_toptap" src={powebutton} alt="powebutton" />
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">เปิดใช้งาน</div>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-tabs">
              <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <DetailPage />
              </div>

              <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <DetailPage2 />
              </div>

              <div className={toggleState === 3 ? "content  active-content" : "content"}>
                <DetailPage3 />
              </div>
              <div className={toggleState === 4 ? "content  active-content" : "content"}>
                <DetailPage4 />
              </div>
            </div>
          </div>
        </div>

        <div className="process_container_mobile">
          <div className="pc_content_block">
            <div className="main_text">ขั้นตอน Process</div>
            <div className="toptap">
              <a
                // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="card_toptap">
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">ส่งรายละเอียด</div>
                  </div>
                </div>
                <DetailPage />
              </a>
              <a
                // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="card_toptap">
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">ประเมินราคา</div>
                  </div>
                </div>
                <DetailPage2 />
              </a>
              <a
                // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="card_toptap">
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">เริ่มพัฒนา</div>
                  </div>
                </div>
                <DetailPage3 />
              </a>
              <a
                // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="card"
                target="_blank"
                rel="noopener noreferrer">
                <div className="card_toptap">
                  <div className="text_image">
                    <Image className="Rectangle" src={Rectangle} alt="Rectangle" />
                    <div className="text_image_font">เปิดใช้งาน</div>
                  </div>
                </div>
                <DetailPage4 />
              </a>
            </div>
          </div>
        </div>
      </AaPlatformStyled>
    </div>
  );
};

export default AaPlatform;
