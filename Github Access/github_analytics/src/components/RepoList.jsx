import React from 'react';
import Moment from 'react-moment';
import PieChart from './PieChart.jsx'

const RepoList = (props) => {
  if (props.repoItems) {
    return (
        <ul>
          {props.repoItems.map((repoItems) =>
            <li key={repoItems.id}>
              <div>
                <div>
                  <a href={repoItems.html_url} target="_blank">{repoItems.name}</a> || Started <Moment from={new Date()}>{repoItems.created_at}</Moment>
                </div>
                <div>
                  <i>{repoItems.description}</i>
                </div>
                <div>
                 Language: {repoItems.language} || Watchers: {repoItems.watchers_count} || Forks: {repoItems.forks_count}
                 <PieChart repoSize={[repoItems.watchers_count,repoItems.forks_count]} repoNames={['watchers','forks']}/>

                </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default RepoList;