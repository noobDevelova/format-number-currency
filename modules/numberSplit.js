const numberSplit = (number) => {
  let converted = number.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  return converted;
};

export default numberSplit;
