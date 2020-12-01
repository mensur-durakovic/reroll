import arrayShuffle from "../services/arrayShuffle";
import isActiveRandomizer from "../services/isActiveRandomizer";
import classic_all from "../data/classes/classic/all.json";
import classic_tank from "../data/classes/classic/tank.json";
import classic_healer from "../data/classes/classic/healer.json";
import classic_melee_dps from "../data/classes/classic/melee_dps.json";
import classic_ranged_dps from "../data/classes/classic/ranged_dps.json";
import azeroth_all from "../data/classes/azeroth/all.json";
import azeroth_tank from "../data/classes/azeroth/tank.json";
import azeroth_healer from "../data/classes/azeroth/healer.json";
import azeroth_melee_dps from "../data/classes/azeroth/melee_dps.json";
import azeroth_ranged_dps from "../data/classes/azeroth/ranged_dps.json";
import { gameModeAzeroth, gameModeClassic } from "../constants/gameModes";

export async function fetchClassesData(gameVersion, role) {
  const getClassicData = (roleSwitcher) => {
    switch (roleSwitcher) {
      default:
      case "all":
        return classic_all;
      case "Tank only":
        return classic_tank;
      case "Healer only":
        return classic_healer;
      case "Ranged DPS only":
        return classic_ranged_dps;
      case "Melee DPS only":
        return classic_melee_dps;
    }
  };

  const getAzerothData = (roleSwitcher) => {
    switch (roleSwitcher) {
      default:
      case "all":
        return azeroth_all;
      case "Tank only":
        return azeroth_tank;
      case "Healer only":
        return azeroth_healer;
      case "Ranged DPS only":
        return azeroth_ranged_dps;
      case "Melee DPS only":
        return azeroth_melee_dps;
    }
  };

  const resolveData = () => {
    if (gameVersion === gameModeClassic) {
      return getClassicData(role);
    }

    if (gameVersion === gameModeAzeroth) {
      return getAzerothData(role);
    }

    throw new Error("Invalid game mode to map to API data.");
  };

  let gameData = resolveData();

  arrayShuffle(gameData.pickingClasses);
  isActiveRandomizer(gameData.pickingClasses);

  return gameData;
}
