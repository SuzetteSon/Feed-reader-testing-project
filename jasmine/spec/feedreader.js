/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function () {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    describe('RSS Feeds', function () {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function () {
            expect(allFeeds).toBeDefined(); //expect allFeeds to be a defined array
            expect(allFeeds.length).toBeGreaterThan(0); //expect the length of the allFeeds array to be more than 0
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URLs are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined(); //expect that the url in the object of each array index is defined
                expect(allFeeds[i].url.length).toBeGreaterThan(0); //expect that the url in the object of each array index is greater than 0
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('names are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined(); //expect that the name in the object of each array index is defined
                expect(allFeeds[i].name.length).toBeGreaterThan(0); //expect that the name in the object of each array index is greater than 0
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        let body = document.querySelector('body'); //define body as the <body> tag
        let event = $('.menu-icon-link'); //define event as the event from app.js line 100

        it('menu element is hidden by default', function () {
            expect(body.className).toBe('menu-hidden'); //expect <body> class name to be 'menu-hidden'
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu displays when clicked and clicked again', function () {

            event.click();
            expect(body.className).not.toBe('menu-hidden'); //expect the click to remove the class name

            event.click();
            expect(body.className).toBe('menu-hidden'); //expect the click to toggle the class name
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        let entries = document.querySelector('.feed').getElementsByClassName('entry');
        //define entries as the entries in the feed <div>
        beforeEach(function (done) {
            loadFeed(0, function () { //ensure an asynchronous function
                done();
            });
        });

        it('loadFeed function has at least a single .entry element within the .feed container', function (done) {
            expect(entries.length).toBeGreaterThan(0); //expect the length of the entries to be greater than 0
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let initialentries;
        let newentries = document.querySelector('.feed').innerHTML; //define newentries as the entries in feed after the loadFeed function has run

        beforeEach(function (done) {
            loadFeed(0, function () {
                initialentries = document.querySelector('.feed').innerHTML; //define initialentries as the entries in the feed before the loadfeed function runs

                loadFeed(1, function () { //ensure an asynchronous function
                    done();
                });
            });
        });

        it('after loadFeed function ran, content actually changes', function () {
            expect(initialentries).not.toBe(newentries); //expect the initialentries and the newentries to not be the same.

        });
    });

}());