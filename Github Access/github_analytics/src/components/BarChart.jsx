  
import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
    
    return (
        <Plot data={[
            {
                title: 'Languages Used',
                x: props.repoNames,
                y: props.data,
                marker: {
                    color: 'rgb(191, 170, 250)',
                    line: {
                        width: 2.5
                    }},
            }
            ]}
            layout = {{title: 'Languages Used', width: 1000, height: 400}}
        />
    );
}

export default BarChart;