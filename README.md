# Welcome to Fund Together | Hackathon Starton Web 3!

Welcome to our project for the Hackathon organized by Starton. Our project, briefly, is a web app that offers alternative financing for schools, educational entities, but also those with environmental goals.

We started to code this project on November 21, 2022, and have delivered a first version of it on the 25th in the morning.

Due to the time constraint, we have based our project on the MVP concept (Minimal viable product), that's why it is currently a beta version, with potentially some bugs.

Hoping you like our idea, as well as the first draft of the site, and looking forward to receiving your feedback, we sincerely wish you a pleasant time


# How to setup this project

First, we would like to tell you that our project is based on various languages and frameworks (Symfony, MySQL, Solidity, React.JS, etc...). It requires good knowledge and experience to be tested locally. You might spend more time than necessary. That's why we recommend you to test our site through this link:
<https://4752-2001-1715-4e22-3b30-e1c4-6d99-f664-698b.eu.ngrok.io/>
(The site is hosted on a local machine and uploaded via Ngrok, send a message on discord if the link does not work: Wolfa'#2965
Also, we let the dev tools bar, that is a dev symfony version, not prod, and you can zoom a little bit for better experience if you have a large screen, hope you'll enjoy !)

## Local setup (not recommended for only testing)
Then, for those who want to test the repository code on a local machine, here are the steps to follow :
- install node v18.12.1, php PHP 8.1.12, composer v2.4.4 and a web development platform or environment for dynamic web applications using Apache2 server, PHP scripting language and a MySQL database. We recommend Laragon for windows, Mamp for mac & Lamp for Linux
- Pull the repository
- Replace all the "http://localhost/" by your virtualhost (easy to do with a jetbrains tool : ctrl + shift + r)
- run the command `npm install --global yarn`, then the commands `yarn install` and `composer install`
- Put the link of your local MySQL database in a .env.local file (copy and paste from .env) or send a discord message to Wolfa'#2965 to get the real database (DB used is host online)
- Do the commands `php bin/console make:migration` and `php bin/console d:m:m`"
- We invite to do the command "yarn encore dev" to compile the code.
- And if all went well, the site is operational, but there can always be problems related to compatibility between your working environment and the project, if ever it is the case: Wolfa'#2965 ^^
## Test
To test our smart contracts, a simple test battery has been written allowing you to browse the main functions of the contracts, for this :
- rename env_exemple file as .env
- run npm install in the project root directory
- run npx hardhat test

Contract Deployment BSC Testnet :

- Tusdc contract deployed at address -> 0xA9b64D80254BC665CdA3bc93C3566Fe56CfF9a38
- AccessCard contract deployed at address ->  
  starton bsc 0xAB153C57cAdBEE57C7C5792E8e10E183bE46E8F0
  initial mumbai test(0xC3c263D1B2F9a1b7de8231000552011F4102FFCE)
  Campaign Factory deployed at address ->  0x8dac4D9a58b355A5Dc33DA60ebB652d0D6fEFbAf

# What does this app solve ?
Who has never dreamed of redesigning the educational system, and even of creating his own school? An online school for example? There are a lot of incredible projects in the world (Ecole 42 for example haha, but also associations fighting against global warming or free and independent newspapers). The problem is that most of these beautiful projects, no matter how big they are, need money to keep going. That's how the world goes. As these projects do not all have a viable business model or a vocation to generate a significant CA, they very often use participative funding (it is people who finance and bring in the money for the project). However, by taking inspiration from fundraising, kickstarters, and more particularly from crowdfunding platforms that already exist on the Web2, we realized a big problem. Each citizen who wants to contribute to a project such as the creation of a school or an association, by financing it, loses money! At least objectively.
We started from the premise that this was not a fatality, because in the web 3, there is an adage that states that " With time, everyone wins ". That's why we believe that this problem can be solved by using Web 3 technologies and community. Our project has a very clear purpose : To transpose the funding for schools, associations, educational projects, from Web 2 to Web 3! With the challenge that there will be no more losers in such funding, but only winners, both for the projects and for their donators! Thus, we will improve in a notable way the education online or not, as well as our world through the possibility of financing ecological fights, against the global warming, or for example of the newspapers / free and independent media (Improve media's business models)!

# Solution


We are pleased to present our alternative financing solution for schools, but also for all educational projects, associations, journals, ...

Over the years, we have seen many beautiful causes (on paper) soliciting day after day a little more individuals. Whether it is for humanitarian, environmental, educational causes, or whatever the pretended cause, a fundamental problem persists. 
What happens to the funds, once the user is released from his donation? Can't we do more with the mobilization of so many people?
Until now, the traditional system only allowed a visibility mostly reduced to a bias of trust, and rewarded very little the people who invested themselves most often financially.
But today, thanks to the tools offered by new technologies such as the web3, it is possible to explore new answers to ever more pressing needs...

In addition to filtering out projects that are viable and have a tangible benefit to our future, Fund Together takes the step of proposing a vision where everyone wins.
In addition to providing the necessary visibility and funding for each project to flourish, a Fund Together staking campaign allows users bringing in liquidity to benefit from the tools provided by DeFi constituting a long-term return.
This income generated by the campaign stack is then shared between its liquidity provider, and the project's liquidity fund. This allows users to keep control of the stacked funds on a campaign that can be withdrawn when desired



## Technologies we use
### BLOCK CHAIN
**Network :**
- Bsc Testnet
- Node Real MegaNode Rpc Connection
**Stack :**
- Solidity (BSC Evm compatible)
- JS / Typescript for script 
- hardhat

### OFF CHAIN
In order for the web platform to properly work, we have used the following off-chain technologies :
**Back End :**
--- PHP 8
--- Composer
--- Symfony with object-relational mapping for database and CRUD ( mainly used as REST API )
--- MySQL
**Front End :**
--- REACT. JS (Used for managing almost everything, such as routes, fetch / POST data, forms, etc...)
--- Webpack encore (Symfony bundle), used to compile all JS, JSX, CSS and SASS.
--- Tailwind CSS ( With time constraint, we had to use a css framework haha )
--- CSS (Just some components)
--- MUI React component library (Just a little)

The biggest challenge for off chain development was **TIME**. That's really time consuming to make a dynamic front-end, a webapp that actually works with a minimum of bugs even for a few pages with this time constraint. We solve it by MVPing it as much as possible, not adding too much features, use frameworks for styles or data management, be fast on wireframing, and mostly working a lot of times on it haha !
(Note Wolfa' aka main offchain developer) : That wasn't easy because I mostly learnt React and tailwind during this project (Symfony was really easy and not time-consuming though)

# Team and comments
Our team name is **Fund Together!**, but we registered as "Swiss 42 Fund Together". We are a team of only 2 members !

### Julien Renault (Aka toolback)
This Hackaton allowed me to discover interesting partners for future projects like IExec or NodeReal (future play to earn which should be released in the year) but also quality speakers around Gather! I unfortunately didn't have time to finish the IbToken V2 part of the smart contracts as well as the integration of DeFi partner on the BSC, but it still leaves us some fun to work on the project after the hackaton and continue our learning! Looking forward to sharing events with you!  
### Nathanaël Godard (Aka Wolfa' or Nath)
I personally loved working on this hackathon ! Even if it was very tiring (I'm writing this at 06:24 on 25th hahaha), it was a real pleasure. I've learnt a lot, not by reading theory but by practicing on a real project. I learned a lot about blockchain and Web 3, I am basically self-taught in web 2 application development (Student at 42 Lausanne), even if I also learned a lot in classical development. That's actually the main part of my job: to make the site work, interact and display correctly haha. I learned a lot about react.JS & Tailwind CSS frameworks. It was a really good experience, which I will be able to add to my portfolio. Just for all of that, this hackathon was worth it, no matter how we'll rank! (Though I would also love to win haha)

### Perspective d'avenir pour le projet !
We sincerely think that our idea is excellent, that our project can work if we give ourselves the appropriate methods, by improving our applications, our smart contracts, etc... That's why we would like to develop it further, in a more professional way after this hackathon! If any of you, dear readers, are interested, do not hesitate to contact us : Wolfa'#2965


# Team and comments
## Our demonstration video : <https://youtu.be/a3wcvI6im48>
## Use of Starton and its partners :
Concerning the integration of partners around the Hackaton, we used 
- Starton for the deployment of an ERC721 template to offer a token access to our campaign creators, the custom deployment of smart Contract for our Usd Test, and the monitoring to follow and interact with all our deployed contracts.
- In NodeReal, we took advantage of MegaNode's functionality to deploy and interact with our smart contracts via a custom BSC node
- BSC Network, we have deployed all our contracts on the BSC Testnet in order to perform our tests, and later to test the walk before a launch on the BSC Mainnet
- IExec allowed us to implement a call API for the generation of random numbers used in the lottery. Moreover, we are also thinking of using a custom IExec oracle to build our future dynamic API for the IbToken V2
- We tried to integrate the Ledger connection as well, but I (julien) could not import the package without crashing the frontend

