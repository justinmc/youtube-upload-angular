youtube-upload-angular
======================

An Angular wrapper on the [YouTube Upload Widget](https://developers.google.com/youtube/youtube_upload_widget)

## Usage

 - Include the `dist/youtube_upload.min.js` and `dist/youtube_upload.html` files in your project.

 - Include youtube-upload as a dependency for your Angular app:

        var myApp = angular.module('MyApp', ['youtube-upload']);

 - Then simply use the directive in a template:

        <div youtube-upload></div>

## Parameters

### on-upload-success

This parameter expects a function to call after the video has finished uploading.  If none given, then it uses the [default onUploadSuccess function given by YouTube](https://developers.google.com/youtube/youtube_upload_widget).

    <div youtube-upload on-upload-success="myUploadCallback()"></div>

### on-processing-complete

This parameter expects a function to call last - after the video has been uploaded, finished processing, and is available on YouTube.  If none given, then it uses the [default onProcessingComplete function given by YouTube](https://developers.google.com/youtube/youtube_upload_widget).

    <div youtube-upload on-processing-complete="myProcessingCallback()"></div>

## Build from a fresh clone

    npm install
    bower install
    gulp

## Example and Testing

An example and (small) test suite is located at `test/index.html`.  You might have to serve the root of this project, then navigate to this file to view it due to browser permissions.
