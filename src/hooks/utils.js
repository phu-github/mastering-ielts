// Function to get the current day formatted as "dd/mm/yyyy"
export const getCurrentDay = () => {
  const date = new Date();
  const day =
    date.getDate() < 10
      ? String(date.getDate())
      : String(date.getDate()).padStart(2, "0");
  const month =
    date.getMonth() + 1 < 10
      ? String(date.getMonth() + 1)
      : String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
