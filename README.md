# AST-GLOBAL-XOS-microsite

**STAGING**
- The staging instance **MUST** point to the `public` directory
- Updates to the staging files in the above directory should be made by running `gulp dist`
  - the `build` directory is ignored in `.gitignore` because all files are tracked in `src` and `public`

# OVERVIEW
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Commands](#commands)


## Prerequisites

You must have the below packages installed on your computer. This is also a good time to check if the packages are up to date.

### [Ruby](https://www.ruby-lang.org/en/documentation/installation/)

Bring up a terminal and type `ruby -v` to check if you have ruby installed. If you have Ruby installed it's best to run the command `gem outdated` to see which of your installed gems need updating. Update your gems by running `gem update`


### [Node.js](https://nodejs.org)

Bring up a terminal and type `node -v`. Currently, the latest node version is at 9.8.0


### [npm](https://docs.npmjs.com/getting-started/installing-node)

Node comes with npm but it is updated more frequently. Run `npm -v` Currently, the stable npm version is above 5.7.0

To update to latest version run `npm install npm@latest -g`


### [gulp 4](https://www.fastless.com/gulp-4/)

If you have not upgraded to Gulp 4 before you will first have to remove gulp `npm uninstall -g gulp`

Then install the latest Gulp 4 CLI tools globally `npm i -g gulp-cli`. Run `gulp -v` and you should now see `CLI version 2.0.1` or higher.


---

# SETUP

1. Check your above prerequisites are up-to-date
2. Run:

```sh
$ npm install
```


## Structure

A list of sources and related directories can be found and adjusted in `config-workflow.json`. General structure and flow below.

### Handlebars
- `/src/_hbs-templates`
  - Handlebar Partials, Helpers, and Data examples have been included. The Debug option is set to true (/gulp-tasks/handlebar-tasks.js line 36) which shows you which handlebar parts are available to you.

### General Assets
- `/src/_assets/js`
  - **Babel** is being used when Javascript components are compiled
  - make changes to js here and updates will be compiled and optimized into build through gulp tasks
  - files in `/src/_assets/js/vendor` have separate rules in the gulp tasks. For example, babel is not used when vendor files are compiled
  - **destination** `/build/_assets/js`
- `/src/_assets/scss`
  - autoprefixer is being used via gulp
  - **destination** `/build/_assets/css`
- `/src/_assets/img`
  - images will be optimized through the distribution gulp workflow but any pre-optimization is welcome
  - **destination** `/build/_assets/img`

### General Build
- `/src`
  - This build is using handlebars - work in the `/src` DO NOT change the HTML in `/build` because your work will be overwritten by the gulp task
  - working files are served from `/build` via Browser Sync when running gulp

### Distribution
- `/public`
  - **DO NOT** make edits to these files because the gulp workflow will override them
  - These files are served on staging


---

# COMMANDS

## For Builds

**For Development in '/build'**
```sh
$ gulp
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network. Press Ctrl-C to quit.

**Run optimization and move any updated riles to '/public'**
```sh
$ gulp dist
```

**NOTE:** USE `gulp --tasks` to list out all tasks
