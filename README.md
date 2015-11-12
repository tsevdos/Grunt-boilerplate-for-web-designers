# Grunt boilerplate for web designers

**Grunt boilerplate for web designers** provides a nice directory and file structure to aid web-designers kickstart their next project. It will help you in the development and deployment process of any HTML-based template (and not only). Some of the features that you get out of the box are:

- [SMACSS (Scalable and Modular Architecture for CSS) ](http://smacss.com/) ready infrastructure
- Compile Sass files
- [Compass](http://compass-style.org/) and [Burbon](http://bourbon.io/) support
- JsLinter
- CSS, JS and HTML minification
- Image optimization
- Live-reload

## Installation

Follow the [Getting started with Grunt](http://gruntjs.com/getting-started) for an in-depth look at setting up Grunt, but basically:

1. Boot up Terminal
2. Make sure to have **[Node.js](http://nodejs.org/download/)** installed.
3. You need to install [Image Optimization gem](https://rubygems.org/gems/image_optim) (`gem install image_optim`). Find out how to install gems [here](http://guides.rubygems.org/rubygems-basics/)
4. Install **Grunt CLI globally** `npm install -g grunt-cli`
5. `cd` to your project folder
6. Git clone (`git clone git@github.com:tsevdos/Grunt-boilerplate-for-web-designers.git`) or download the zip from [https://github.com/tsevdos/Grunt-boilerplate-for-web-designers](https://github.com/tsevdos/Grunt-boilerplate-for-web-designers)
7. Install Grunt and required grunt tasks `npm install`
8. Run `grunt serve` and enjoy

## File structure

Your **development environment** is the into the **app directory** - you do all the work there. Whenever you are ready you can **build** the work by running the `grunt` task. This task will generate a **public directory** that will contain all your files (CSS, JS, HTML and images) optimized and ready to distribute/upload/share.

## Tasks

You can run the below tasks.

1. `grunt` (default task) : Creates a `public` directory with all the optimized files (read **File structure** section for more details).
2. `grunt serve` : Probably the most usable task. Just run this task and work elegantly with live-reload, Sass compilation and JS linting on your localhost (http://localhost:8000).
3. `grunt test` : Lints the Javascript files.


## TODO:

- fix the "Port 35729 is already in use by another process"