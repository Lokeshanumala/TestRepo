package stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class APITestSteps {

    RequestSpecification request;
    Response response;


    @Given("^User sets the base API request \"([^\"]*)\"$")
    public void userSetsTheBaseAPIRequestURL(String url) {
        RestAssured.baseURI = url;
       
    }

    @Given("^User authenticates the API request with \"([^\"]*)\"$")
    public void userAuthenticatesTheAPIRequestWithToken(String token) {
        request = given().auth().oauth2(token);
    }

    @When("^User sends the API request to get all the repositories$")
    public void userSendsTheAPIRequestToGetAllTheRepositories() {
        String path ="/users/repos";
        
        response = request.get(path).then().extract().response();
        
    }

    @Then("^User validate the response status is \"([^\"]*)\"$")
    public void userValidateTheResponseStatusIsCode(int code) {
        Assert.assertEquals(code, response.getStatusCode());
    }
   
}
