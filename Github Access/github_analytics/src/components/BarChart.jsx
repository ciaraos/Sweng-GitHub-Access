  
import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
    
    return (
       
    <Plot data={[
        {
            y: props.data,
            x: props.labels,
            type: 'bar',
            title: props.title
        }
        ]}
        layout={ {width: 500, height: 400} }
    />
    );
}

export default BarChart;