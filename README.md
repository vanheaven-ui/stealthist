<div align="center">

  # STEALTHIST


An HTML5 Role Play Game(RPG) built using Phaser game engine and JavaScript.
  
[![Github Issues](https://img.shields.io/badge/GitHub-Issues-orange)](https://github.com/vanheaven-ui/stealthist/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/vanheaven-ui/stealthist/pulls)
![Linters](https://img.shields.io/badge/Linters-Passing-success)

</div>

## Application Screenshot

![Screenshot](screenshot/screenshot.gif)

## Content

<a text-align="center" href="#about">Background</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#ins">Installations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#app">App</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#with">Building</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#tests">Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Author</a>


## Background <a name = "about"></a>
This project was a task by [Microverse Inc.](https://www.microverse.org/) to build an HTML5 RPG using the Phaser engine and JavaScript. The game was built by breaking down the development process into milestones as listed below:
- Learn how to use the Phaser 3 game engine with JavaScript.
- Design the game and create a Game Design Document (GDD).
- Environment setup.
- Create the necessary game scenes and their logic. 
- Post game scores to a game scoreboard API endpoint.
- Test the game using Jest.
- Publish the application.

### Game Design
The game design was the core of the development process since it involved conceiving the game evolution and game mechanics. The hard to crack nut was determining how the player was to control the game character. Below is a brief description of each of the main components of the game design:

#### Game Concept
The game concept required a bit of thought and it was determined that the game would be built around the story of a dude who was camping with his girlfriend in a public park and then he was attacked by a gang who kidnapped his girlfriend and left him in bad health. So the task in the game was to forage in the park for food to replenish his(the dude) health and then make it through a dangerous dungeon to where the girlfriend was hidden. 

#### How to play
After quite a thought process, it was determined that the player would be controlled using the computer keyboard arrow keys and this was implemented in the game as below:

These are the instructions on how to move the game character in all the play scenes of the game.
- To move the player to left, use the `left arrow key`.
- To move the player to the right, use the `right arrow key`.
- To move the player upwards, use the the `up arrow key`.
- To move the player downwards, use the `down arrow key`.

#### Game Scenes
The game scenes were determined to be Javascript classes that inherit from the Phaser.Scene class.
As per project specifications, the game implemented the following scenes in the order of game execution:
1. Boot Scene - This scene was determined to just load the game main logo when the game is started.
2. PreloaderScene - This scene was determined to load all the assets used in the game after the bootscene.
3. TitleScene - This scene was deteremined to have menu options. These options are; play, options, credits, and quit.
4. Guide1Scene - This scene was determined provide text instructions on how to play the first play scene of the game.
5. GameScene1 - This scene was detemined to be first main playing scene of the game. The challenges for this scene were conceived to be a countdown timer and achieving a threshold health value.
6. FailScene - Upon failing the countdown time, it was determined that the game should load this scene to present the player some feedback and options to either restart the game or quit.
7. GuideScene2 - This scene was deteremined to provide text instructions on how to play the second play scene of the game.
8. GameScene2 - This scene was determined to be the second play scene of the game. Tha main task in this scene was to make it through the traps disguised as go down ladders and avoid health denting obstacles like fires to the part the dungeon where the girlfriend was hidden.
9. GameoverScene - This scene was determined to provide the ending of a player's complete play cycle. Upon the player falling in a trap in `GameScene2` described above, this scene would be loaded. Likewise, upon getting to the treasure chest in `GameScene2`, described above, this scene would be loaded. These scene was designed to provide options to the player which include; get the leaderboard, restart the game, get the menu.
10. LeaderboardScene - This scene was deteremined to  display the best player game scores. This use use time scores for ranking. The time score is the time it takes to succeed in the game.

#### Game Design Implementaion
Most of the design concepts were implemented in this respository. However, some design concepts are still pending and these include:
- Using a different game character for the second scene to show better health.
- Character being able to pick animated coins in the second play scene of the game.
- Stopping the up counter when game is ended.
- Having a dynamic scoreboard that moves alongside the camera in the second game play scene.
- More real sprite animations.
- Animated obstacles in the second game play scene.

#### You can see a detailed Game Design Document [here](https://docs.google.com/document/d/1dJt-gpuQmJs6z9Y0iqfykcTqZ9fE9czj4H1sAQBZcKw/edit?usp=sharing)

## Live Game Demo
The built app is hosted on netlify <br />

### You may see the demo version [here](https://agitated-kirch-4c510a.netlify.app/)

## 🔧 Building<a name = "with"></a>
The tools used to build the HTML5 RPG are listed below:

  - Javascript(ES6).
  - Phaser
  - Webpack.
  - [Learderboard API Service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3)


## Usage <a name = "usage"></a>
To use the code in this repository, follow the steps in this section:

### 🔨 Prerequisites
 You should have the following packages installed on your computer inorder to run the code contained herein.

- Node JS 
- npm and npx

### 🔨 Setup
First get a copy of the project on your computer:

- Clone or download the repository to a local directory on your computer by following the Github instructions at [Github clone/download repository](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository).

### 🛠 Installing <a name = "ins"></a>
Once you have a local copy of the entire project on your computer,
If you don't meet the above prerequisites, then:

- Visit [node download and installations docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install node js and npm.
- Run ``npm install`` to install the project dependencies in the package.json file.

### Testing <a name = "tests"></a>
Jest was used to test the code contained herein.
To run the tests written in this project, then:
- Type/copy `npm run test` into the terminal and strike `Enter`.

###  App <a name = "app"></a>
With the installations above complete, you are set to use the code and locally run the HTML 5 RPG built in this repository. Follow these simple steps:

- Change directory into the directory where you cloned the repository. 
- Open the project directory in your editor of choice. For example running ``code .`` will open the project in VSCode.
- Run ``npm start`` to start webpack-dev-server.
- If everything worked well, the browser should automatically render the HTML 5 RPG on localhost:8080.

## ✒️  Author <a name = "author"></a>

👤 **Mworekwa Ezekiel**

- Github: [@vanheaven-ui](https://github.com/vanheaven-ui)
- Twitter: [@MworekwaE](https://twitter.com/MworekwaE)
- Linkedin: [@linkedin](https://www.linkedin.com/in/vanheaven/)
- Email: [ezekiel](mailto:vanheaven6@gmail.com)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

- To create an issue, visit the [issues page](https://github.com/vanheaven-ui/events/issues) and create a new issue.
- To contribute to the code base, follow the steps below:
  1. Fork this repository to your remote respository by clicking the Fork button in this repository.
  2. Clone this repository to a directory on your computer by following Github guidelines.
  3. Change directory into the directory where you cloned this repository to.
  4. Open the directory using your favorite editor.
  5. Create a feature branch off the develop branch.
  5. Make and commit the nuanced code.
  6. Open a pull request describing the improvements made
And your reward awaits in heaven.


## 👍 Show your support

Give a ⭐️ if you like this project!

## :clap: Acknowledgements
- [Microverse Community](https://www.microverse.org/) <br />
- [The Microverse Specifications](https://www.notion.so/RPG-game-f94a617841e240a293c0b6928beebe89) <br />
- [Cool Text Generator](https://maketext.io/) <br />
- [Phaser Documentation](https://phaser.io/learn) <br />
- [Nature Tileset Source](https://stealthix.itch.io/rpg-nature-tileset) <br/>
- [Dungeon Tileset Source](https://pixel-poem.itch.io/dungeon-assetpuck)

