# Sweng-GitHub-Access Assignments 5 and 6

## Assigment Goals:
* Using the GitHub API to retrieve and display data.
* Using the GitHub API to build visualization of data available 

## Solution:
I decided the best and most interesting way to create a visualization of data was through the create react app. I had never used this before but I know many people used it last year for the Software Engineering Group Project. It was difficult to get started as I had very little experience coding in JavaScript but over time I got more comfortable. I created a home page where the user can search a GitHub username they would like to analyse. Then the data is displayed under various headings and visualized through a pie chart and a line graph. 

### Visualisations:
![](README%20screenshots/React%20App.gif)
#### Home Page:
![](README%20screenshots/home%20page%20.png)
![](README%screenshots/facebook-1200x630.png)
When a user first opens the website this is what they see. There is the GitHub Analytics title and a GitHub icon at the bottom of the page. They can enter a username to analyse into the search bar. The data is loaded using axios from the GitHub API, it is then stored as a json object. 
#### Profile Details:
![](README%20screenshots/profile%20details.png)
After searching a username, user details are displayed. This is a screenshot of my profile details. As you can see, it shows my name, when I joined, my followers and my public repos. It can also display bio, blog, location, and company if I were to have those details on my account. A chart of my commits is dispayed through the GitHub API, as well as a link to my GitHub profile. 
![](README%20screenshots/facebook%20profile%20details.png)
The user has the option to scroll back to the top of the page to search another username. I chose Facebook as an example of this as it shows their location and blog. 
#### Pie Chart:
![](README%20screenshots/pie%20chart.png)
Further down the screen, the website displays a list of repositories. For each repository, the description, start date, language, watchers and forks are displayed. The percentage of watchers and forks is displayed in a pie chart beside each repository. As the mouse hovers over each section in the pie chart, the number and percentage, of forks or watchers, are highlighted. This is a software metric that touches on the social influence of the repository. As I am just a student, I have no watchers, but companies like Facebook and Snapchat are big influencers. People would be interested to see what they are doing. 
#### Line Graph:
![](README%20screenshots/programming%20languages.png)
![](README%20screenshots/line%20graph.png)
Finally, towards the bottom of the screen, a list of languages used by the user is displayed. This is visualized in a line graph below. As the mouse hovers over each dot in the line graph, the language and number of repositories using it, are highlighted. This is a software metric that shows the broader knowledge of a user. Rather than having all repositories in the one language, it shows flexibility and a greater knowledge across the board.

## Resources:
* **d3.js** - I had initially attempted to display my data with d3 graphs, however, I found this to be a challenge 
* **plotly.js** - Instead of d3.js, I opted to use plotly.js as it wa easier to understand and implement
* **react app** - I used the create react app to start off the project, and coded the rest of it in React.js
* **bootstrap.css** - I played around with bootstrap adding tabs and panels to my homepage, however, this caused a few problems with displaying my data to I decided to go for a more simple UI approach. 
* **GitHub API** - I used the GitHub API to extract data 

## Running the project:
The project will be run in local host (http://localhost:3000 to view in browser) 
To run the project, all you must do is clone the repository and use the following commands:
* `npm install` 
* `npm start`

