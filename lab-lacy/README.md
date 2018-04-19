# Async Callbacks
**Author**: Lacy Hogan
**Version**: 1.0.0
## Overview
This application takes an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.
## Getting Started
Load the required dependencies. 
## Architecture
JavaScript, Node, Air BNB linter, package.json, babelrc.

There is one exported module, reader. It takes in one function, readFirstBook, which has an airty of two, paths and a callback. path is a string and callback is a function to be called at a later time. When valid, a list of each books contents will be displayed. If invalid, an error or null will be displayed.
## Change Log
04-18-2018 3:45pm - Began application
04-18-2018 4:30pm - Completed reader.js
04-18-2018 5:10pm - Completed main.js
04-18-2018 5:30pm - Able to get code to run properly in terminal
## Credits and Collaborations
Michael Stuart
