# Flahmingo Coding Challenge

A coding challange application built in React-Native for android devices

## Assumptions

1. Sign in and sign up screens and logic already exists
1. Current app buid simulates user interraction from the welcome onboarding screen to the application portfolio screen

## Solution formulation

Steps I thought of and executed for carrying out the coding challenge

1. Created a repo (https://github.com/CeeJayyy007/Flahmingo_Coding_Challenge.git)
1. Created a branch (my-fix-branch) that handled all PRs from local repositories which were then merged to the master branch
1. Created the file structure and compartmentalized screens, components, assets, themes and constants to unique files in folders to aid interrelations
1. Created navigators with tab navigators to handle navigation between screens

## Libraries/Tools used

- Dependencies: All depencies and packages used are in the package.json file
- Written in Javascript with some ES6 syntax and ran on Node v14.15.1
- Will use Jest for testing

## How to setup

Run the following commands to setup, given `node` and `npm` is available:

1. git clone git@github.com:CeeJayyy007/Flahmingo_Coding_Challenge.git
1. cd coding_challenge
1. npm install
1. npx react-native run-android

- Additional installation note: Application splash screen was created using the package git@github.com:crazycodeboy/react-native-splash-screen.git. (This can come in handy incase you run into any issues during installation).

## Decisions and tradeoffs

1. Use of basic require and imports were used for ease and depending on use cases.
1. I have chosen more of a functional/procedural path with more pure functions than object oriented pattern. I think it is better in this small problem space.
1. There are a lot of places to improve if more time was available and in the event that it was a more robust project.

## Some key improvement points

1. More emphasis to be placed on code organization and less usage of inline styling. I would have opted for the use of StyleSheet to keep styling centralized thereby reducing duplication of styles and improving centralised fixes or updates, however, I opted for inline styling due to my desire to achieve pixel perfect UI and to carry out more work in the time alotted.
1. Carrying out the challenge with emphasis on Test Driven Development rather than opting for including tests after submission (as is my case). I chose this path because I wanted to present as many varying interfaces as possible which will make testing more robust and the process of fixing likely issues will enable me show my issue spotting and resolution skills.

## Limitations and Challenges

1. I was not able to get the required API data from polygon.io for the rainbow charts and the time available wasn't sufficient for designing the charts and tables present in the figma UI design. I had the option of using an API from www.coingecko.com becasue the data obtained there contains sparkline data useful for rainbow charts. However, I opted against that option as the challenge advised the use of polygon.io plus, coingecko only provides data for crypto coins.
1. Initial issues with Typescript which I promise to learn going forward as the little interraction I had with it in the beginning of this challenge sure provided the clear benefits of Typescript for developement and testing.

## Final Words

I will like to humbly use this medium to extend my profound gratitude to you and the team for taking time out to administer this challenge, review it and give your assessments. I must confess that the process, though challenging, has been one filled with lessons, growth and a lot of introduction to tools and standard systems of operation and programming to which I am eternally grateful. Wishing you and the team the very best!
