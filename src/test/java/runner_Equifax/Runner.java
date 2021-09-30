package runner_Equifax;

import cucumber.api.junit.Cucumber;
//import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src/test/resources/features/", glue = "stepDefs",
       plugin={"pretty", "html:results/html/cucumber.html"},

		monochrome = true 
		
		
		)
		
		//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html" })

public class Runner {

}
