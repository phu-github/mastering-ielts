const nCol = 15;
const nRow = 12;
const currentDay = "05/02/2025";

const vocabulary = [
  "A",
  "B",
  "Word3",
  "Word4",
  "C",
  "Word789798",
  "Word5",
  "Word6",
  "Word7",
  "Word8",
  "Word9",
  "Word10 5000",
  "Word10 20",
];

// Function to get the y value as a formatted date string
function getYValue(currentDay, index) {
    // Tách ngày, tháng, năm từ chuỗi currentDay
    const [day, month, year] = currentDay.split('/').map(Number);

    // Tạo đối tượng Date
    const date = new Date(year, month - 1, day);

    // Tăng số ngày lên theo index
    date.setDate(date.getDate() + index);

    // Định dạng lại ngày theo format dd/mm/yyyy
    const newDay = date.getDate() < 10 ? String(date.getDate()) : String(date.getDate()).padStart(2, '0');
    const newMonth = date.getMonth() + 1 < 10 ? String(date.getMonth() + 1) : String(date.getMonth() + 1).padStart(2, '0');
    const newYear = date.getFullYear();

    return `${newDay}/${newMonth}/${newYear}`;
}

type HeatmapData = { x: string; y: string; value: number }[];
let data: HeatmapData = [];

for (let x = 0; x < nCol; x++) {
  for (let y = 0; y < nRow; y++) {
    data.push({
      x: getYValue(currentDay, y),
      y: vocabulary[x],
      value: Math.random() * 40,
    });
  }
  console.log(data);
}

export { data };
