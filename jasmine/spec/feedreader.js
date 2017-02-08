/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        var len = allFeeds.length;

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('contain defined URLs', function(){
            for(var i = 0; i < len; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        it('contain defined names', function(){
            for(var i = 0; i < len; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function(){
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('displays on click', function(){
            $('.icon-list').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
        });

        it('hides on click', function(){
            $('.icon-list').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);  
        });

        it('are in the feed container', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var currentTitle, newTitle;

        beforeEach(function(done){
            loadFeed(0, function(){
                currentFeed = $('.feed').html();
                loadFeed(1, function(){
                    newFeed = $('.feed').html();
                    done();
                });   
            });
        });
        
        it('has loaded a new feed', function(){
            console.log(currentFeed);
            console.log(newFeed);
            expect(currentFeed).not.toBe(newFeed);
        });
    });
}());
