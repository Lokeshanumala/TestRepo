$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APITest.feature");
formatter.feature({
  "line": 1,
  "name": "Test Github API",
  "description": "",
  "id": "test-github-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User is able to validate the Github API Response",
  "description": "",
  "id": "test-github-api;user-is-able-to-validate-the-github-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User sets the base API request \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User authenticates the API request with \u003ctoken\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User sends the API request to get all the repositories",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User validate the response status is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-github-api;user-is-able-to-validate-the-github-api-response;",
  "rows": [
    {
      "cells": [
        "URL",
        "token",
        "code"
      ],
      "line": 9,
      "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;1"
    },
    {
      "cells": [
        "https://api.github.com",
        "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",
        "200"
      ],
      "line": 10,
      "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User is able to validate the Github API Response",
  "description": "",
  "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User sets the base API request https://api.github.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User authenticates the API request with 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",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User sends the API request to get all the repositories",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User validate the response status is 200",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});