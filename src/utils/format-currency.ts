export const formatCurrency = (num): string => {
  const numberWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${numberWithCommas}`;
};
