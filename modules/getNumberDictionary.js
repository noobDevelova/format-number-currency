import {
  numberDictionaryGlobal,
  numberDictionaryLocal,
  numberUnitsGlobal,
  numberUnitsLocal,
} from "./numberDictionary.js";

export const convert = (number, type) => {
  const numberBasedOnType =
    type === "local"
      ? numberDictionaryLocal[number]
      : numberDictionaryGlobal[number];
  const selectedDictionary =
    type === "local" ? numberDictionaryLocal : numberDictionaryGlobal;

  if (number <= 99) {
    if (numberBasedOnType) return numberBasedOnType;

    const tens = Math.floor(number / 10) * 10;
    const ones = number % 10;

    if (ones === 0) {
      return selectedDictionary[tens];
    }
    return `${selectedDictionary[tens]}-${selectedDictionary[ones]}`;
  }

  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) {
    if (type === "local") {
      return hundreds === 1
        ? "seratus"
        : `${selectedDictionary[hundreds]} ratus`;
    } else {
      return `${selectedDictionary[hundreds]} hundred`;
    }
  }

  if (type === "local") {
    return hundreds === 1
      ? `seratus ${convert(remainder, type)}`
      : `${selectedDictionary[hundreds]} ratus ${convert(remainder, type)}`;
  } else {
    return `${selectedDictionary[hundreds]} hundred ${convert(
      remainder,
      type
    )}`;
  }
};

export const getNumberUnitsGlobal = (numberLength) => {
  return numberUnitsGlobal[numberLength] || "";
};

export const getNumberUnitsLocal = (numberLength) => {
  return numberUnitsLocal[numberLength] || "";
};
