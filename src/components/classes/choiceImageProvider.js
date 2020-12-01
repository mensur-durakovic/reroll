import {
  DRUID,
  HUNTER,
  MAGE,
  PRIEST,
  SHAMAN,
  WARLOCK,
} from "../../constants/localizations";
import Druid from "../../assets/images/druid.png";
import Shaman from "../../assets/images/shaman.png";
import Priest from "../../assets/images/priest.png";
import Mage from "../../assets/images/mage.png";
import Warlock from "../../assets/images/warlock.png";
import Hunter from "../../assets/images/hunter.png";

const getOptionImage = (name) => {
  switch (name) {
    case DRUID:
      return Druid;
    case SHAMAN:
      return Shaman;
    case PRIEST:
      return Priest;
    case MAGE:
      return Mage;
    case WARLOCK:
      return Warlock;
    case HUNTER:
      return Hunter;
    default:
      return Druid;
  }
};

export default getOptionImage;
