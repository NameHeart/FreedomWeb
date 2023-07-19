import maejo from "../../../public/assets/images/pagesponsor/maejo.png";
import fund from "../../../public/assets/images/pagesponsor/fund.png";
import Nia from "../../../public/assets/images/pagesponsor/Nia.png";
import tpqi from "../../../public/assets/images/pagesponsor/tpqi.png";
import broker from "../../../public/assets/images/pagesponsor/broker.png";
import startup from "../../../public/assets/images/pagesponsor/startup.png";
import university from "../../../public/assets/images/pagesponsor/university.png";
import Image from "next/image";
import { SecPartnerWidgetStyled } from "./styled";

const SecPartnerWidget = () => {
  return (
    <SecPartnerWidgetStyled>
      <div className="partner_container">
        <div className="pn_content_block">
          <div className="head_text">ร่วมสนันสนุนโดย</div>
          <div className="top_logo">
            <Image className="maejo_image" src={maejo} />
            <Image className="fund_image" src={fund} />
            <Image className="nia_image" src={Nia} />
          </div>
          <div className="button_logo">
            <Image className="tpqi_image" src={tpqi} />
            <Image className="broker_image" src={broker} />
            <Image className="startup_image" src={startup} />
            <Image className="university_image" src={university} />
          </div>
        </div>
      </div>
    </SecPartnerWidgetStyled>
  );
};

export default SecPartnerWidget;
