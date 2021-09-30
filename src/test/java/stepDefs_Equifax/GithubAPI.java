package stepDefs_Equifax;

import org.junit.Test;

import static io.restassured.RestAssured.given;

public class GithubAPI {

    String apiToken ="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";
    String url="https://api.github.com";
    @Test
    public void verifyRepos(){
        String url_new = url + "/user/repos";
        given().auth().oauth2(apiToken).when().get(url_new).then().log().all();
    }
}
