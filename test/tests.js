var assert = chai.assert;

describe('youtube-upload', function() {

    describe('creation', function() {
        it('should create global onYouTubeIframeAPIReady function', function(done) {

            // set a timeout to allow angular to set up
            window.setTimeout(function() {
                assert.equal(typeof window.onYouTubeIframeAPIReady, 'function');
                done();
            }, 1000);
        });
    });
});

