const getLocalStorage = () => {
  const getProducts = localStorage.getItem("products");
  if (getProducts) {
    return JSON.parse(getProducts);
  }
  return [];
};

export default getLocalStorage;
