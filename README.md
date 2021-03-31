# Sopranos-Twitter


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**A Twitter Clone Where Everyone Can Only Post as Sopranos Characters (Working title) ** This app is clone of Twitter with a key difference - users can only post as the Sopranos character they choose upon sign up. Posts that are well liked will earn gabagool instead of hearts, and posts that are deemed not in character will be deleted after a thershold of 10 downvotes is met.


<br>

## MVP

### Goals

- The ability for users to sign up, set a password, and select the character (of 10 choices) they want to post as. 
- The ability to post to feed, with most recent posts at the top. 
- A like button, which rewards the post with some gabagool.
- A dislike button for posts that a user believes to not be in character. The gabagool count will be tied to this, so posts will have a score based on how many likes and dislikes.
- If the dislike button is pressed by 10 users on a post, the post will be delated. 
- The ability to comment on posts. Comments will also be able to be liked and disliked.

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | The front end of this project will be a react app |
|   Rails          | The back end will be built in rails |
| SQL | The database will be in PostgreSQL|
|     Axios      | To make HTTP requests to the API |
|  JWT  | JWT will be used for user authentication |
|  Bcrypt  | Password hashing |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

https://whimsical.com/twitter-but-everyone-posts-as-a-sopranos-character-KdXZWLfY9tDHbSC3vxNzSn


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

https://whimsical.com/twitter-but-everyone-posts-as-a-sopranos-character-KdXZWLfY9tDHbSC3vxNzSn


#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend setup (migrating tables and route/controller set up)   |    H     |     6 hrs      |     TBD     |    TBD    |
| Backend setup (authorization)  |    H     |     6 hrs      |    TBD     |     TBD     |
| Frontend setup (component creation)  |    H     |     4 hrs      |    TBD     |     TBD     |
| Frontend setup (api calls)  |    H     |     4 hrs      |    TBD     |     TBD     |
| Frontend  (general JS/HTML)  |    H     |     4 hrs      |    TBD     |     TBD     |
| Frontend  (CSS)  |    H     |     4 hrs      |    TBD     |     TBD     |
| Testing / QA  |    H     |     4 hrs      |    TBD     |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

https://whimsical.com/twitter-but-everyone-posts-as-a-sopranos-character-KdXZWLfY9tDHbSC3vxNzSn

<br>

***
## Post-MVP

- The ability to see a user's profile; this will contain their total gagabool count and their posts. 
- The ability to sort the main feed by the most liked posts. 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
