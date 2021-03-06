const dateConversion = (date) => {
  return date.toLocaleDateString("fr", {
    month: "long",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  });
};

module.exports = dateConversion