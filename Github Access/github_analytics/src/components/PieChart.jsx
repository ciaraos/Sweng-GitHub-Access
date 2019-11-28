import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = (props) => {
    var chartColors = [
        ['rgb(191, 170, 250)', 'rgb(150, 235, 228)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
      ];
    return (
        <Plot data={[
            {
                values: props.repoSize,
                labels: props.repoNames,
                type: 'pie',
                marker: {
                    colors: chartColors[0]
                }
            }
        ]}
            layout={{ width: 700, height: 400, align: 'left'}}
        />
    );
}

export default PieChart;