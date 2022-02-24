Mind Reader

DESCRIPTION
Create a single page web app that plays a game with the user to read their mind.

For this project, we will be implementing state management. 

The focus is to use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.
By default, the app should prompt the user to click through the single-page app and see a new view for every step.

You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).

The mind reader also happens to have a fun math gimmick based on the factors of 9. This is not something you need to program, people will do the math in their heads.
OBJECTIVES
Learn how to use state using the Mind Reader project
WIREFRAMES
Use the wireframes provided to recreate the User Interface.  Try to deliver the solution as close to the design as possible.


Live Wireframe
REQUIREMENTS
To complete the assignment, you must complete the following:
Pseudocode the problem in its entirety before you start coding
Use JavaScript to successfully show the transition from one view to the next view
Successfully show state management for each step of the single page app ("view" 1, 2, 3, ...)
Only create a single index.html
No need to refresh the page (manually or using JS)
Update state using a variable that tells the computer what 'view' it is
Use functions to move forward a view, backward, reset to the first view, and display the correct view on load / after every state change
Use Icons of your choice, we recommend either Bootstrap Icons (best) or Font Awesome (second best) but feel free to find your own
All multiples of 9 should be the same symbol (this is important for the math gimmick to work)
Remember to push to GitHub!
Potential employers will view your GitHub profile, so activity is crucial!
PROCESS
Tech Stack
HTML
CSS
Bootstrap
JavaScript
Setup
Create a new GitHub repo and name it ‘mind-reader’.
Create necessary files for the application in your terminal and view and modify them in your editor.
Import and route necessary css/js files (E.g. Bootstrap, main.js, style.css).
Save all and create your first commit to main, then create and switch to a ‘dev’ branch.
Application File Structure
repo/
    index.html - your main page

    css/ - folder to contain CSS files
        style.css - main stylesheet

    img/ - folder to contain any images

    js/ - folder to contain JavaScript files
        main.js - main JavaScript file

    README.md - any important info like a log of changes and a wishlist

    pseudocode.md - pseudocode first!

    .gitignore - a file that omits any directory/file from being tracked



Develop
Use your pseudocode to start coding
Transition from Pseudocode to Procedural Code
Tip: When the page loads start with an init function to setup the next series of subroutines
Transition from Procedural Code to Functional Code
Tip: When the init function is invoked you can invoke other functions like “setState” or “buildUserInterface” or “getData”.
Transition from Functional Code to Object Oriented Code
Tip: All of the project’s properties, state, and methods (subroutines) can be encapsulated within a single object: mindReader.
Note: This might be tougher for some.  It is not expected to create Objects from scratch just yet.  Feel free to try.
Refactor as needed
Debug often using DevTools’ console, elements, sources
Tip: Use breakpoints for better control of your code while debugging
Test often
Save often
Commit and Push to your branch on GitHub when important changes happen
Deploy
Create a Pull Request from your ‘working’ branch into the ‘dev’ branch on GitHub
Confirm code is up to date without any conflicts and merge into dev
Allow your page to be viewed as a website
Follow this guide: https://pages.github.com/
Submit your final working version and GitHub Repo URL in the Google Classroom assignment
If you finish early
Add info to your project's README.md
README.md Best Practices
Share links and resources from this week to the Help slack channel.
Stretch Goals
Keep track of the users' current page if they accidentally refresh using LocalStorage
Tip: See additional resources.
Dynamically generate content using JavaScript
Tip: Initialize, BuildUI, Start would be a good start to doing everything in JS
Dynamically change CSS with JavaScript
Tip: Alter a css property of a dynamic or static element
Connect the Browser’s Back Button to the State to allow for forward and backward navigation via the Browser.
Resources
Ask questions 
Learn more about Good GitHub Practices
Bootstrap
W3 schools local storage
Bootstrap hide element
JavaScript Transitions
Wiki page about SPA
