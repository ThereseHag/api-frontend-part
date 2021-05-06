# Front-end for Sandemo API

I've built this React app in order to fetch data from my own RESTful API. The app displays all books written by the author Margit Sandemo. 

# The strategy

I started with creating my own json dataset with all books written by the Swedish/Norwegian author Margit Sandemo with the goal to make a RESTful API with several endpoints. I then decided to create a front-end where the data could be displayed, in order to cover all parts of the process. 

I've created a book list component, where a basic fetch is made. All titles are shown in that page, in a book card displaying some basic facts. I have also created a component for the book card itself, which handles the structure for each card. The book card is linking to a single page with use of React Router. When clicked, a new fetch is made, which return the endpoint for that single book id, to display a summary of the book, a link to an audio book / e book and some other facts. 

# The published app

The published app can be seen here: 

https://therese-sandemo-collection.netlify.app/
