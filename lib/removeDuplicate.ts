const removeDuplicate = (array: string[]) => {
  return array.filter((data, index) => array.indexOf(data) === index);
};

export default removeDuplicate;
