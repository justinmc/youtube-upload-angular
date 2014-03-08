/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Youtube Upload Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
angular.module('youtubeUpload', []).directive('youtubeUpload', function() {
	'use strict';

    return {
        restrict: 'AE',
        templateUrl: '../dist/youtube_upload.html',
        replace: true,
        scope: {
            onUploadSuccess: '@',       // override upload callback
            onProcessingComplete: '@'   // override final callback
        },

        link: function($scope, $element, $attrs) {

            var youtube = {
                widget: null,
                player: null
            };

            var callbacks = {
                onUploadSuccess: onUploadSuccess,
                onProcessingComplete: onProcessingComplete
            };

            initialize();
            createEventHandlers();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize(idea) {

                // if not already loaded, load the youtube widget code
                if (!window.onYouTubeIframeAPIReady) {
                    loadYoutubeUploadWidget();

                // otherwise, create the widget now
                } else {
                    createYoutubeWidget();
                }
            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // set the callbacks if passed in
                $scope.$watch('onUploadSuccess', function(newValue, oldValue) {
                    if (typeof newValue === 'function') {
                        callbacks.onUploadSuccess = newValue;
                    }
                });
                $scope.$watch('onProcessingComplete', function(newValue, oldValue) {
                    if (typeof newValue === 'function') {
                        callbacks.onProcessingComplete = newValue;
                    }
                });
            }

            /* loadUploadWidget - create function 
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadYoutubeUploadWidget() {

                // 2. Asynchronously load the Upload Widget and Player API code.
                var tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                // create the function called by the widget
                window.onYouTubeIframeAPIReady = function() {
                    createYoutubeWidget();
                };
            }

            /* loadUploadWidget - create function 
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createYoutubeWidget() {

                //    The function loads the widget after the JavaScript code
                //    has downloaded and defines event handlers for callback
                //    notifications related to the widget.
                youtube.widget = new window.YT.UploadWidget('widget', {
                    width: 500,
                    events: {
                        'onUploadSuccess': callbacks.onUploadSuccess,
                        'onProcessingComplete': callbacks.onProcessingComplete
                    }
                });
            }

            /* onUploadSuccess - 4. This function is called when a video has been successfully uploaded.
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function onUploadSuccess(event) {
                window.alert('Video ID ' + event.data.videoId + ' was uploaded and is currently being processed.');
            }

            /* onProcessingComplete - 5. This function is called when a video has been successfully processed.
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function onProcessingComplete(event) {
                player = new YT.Player('player', {
                    height: 390,
                    width: 640,
                    videoId: event.data.videoId,
                    events: {}
                });
            }
        }
    };
});
