# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application included [Jasmine](http://jasmine.github.io/) and started writing their first test suite, but decided to move on to start their own company and I had to complete the test suite.

# Running the application

To run the application, open the index.html file in a JavaScript-enabled browser.

# I completed this project by:

1. Downloading the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Reviewing the functionality of the application within my browser.
3. Exploring the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
4. Exploring the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
5. Editing the `allFeeds` variable in **./js/app.js** to make the provided test fail and to see how Jasmine visualizes this failure in my application.
6. Returning the `allFeeds` variable to a passing state.
7. Writing a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
8. Writing a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
9. Writing a new test suite named `"The menu"`.
10. Writing a test that ensures the menu element is hidden by default.
11. Writing a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
12. Writing a test suite named `"Initial Entries"`.
13. Writing a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
14. Writing a test suite named `"New Feed Selection"`.
15. Writing a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
16. Ensuring that no test is dependent on the results of another.
17. Ensuring callbacks are used so that feeds are loaded before they are tested.
18. Implementing error handling for undefined variables and out-of-bound array access.
19. Ensuring when complete - all of my tests should pass. 
20. Writing a README file detailing all steps required to successfully run the application.
