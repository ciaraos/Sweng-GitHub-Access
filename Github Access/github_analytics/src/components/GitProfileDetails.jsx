import React from 'react';
import Moment from 'react-moment';

const GitProfileDetails = (props) => {
    return (
        <div>
            <div>
                {props.infoclean.name ? <div><p>Name: {props.infoclean.name}</p></div> : null}
            </div>
            <div>
                {props.infoclean.bio ? <div><p>Bio: {props.infoclean.bio}</p></div> : null}
            </div>
            <div>
                {props.infoclean.created_at ? <div><p>Joined:
                    <Moment from={new Date()}>{props.infoclean.created_at}</Moment></p></div> : null}
            </div>
            <div>
                {props.infoclean.blog ? <div><p>Blog: <a href={
                    props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
                        : "http://" + props.infoclean.blog} target="_blank">{props.infoclean.blog}</a></p></div> : null}
            </div>
            <div>
                {props.infoclean.location ? <div><p>Location: {props.infoclean.location}</p></div> : null}
            </div>
            <div>
                {props.infoclean.company ? <div><p>Company: {props.infoclean.company}</p></div> : null}
            </div>
            <div>
                {props.infoclean.public_repos ? <div><p>Public Repos: {props.infoclean.public_repos}</p></div> : null}
            </div>
            <div>
                {props.infoclean.followers ? <div><p>Followers: {props.infoclean.followers}</p></div> : null}
            </div>
            <div>
                {props.infoclean.following ? <div><p>Following: {props.infoclean.following}</p></div> : null}
            </div>
            <div>
                {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null}
            </div>
            <div>
                {props.infoclean.login ? <div>{<img src={"http://ghchart.rshah.org/" + props.infoclean.login} alt="Github chart" />
                }<br /><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null}
            </div>
        </div>
    )
};
export default GitProfileDetails;