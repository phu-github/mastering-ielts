import React, { useEffect } from 'react';
import CalHeatmap from 'cal-heatmap';
// Optionally import the CSS
import 'cal-heatmap/cal-heatmap.css';

function ActiveReCall() {
    useEffect(() => {
        const cal = new CalHeatmap();
        cal.paint({
            itemSelector: '#example-gutter',
            domain: { type: 'year'}, // Hiển thị theo tháng
            subDomain: { type: 'day', label: '', width: 70, height: 70 },
            range: 1,
            data: {
                // Dữ liệu giả lập trạng thái nhớ từ
                "2025-02-05": { 1: 2, 2: 1, 3: 3 }, // Ngày 5/2/2025
                "2025-02-06": { 1: 1, 2: 3, 3: 2 }, // Ngày 6/2/2025
              },
              legend: [1, 2, 3], // Các mức nhớ
              legendColors: {
                min: "#FF0000", // Chưa thuộc
                max: "#00FF00", // Nhớ hoàn toàn
              },
              // Thay đổi số dòng cho headmap , có 10 dòng, cột 20 dòng
              cellSize: 5,
        });
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div id="example-gutter"></div>
    );
}

export default ActiveReCall;