# Ng Electron

Seed project for Angular version 5.2.0 and Electron version 1.7.12.

## Table of Contents

* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installing](#installing)
* [Running the test](#running-the-tests)
* [Development Server](#development-server)
* [Building](#building)
* [Built With](#built-with)
* [Versioning](#versioning)
* [Authors](#authors)
* [License](#license)
* [Acknowledgments](#acknowledgments)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project have dependencies that require Node 6.9.0 or higher and NPM 3 or higher.

Check Node version

```
node -v
```

Check NPM version

```
npm -v
```

### Installing

Clone `ng-electron` repository using git:

```
git clone https://github.com/jsalazar87/ng-electron.git
cd ng-electron
```

Install dependencies

```
npm install
```

## Running the tests

Run `npm test` for unit testing on your default browser

Run `npm run e2e` for end-to-end testing on your default browser

## Development Server

Run `npm start` for a dev server. 
[Angular CLI](https://github.com/angular/angular-cli) will start the server on `http://:4200/` and 
[Electron](https://github.com/electron/electron) will open once the app is ready. 
The app will automatically reload if you change any of the source files.

## Building

Run `npm run build`. [Angular CLI](https://github.com/angular/angular-cli) will store the build files on `dist/` folder. 
[Electron-Packager](https://github.com/electron-userland/electron-packager) will use the `dist/` to package [Electron](https://github.com/electron/electron) for
Windows.

## Built With

* [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
* [Electron](https://github.com/electron/electron) version 1.7.12
* [Electron Packager](https://github.com/electron-userland/electron-packager) version 11.0.0

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jose Salazar** - *Initial work* - [JSalazar87](https://github.com/jsalazar87)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Get an angular and electron environment for production and development.







