import React from 'react';
//import BarChart from './d3.jsx';
import BarChart from './BarChart.jsx';

let x = ''
let i = ''



const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(x = x + key+' ')}
                        {console.log(i = i + value)}
                        


                    </li>
                )}
                <div>
                <BarChart repoNames={x.split(' ')} data={i.split('')}/>
                    {i = ''}
                    {x=''}
                </div>
            </ul>
        )
    } else { return null }
};
export default LanguageList;