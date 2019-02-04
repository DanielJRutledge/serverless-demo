This project is designed for a JavaScript workshop to introduce college students to a working JS application.

# Installations
Install Node 8
* Directions: go to https://nodejs.org/en/download/ and click on the Windows or MacOS Installer, and then follow the directions

Install Git
* The link is here https://git-scm.com/downloads and the same directions apply: click on the appropriate OS.

# Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This is super cool and easy to use - check out their repo to start your own app!

# Skyscanner API
This project uses the [Skyscanner API](https://partners.skyscanner.net/affiliates/travel-apis/). You will need [a free API key](https://partners.skyscanner.net/contact/affiliates).

Once you have an API key, you can play around with [RapidAPI](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) to test getting different results from Skyscanner.

# How do I get this repo running on my machine?
There are a few options for accessing this code so that you can use it. We'll start with the least difficult option.

1. Download the zip file
  * At https://github.com/DanielJRutledge/serverless-demo look to the right for a button called "Download Zip".
  * Click this button, and save to a convenient location on your computer.
    * Mac: click on the downloaded zip to install.
    * Windows: right-click and WinZip to install.

2. Command Line + Git
  * If you have some knowledge of Command Line and have Git installed, you can follow these steps:
	  * cd to a desired folder
    * git clone https://github.com/DanielJRutledge/serverless-demo.git

Once you have cloned the repo, you'll need to do a few things.

In the command line, navigate to the new serverless-demo directory.
* run `npm install`
* after npm install is complete, then run `npm start`
* you should be able to access the app in the browser at http://localhost:3000/

# Stretch goals
This app uses [Material-UI](https://material-ui.com/). See if you can update the color scheme to dark mode [(hint!)](https://material-ui.com/style/color/).
 
Try adding a new dropdown with a list of cities. When the user selects a city, a new list of results displays.