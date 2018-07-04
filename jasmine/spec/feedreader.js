/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */

$(function () {

    // This suite is about the RSS feeds definitions, the allFeeds variable in the application.
     

    describe('RSS Feeds', function () {

        // This test makes sure that the allFeeds variable has been defined and that it is not empty.

        it('are defined', function () {
            expect(allFeeds).toBeDefined(); //expect allFeeds to be a defined array
            expect(allFeeds.length).toBeGreaterThan(0); //expect the length of the allFeeds array to be more than 0
        });


        // This test loops through each feed in the allFeeds object 
        // and ensures it has a URL defined and that the URL is not empty.


        it('URLs are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined(); //expect that the url in the object of each array index is defined
                expect(allFeeds[i].url.length).toBeGreaterThan(0); //expect that the url in the object of each array index is greater than 0
            };
        });

        // This test loops through each feed in the allFeeds object 
        // and ensures it has a name defined and that the name is not empty.


        it('names are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined(); //expect that the name in the object of each array index is defined
                expect(allFeeds[i].name.length).toBeGreaterThan(0); //expect that the name in the object of each array index is greater than 0
            }
        });
    });

    // This suite is about the menu

    describe('The Menu', function () {

        // This test ensures the menu element is hidden by default.

        let body = document.querySelector('body'); //define body as the <body> tag
        let event = $('.menu-icon-link'); //define event as the event from app.js line 100

        it('menu element is hidden by default', function () {
            expect(body.className).toBe('menu-hidden'); //expect <body> class name to be 'menu-hidden'
        });

        // This test ensures that the menu changes visibility when the menu icon is clicked. 
        // This test should have two expectations: does the menu display when clicked 
        // and does it hide when clicked again. 

        it('menu displays when clicked and clicked again', function () {

            event.click();
            expect(body.className).not.toBe('menu-hidden'); //expect the click to remove the class name

            event.click();
            expect(body.className).toBe('menu-hidden'); //expect the click to toggle the class name
        });
    });

    // This suite is about Initial Entries

    describe('Initial Entries', function () {

        // This test ensures that when the loadFeed function is called 
        // and completes its work, there is at least one .entry element within the .feed container.
        // loadFeed() is asynchronous so this test requires
        // the use of Jasmine's beforeEach and asynchronous done() function.


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


    // This test suite is about "New Feed Selection"

    describe('New Feed Selection', function () {

        // This test ensures that when a new feed is loaded by the loadFeed function
        // and that the content actually changes.
        // loadFeed() is asynchronous.

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