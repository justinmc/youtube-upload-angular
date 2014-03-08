var assert = chai.assert;

describe('youtube-upload', function() {

    beforeEach(angular.mock.module('App'));

    describe('creation', function() {
        it('should create global onYouTubeIframeAPIReady function', function() {
            assert.equal(typeof window.onYouTubeIframeAPIReady, 'function');
        });
    });
});

