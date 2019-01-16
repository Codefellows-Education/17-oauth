![CF](http://i.imgur.com/7v5ASc8.png) OAuth Comparative Analysis
================================================================

## Wordpress OAuth Provider

### Research Conducted By: Caity Heath, Becca Lee, Lena Eivy

### Overall Score and Comments
#### Score (Out of 10): 6
#### General Comments
Wordpress is not the most user friendly site, however their documentation was well done and simple to understand. In order to authenticate, users need to press two buttons AND have a website through Wordpress. This might limit our potential user base. Also, the users who do have Wordpress sites would tend to fall into a specific demographic - mainly small business owners. Make sure this aligns with our target user. Also, Wordpress is a little slow. 

#### Pros
* Simple to use
* don't need to define what our scope is - we can access all sorts of data just by chaning our endpoint (maybe this is a con)
* direct and easy documentation
* works with our database

#### Cons
* Limited and specific user base
* not a great UX 
* a little slow

### Ratings and Reviews
#### Documentation
This is a simple OAuth to use and we'd recomend it. 

#### Systems Requirements
Beyond node, there were no specific core requirements. We did install mongo to use as a database system although any database system could be used. Wordpress does not limit. I don't know if it plays well with AWS but it does work on Heroku.

#### Ramp-Up Projections
If a team of mid-jr developers were working on this project, I predict it should take no more than a day to become profecient at working with Wordpress as an OAuth. 

#### Community Support and Adoption levels
Wordpress is a popular content management system with over 75 million websites - 30% of all websites on the web. Big companies that use Wordpress include: The New Yorker, BBC America, Disney, Sony, and Beyonce. However, in general, it is used by smaller companies. It is not very well regarded in the JS community - relying on a php framework and antiquated technologies such as css floats. Despite this impression, there remains an active community of developers supporting the site - continually developing new themes and using it as a way of generating a quick site for low budget clients. 


### Links and Resources
* [framework](https://github.com/applena/17-oauth)
* [docs](http://)

### Code Demos
* [live/running application](https://agile-beach-13174.herokuapp.com/)
* [code repository](https://github.com/applena/17-oauth)

### Operating Instructions
* in the web server folder, open a terminal and run: `npm start`
* in the auth server folder, open a terminal and run: `npm start`
* in the browser, go to: `http://localhost:8080`
* click on the link that says, "sign in using Wordpress"
