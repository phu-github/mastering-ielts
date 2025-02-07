import { useMemo } from "react";
import * as d3 from "d3";
import { updateCellOfHeadMap } from "../../Redux/slices/vocabularySlice";
// Redux-toolkit: using
import { useDispatch } from "react-redux";

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  const dispatch = useDispatch();
  // bounds = area inside the axis
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // groups
  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))].reverse(), [data]);
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data]);

  // x and y scales
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01);
  }, [data, height]);

  const [min, max] = d3.extent(data.map((d) => d.value));

  if (!min || !max) {
    return null;
  }
  
  // Function to handle cell click
  const handleCellClick = (d) => {
    alert(`Cell clicked: x=${d.x}, y=${d.y}, value=${d.value}`);
  };
  
  // Hàm để chuyển đổi chuỗi ngày/tháng/năm thành đối tượng Date
  function parseDate(dateString) {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // Tháng trong Date là zero-based
  }

// Hàm để so sánh hai ngày
function compareDates(dateStr2) {
  const date1 = parseDate(getCurrentDay());
  const date2 = parseDate(dateStr2);

  if (date1 > date2) {
    return true;
  } else if (date1 < date2) {
    return false;
  } else {
    return true;
  }
}
  // Function to get the current day formatted as "dd/mm/yyyy"
  function getCurrentDay() {
    const date = new Date();
    const day = date.getDate() < 10 ? String(date.getDate()) : String(date.getDate()).padStart(2, '0');
    const month = date.getMonth() + 1 < 10 ? String(date.getMonth() + 1) : String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  // Custom color function to map values to specific colors
  const getColor = (day, value) => {
    if (compareDates(day)) {
      if (value < 10) return "red"; // Low values
      if (value < 20) return "orange";
      if (value >=20) return "#216e39";
    } else return "gray";
  };

  // Color scale
  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([min, max]);

  // Build the rectangles
  const allRects = data.map((d, i) => {
      return (
        <rect
          key={i}
          r={4}
          x={xScale(d.x)}
          y={yScale(d.y)}
          width={xScale.bandwidth()}
          height={yScale.bandwidth()}
          opacity={1}
          fill={getColor(d.x, d.value) }
          rx={5}
          stroke={"white"}
          onClick={() => dispatch(updateCellOfHeadMap(d))} // Add click event
        />
      );
    }
  );

  const xLabels = allXGroups.map((name, i) => {
    const xPos = xScale(name) ?? 0;
    return (
      <text
        key={i}
        x={xPos + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
        transform={`translate(0, -${boundsHeight + 20})`} // Move labels to the top
        fontWeight="bold"
      >
        {name}
      </text>
    );
  });

  const yLabels = allYGroups.map((name, i) => {
    const yPos = yScale(name) ?? 0;
    return (
      <text
        key={i}
        x={-5}
        y={yPos + yScale.bandwidth() / 2}
        textAnchor="end"
        dominantBaseline="middle"
        fontSize={10}
        fontWeight="bold"
      >
        {name}
      </text>
    );
  });

  return (
    <div>
      <svg
      width={width + MARGIN.left + MARGIN.right} // Adjust width to include margins
      height={height + MARGIN.top + MARGIN.bottom + 50} // Adjust height to include margins
      viewBox={`0 0 ${width + MARGIN.left + MARGIN.right} ${height + MARGIN.top + MARGIN.bottom}`} // Set viewBox to include margins
      style={{ overflow: 'visible' }} // Ensure overflow is visible
    >
        <g
          width={boundsWidth + 50}
          height={boundsHeight + 50}
          transform={`translate(${MARGIN.left}, ${MARGIN.top})`}
        >
          {allRects}
          {xLabels}
          {yLabels}
        </g>
      </svg>
    </div>
  );
};
