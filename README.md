# infodemic.cc
Chrome Extension that will (eventually) allow users to check and see if any given article is the product of coordinated inauthentic behavior (CIB).

## Table of Contents
1. [Overview](#overview)
   * [Description](#description)
   * [Modules](#modules)
2. [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
3. [Running the Code](#running-the-code)
4. [Directory](#directory)
   * [Included Files](included-files)
   * [License](#license)
## Overview
### Description
Infodemic.cc as an extension is a Chrome Extension that allows the user to output all the text in a certain webpage and then copy it to their clipboard. Eventually it will be able to scan through the page and determine the likelihood that the page is the product of coordinated inauthentic behavior.

For now, it's just a simple chrome extension that operates off of 1 or 2 buttons.

### Modules
The application has 4 main modules:

* `manifest.json` - This module is the metadata for our extension and tells Chrome what files it will use, what permissions are needed, and how the extension will behave.

* `background.js` - This JavaScript file is a Service Worker that runs in the background and determines long-term behavior of the extension.

* `popup.html` - This HTML file contains the code for what pops up on the screen when the extension is clicked from the extension toolbar.

* `popup.js` - This JavaScript file contains the long-term behvaior of the popup window.

## Getting Started

Follow these steps to set up and run the infodemic.cc program:

### Prerequisites

- Google Chrome Browser: Please ensure that you are using the latest version of Google Chrome.


## Running the Code

1. Download the Extension
    1. Download or clone this repository to local machine.

2. Enable `Developer Mode` in Google Chrome
    1. Open Google Chrome
    2. Navigate to `chrome://extensions`
    3. Enable the `Developer Mode` switch from the top right

3. Upload the extension to Chrome
    1. Click on `Load unpacked`
    2. Select the directory where you have saved the extension's files
    3. The extension should now appear in your list of extensions

4. Using the extension
    1. Navigate to any Webpage
    2. Click `Output Page Text`
    3. Copy the Output text



## Directory

### Included Files

### License
[MIT](https://choosealicense.com/licenses/mit/)