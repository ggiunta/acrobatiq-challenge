# Acrobatiq Challenge

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node v13.7.0 or higher

### Installing

Clone repo

```
git clone https://github.com/ggiunta/acrobatiq-challenge.git
```

Install using NPM

```
npm install
```

## Running the tests using the runner

1. Start Cypress local test runner

```
./node_modules/.bin/cypress open
```

2. Select the browser you want to run the tests on (top right corner of the runner window)

3. Click on the test on the list you want to run, or click *Run all specs* to run the suite

## Running the tests headless using the command line

```
npx cypress run --headless
```