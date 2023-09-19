<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn">
    <img src="images/hs_logo.png" alt="Logo" width="600" height="200">
  </a>

<h1 align="center">Hearthstone card database & deck builder</h1

   <p align="center">
    Educational project aimed to create a web based deck builder application for a card game
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

#### What is hearthstone?

Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment.
In this game players compete against each others in 1v1 battles, where each player has to overcome their opponent with their pre-built deck, that consists of 30 cards, chosen from over 4000+ unique cards.

#### Project goals

When making this project, our main goal was to create a webservice, to help players manage their owned cards and plan the building of their ingame decks for their upcoming battles. 
To achieve this we used the technologies of MERN Stack - MongoDB, Express.js, React and Node.js.

#### Features
  -  All 4000+ cards stored in a NoSQL (MongoDB) database, fetched and populated from the official Blizzard Hearthstone API. (more about the api on: https://develop.battle.net/documentation/hearthstone/game-data-apis)
  -  User registration and login.
  -  User's option to mark cards as favorites and store built decks.
  -  Import ingame-built decks from the official API.
  -  Sort, search and filter the cards.
  -  Intuitive UI, eye-catching design.

#### Note
This project was created as an early educational group project to practice the technologies of the MERN Stack at the time of our exam season. To keep up the spirit in our fellow coding mates stressfully preparing for their coming exams we filled the project with several funny memes and gags. Please keep this in mind when checking this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With


* [![React][React.js]][React-url]
* [![Javascript]][Javascript-url]
* [![Express][Express.js]][Express.js-url]
* [![MongoDB]][MongoDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run this application, you will need to run both the server and the client on your computer and also to connect to the mongodb database.
To do this, please follow below steps.

### Prerequisites

- Node.js
- MongoDB account

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn
   ```
2. Install NPM packages in both the client and server folders
   ```sh
   npm install
   ```
3. Connect to the Mongo database. Hostname:
   ```sh
   hearthstonedb.jvbkn2z.mongodb.net
   ```
4. Add a .env (exactly as-is : ".env") file to the server folder. The file should contain your MongoDB in the following format::
   ```js
   MONGO_URL=mongodb+srv://(YOUR_MONGODB_USERNAME):(YOUR_MONGODB_PASSWORD)@hearthstonedb.jvbkn2z.mongodb.net/?retryWrites=true&w=majority
   ```
6. Run the server
   ```js
   npm run dev
   ```
7. Run the client
   ```js
   npm start
   ```
8. Access the application in your browser (default address below)
   ```sh
   http://localhost:3000
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/freestyle-mern-project-react-attilaklmn.svg?style=for-the-badge
[contributors-url]: https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/freestyle-mern-project-react-attilaklmn.svg?style=for-the-badge
[forks-url]: https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn/network/members
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/freestyle-mern-project-react-attilaklmn.svg?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/freestyle-mern-project-react-attilaklmn.svg?style=for-the-badge
[issues-url]: https://github.com/gCodecoolGlobal/freestyle-mern-project-react-attilaklmn/issues
[license-shield]: https://img.shields.io/github/license/CodecoolGlobal/freestyle-mern-project-react-attilaklmn.svg?style=for-the-badge
[license-url]: https://github.com/CodecoolGlobal/freestyle-mern-project-react-attilaklmn/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/szajkó-gábor-63883556
[product-screenshot]: images/hs_login.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
