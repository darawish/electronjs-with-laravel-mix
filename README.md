# Using Laravel-mix with Electron APP 


This app can be used as a starting point for you if you want to build a desktop app using electron.
It is backed with:
1. [Laravel-mix](https://laravel-mix.com).
2. [Vuejs](http://vuejs.org/)
3. [Electron build](https://www.electron.build)

By default it will skip signing your mac application.


## Compile your code:

You can simply compile your code by running `yarn production` or `yarn dev` as you wish, then running `yarn start` will
start your electron app.

Compiling your code will run laravel-mix commands and produce the required files at the `app` directory.


## Build your app

You can run the command `yarn run build-it` which will compile your code and run the build process for you.

## NOTE:

This is still a **work in progress** which means you may face some problems, it would be nice to share it with us.
We only tested the code on Mac, so we are not sure if it will fully work on windows or linux.
