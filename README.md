# Grunt boilerplate for web designers

> **Grunt boilerplate for web designers** provides a nice file and folder structure to aid web-designers kickstart their next project. It will help you in the development and deployment process of any HTML-based template (and not only). Some of the features that you get out of the box are:

- SMACSS (Scalable and Modular Architecture for CSS) ready infastructure (http://smacss.com/)
- Compile Sass files
- Compass and Burbon support
- JsLinter
- CSS, JS and HTML minification
- Image optimizasion

## Installation

Follow the [Getting started with Grunt](http://gruntjs.com/getting-started) for an in-depth look at setting up Grunt, but basically:

1. Boot up Terminal
2. Make sure to have **[Node.js](http://nodejs.org/download/)** installed. (Plus Sass)
3. You need to install Sass `gem install sass` and Image Optimization gem `gem install image_optim` (find out how to install gems here(http://guides.rubygems.org/rubygems-basics/)
4. Install **Grunt CLI globally** `npm install -g grunt-cli`
5. `cd` to your project folder
6. Git clone, or download the zip from https://github.com/tsevdos/Grunt-boilerplate-for-web-designers.git
7. Install Grunt and required grunt tasks `npm install`
8. Run `grunt server` and enjoy


## Tasks

1. grunt (default task)
2. grunt test
3. grunt release
4. grunt server


## Directories and files

Your "development" environment is the in the "app" directory - you do all the work there. (Write more regarding the public folder).

## TODO:

- Optimize some tasks
- fix the "Port 35729 is already in use by another process"