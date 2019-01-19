# Kubescale Portal

This project is the front-end component of the Kubescale monitoring system. It is a web application built with Angular 7 and interacts with the eventserver, metrics API and predictions API.

## Deployment
The following steps describes how to deploy the web application to an operative state:
1. Download and install [NodeJS](https://nodejs.org/en/).
1. Download the source code for the web application.
1. Run the following command from the command line in the root of the web application directory to install required dependencies of the project - `npm install`.
1. Change the value of the variables `apiServerTargetAddressBase`, `predictionServerTargetAddressBase` and `eventServerTargetAddressBase` to the base addresses of the event server, metrics API and predictions API in the file */src/app/services/global-service/global.service.ts*
1. Run the following command from the command line in the root of the web application to build the application - `ng build`.
1. Copy everything from the folder *dist* in the source code root to the root folder of any arbitary web server.
