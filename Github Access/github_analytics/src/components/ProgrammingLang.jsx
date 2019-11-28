import React from 'react';
import BarChart from './BarChart.jsx';

let repositories = ''
let langData = ''



const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(repositories = repositories + key+' ')}
                        {console.log(langData = langData + value)}
                        


                    </li>
                )}
                <div>
                <BarChart repoNames={repositories.split(' ')} data={langData.split('')}/>
                    {langData = ''}
                    {repositories =''}
                </div>
            </ul>
        )
    } else { return null }
};
export default LanguageList;