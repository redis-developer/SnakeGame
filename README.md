# Snake Game

### Inspiration

Redis was a database, I have heard several times about from various resources. This hackathon conducted by the team allowed me to study this awesome technology and apply it in a real-world scenario.

## Installation
For Backend:
```
1. Start redis server
2. cd api
3. npm i
4. node index.js
```
For front end:
> Replace api call link to ```localhost:3050``` if you want to run the application locally 
```
1. cd SnakeApp
2. npm i
3. npm start
4. npm run android || npm run ios
```

### What it does

My app is basically, as the name suggests is a snake game. The advantage of using a database like Redis over other databases like Mongo, SQL, lies in the fact that for the data required to be fetched for these types of games, in no way require us to waste time in computing querying through a database. All that is needed is a given set of information that can be found and delivered way faster using Redis. Whenever an event occurs in the game, for eg. "Game-over" event, then only the database.

### Tech Stack

- React-Native
- React-Native Game-Engine
- NodeJS
- Redis Database
- Google Cloud Compute Engine

This application utilizes event-driven architecture.

### Future Plans

I intend to add more features to the game in future releases. These will include two player gaming.
Add more of these events driven processes by adding more features to the game, like tools, skills etc.
Add and migrate the working of the Redis database by redesigning the currently existing structure with RedisJSON module.

### Try it out

1.  Apk : [Link](https://drive.google.com/open?id=1SJFrtwDQsehiJN6T7Zpz9J8Bv7w7wx21)
2.  Youtube : [Link](https://www.youtube.com/watch?v=5TTC36gBgY4&feature=youtu.be)

### Screenshots

<img src="https://i.imgur.com/SwX1vq6.jpg" width="480" height="680" />

<img src="https://i.imgur.com/0kWe5kg.jpg" width="480" height="680" />

<img src="https://i.imgur.com/tFiVjDP.jpg" width="480" height="680" />
