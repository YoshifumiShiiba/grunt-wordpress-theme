# grunt-wordpress-theme

[grunt-init][] for WordPress theme building.

## Following features

Features using with grunt.

* Compass: Sass, Scss
* CoffeeScript
* Twitter Bootstrap 2.3.2


[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation

In your `~/.grunt-init/` directory. Git clone this template into this directory:

```
git clone https://github.com/YoshifumiShiiba/grunt-wordpress-theme.git ~/.grunt-init/wordpress-theme
```

## Usage

At the command-line, cd into an empty directory, run this command.

```
grunt-init wordpress-theme
```

Install the NPM modules required to actually process your newly-created project by running:

```
npm install
```

After running all setups, follow this command and use grunt and starting coding:

```
grunt watch
```

If You want to use Twitter Bootstrap in your sass file, Put this code:

```
@import ../vendor/sass-twitter-bootstrap/bootstrap
@import ../vendor/sass-twitter-bootstrap/responsive
```


