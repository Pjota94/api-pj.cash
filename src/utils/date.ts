export const formatDate = () => {
  const dateNow = Date.now();
  const formatDateString = new Date(dateNow);
  const dateFormat = new Intl.DateTimeFormat("pt-BR").format(formatDateString);

  return dateFormat;
};
