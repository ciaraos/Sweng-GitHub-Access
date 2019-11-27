import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = (props) => {

    return (
        <Plot data={[
            {
                values: props.repoSize,
                labels: props.repoNames,
                type: 'pie'
            }
        ]}
            layout={{ width: 600, height: 300 }}
        />
    );
}

export default PieChart;