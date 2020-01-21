import bunny from "../assets/images/animals/bunny.png";
import bear from "../assets/images/animals/bear.png";
import blackcat from "../assets/images/animals/blackcat.png";
import dog from "../assets/images/animals/dog.png";
import pandabear from "../assets/images/animals/pandabear.png";
import penguin from "../assets/images/animals/penguin.png";
import polarbear from "../assets/images/animals/polarbear.png";
import shiba from "../assets/images/animals/shiba.png";
import yellowcat from "../assets/images/animals/yellowcat.png";

export const animals = {
  BUNNY: bunny,
  BEAR: bear,
  BLACK_CAT: blackcat,
  DOG: dog,
  PANDA_BEAR: pandabear,
  PENGUIN: penguin,
  POLAR_BEAR: polarbear,
  SHIBA: shiba,
  YELLOW_CAT: yellowcat
};

// Helper function to resolve team icon from team
// Team should contain the icon field
export const getIcon = team => {
  // Default if team does not have icon
  if (!team.hasOwnProperty("icon")) {
    return animals["BUNNY"];
  } else if (team.icon.type === "ANIMAL") {
    return animals[team.icon.path];
  } else {
    return { uri: team.icon.path };
  }
};
