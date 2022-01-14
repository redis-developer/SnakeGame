# Snake Game

Building a classic Snake Game for Android powered with React, NodeJS and Redis. This application utilizes event-driven architecture.

### What it does

The advantage of using a database like Redis over other databases like Mongo, SQL, lies in the fact that for the data required to be fetched for these types of games, in no way require us to waste time in computing querying through a database. All that is needed is a given set of information that can be found and delivered way faster using Redis. Whenever an event occurs in the game, for eg. "Game-over" event, then only the database.

### Tech Stack

- React-Native
- React-Native Game-Engine
- NodeJS
- Redis Database
- Google Cloud Compute Engine


## Quick Installation

### For Backend:

```
1. Start redis server
2. cd api
3. npm i
4. node index.js
```

### For front end:
> Replace api call link to ```localhost:3050``` if you want to run the application locally 

```
1. cd SnakeApp
2. npm i
3. npm start
4. npm run android || npm run ios
```

### How it works?

Frontend UI is designed using React-Native. The backend is designed using Redis + Node and deployed over Google Cloud. For the game design, "react-native-game-engine" is leveraged and utilized its event "dispatched event" concept to design and event-driven app using Redis.




### Future Plans

- Add more of these events driven processes by adding more features to the game, like tools, skills etc.
- Add and migrate the working of the Redis database by redesigning the currently existing structure with RedisJSON module.

### Try it out

1.  Apk : [Link](https://drive.google.com/open?id=1SJFrtwDQsehiJN6T7Zpz9J8Bv7w7wx21)
2.  Youtube : [Link](https://www.youtube.com/watch?v=yQ37xUP_J-k)

### Screenshots

<img src="https://i.imgur.com/SwX1vq6.jpg" width="480" height="680" />

<img src="https://i.imgur.com/0kWe5kg.jpg" width="480" height="680" />

<img src="https://i.imgur.com/tFiVjDP.jpg" width="480" height="680" />
