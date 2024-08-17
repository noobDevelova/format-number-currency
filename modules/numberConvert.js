import {
  convert,
  getNumberUnitsGlobal,
  getNumberUnitsLocal,
} from "./getNumberDictionary.js";
import numberSplit from "./numberSplit.js";

const convertNumber = (number, type) => {
  const splitted = numberSplit(number);
  let str = "";

  for (let index = 0; index < splitted.length; index++) {
    const part = parseInt(splitted[index]);
    const unit =
      type === "local"
        ? getNumberUnitsLocal(splitted.length - index - 1)
        : getNumberUnitsGlobal(splitted.length - index - 1);

    if (part !== 0) {
      str += `${convert(part, type)} ${unit} `;
    }
  }

  return str.trim();
};

export default convertNumber;
