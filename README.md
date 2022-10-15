
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a >
    <img src="/public/img/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Daily Journal</h3>

  <p align="center">
    A daily journaling app.  
    <br />
 
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

![daily-journal_demo](https://user-images.githubusercontent.com/62227321/195998609-9e292abf-419f-439d-8417-0cd0a1f93ea9.gif)

Daily Journal is a journaling app that can be used as a tool for recording daily emotions and activities, milestones or anything thats worthy enough to mention in a journal.

### Built With

![html](https://user-images.githubusercontent.com/62227321/194765332-e71412ac-bbe7-4961-ad90-081871a35e62.png)&ensp;&ensp;&ensp;
![mongodb](https://user-images.githubusercontent.com/62227321/194765352-9808445b-b6e1-4893-99e1-f2ec13f659d1.png)&ensp;&ensp;&ensp;
![css](https://user-images.githubusercontent.com/62227321/194765349-1c3a3772-07ef-4993-97dc-a7586648451a.png) &ensp;&ensp;&ensp;
![bootstrap](https://user-images.githubusercontent.com/62227321/195997434-f3002403-b77b-45a7-8ecd-6552d1e97e6c.png) &ensp;&ensp;&ensp;
![node](https://user-images.githubusercontent.com/62227321/194765350-5210abeb-257b-47ad-a766-67e1a3a87c5a.png)&ensp;&ensp;&ensp;
![express](https://user-images.githubusercontent.com/62227321/194765351-b3431065-c5fd-4200-aa8c-5d20641cb503.png)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these example steps.

### Prerequisites

List of required software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* MongoDB shell
  ```sh
  follow doc - https://www.mongodb.com/docs/manual/administration/install-community/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/allgeo/daily-journal.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application 
   ```sh
   node app.js 
   ```
```Note:``` After starting the application, a "blogDB" database will be created under the mongo shell. The name of the database can be configured as seen below,
   ```js
   mongoose.connect("mongodb://localhost:27017/ENTER_DB_NAME", {useNewUrlParser: true});

   ```

<!-- CONTACT -->
## Contact

allgeocode@gmail.com

