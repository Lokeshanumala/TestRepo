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
  "line": 3,
  "name": "User sets the base API request \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User authenticates the API request with \"\u003ctoken\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "User sends the API request to get all the repositories",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User validate the response status is \"\u003ccode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
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
      "line": 8,
      "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;1"
    },
    {
      "cells": [
        "https://api.github.com",
        "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",
        "200"
      ],
      "line": 9,
      "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "User is able to validate the Github API Response",
  "description": "",
  "id": "test-github-api;user-is-able-to-validate-the-github-api-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User sets the base API request \"https://api.github.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User authenticates the API request with \"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\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "User sends the API request to get all the repositories",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User validate the response status is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.github.com",
      "offset": 32
    }
  ],
  "location": "APITestSteps.userSetsTheBaseAPIRequestURL(String)"
});
formatter.result({
  "duration": 1483762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "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",
      "offset": 41
    }
  ],
  "location": "APITestSteps.userAuthenticatesTheAPIRequestWithToken(String)"
});
formatter.result({
  "duration": 495002600,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.userSendsTheAPIRequestToGetAllTheRepositories()"
});
formatter.result({
  "duration": 3919649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "APITestSteps.userValidateTheResponseStatusIsCode(int)"
});
formatter.result({
  "duration": 4439901,
  "status": "passed"
});
});