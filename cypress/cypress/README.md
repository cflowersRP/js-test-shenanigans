* Before Running: create a crendentials.js file in the `env` directory.
* Update URLS in the integration specs to hit your PG / webserver / whatever is running and being tested.

yarn run cypress run: Executes cypress cli
yarn run cypress run --spec "cypress/integration/my-cool-app.spec.js": Executes specific spec in CLI
yarn run cypress open: Opens cypress window / test runner app