# KIT Onboarding

Hello! Welcome to KIT! If you have questions or are stuck at any point, please ask one of your team members. This goal of this guide is to have all the necessary tools to get started with developing on KIT. 

## Installing the necessary tools

1. Install a text editor
If you don't have a text editor installed, I recommend VS Code. Install the Prettier extension and change the settings to autoformat on save.

2. Install Node
Choose the LTS version. Node is a JavaScript runtime environment so you can run JavaScript on your computer, outside of the browser. 

## GitHub setup

3. Make a Github account and send your username to the owner of the repository (Kristie).
You will be given access to the repo. 

4. Clone this repository.
Click the big green button that says "Clone or download" on the first page of the repository. Copy the link and open your terminal. If the terminal is unfamiliar to you, try this [guide](https://medium.com/@grace.m.nolan/terminal-for-beginners-e492ba10902a).
  ```git clone <the link that you copied but without the angle brackets>```.

## Run the app

5. The first time you clone the repository, run ```npm install```.
This will download all dependencies into a folder called `node_modules`. Dependencies are other libraries of code that were written by other people that are used in the project.

6. Start the app by running ```npm start```.
You should see your browser open a new window and a QR code in your terminal. 

7. Take your phone and follow the instructions in scanning the QR code. If you want to develop just on your computer, you can download an iOS or Android simulator. 
If you have XCode, you already have an iOS simulator so just select "Run on iOS simulator." You should see the app come up on your phone or simulator.

8. Feel free to play around in the app and with the code, but we'll go over it more in our next meeting. Exit by pressing Ctrl+C in your terminal. 

## Make your first PR

9. Create a new branch with ```git checkout -b your-name/documentation```.

10. Edit the `documentation/onboarding.md` file. Add explanations for what you thought was confusing or update anything incorrect. Screenshots are helpful. 
Also, this is a markdown file, so search up "markdown" to learn what all the strange symbols mean. 

11. Add your changes with ```git add .```.

12. Commit your changes. Write a descriptive message such as "Added xyz to onboarding doc". ```git commit -m 'Added xyz to onboarding doc```. Everytime you make a change and you feel like you've reached a good stopping point, add and commit your new changes. 

13. Push your changes with ```git push```. This will take the changes on your local computer and push them to GitHub. 
You probably will get an error message saying you need to run ```git push --set-upstream```. Copy and run that command. 
This happens the first time you try to push to your branch.

14. Go to GitHub and click "Open a new pull request" for the branch that you just pushed to.

15. Fill out the descriptions. This is more for complex features/code and not for really updating documentation, so you might think "Why are there so many explanation things I have to fill out?" But this PR is just for practice. 
Usually, you'll want to explain what feature you added, add screenshots, and explain what you tested.

16. Request a reviewer. Choose someone that you haven't asked to review your code before. Wait for a reviewer to get back to you.
If you're the reviewer, write comments on anything you're confused about or you think is incorrect.

17. Once your change is approved, merge to the master branch. 
