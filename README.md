## Jasmine-Karma-Angular
Hands-on practice where App, component and Services are tested using [Jasmine](https://jasmine.github.io/) following behavior-driven development methodology written in JavaScript code. Two of the most valuable things in this framework is that DOM is not required to run the tests, and the syntax is clean and understandable. Automation of testing tasks in the environment has been done by [Karma](https://karma-runner.github.io/latest/index.html) as test-runner, where results are displayed either through command line or the browser.

<hr>

### Testing files...
The convention for Angular applications is to have a `.spec.ts` file for each source file, it is run from Angular CLI by the command `ng test`. As following the ones in this project...

* **app.component.spec.ts**
* **lazy.component.specs.ts**
* **sharing.service.spect.ts**
* **utilities.service.spec.ts** 

<hr>

### Functions and expressions used...
→ The **describe** function defines what we call a Test Suite, which is a collection of individual Test Specs.<br>
→ The **it** function defines an individual Test Spec, this can contains one or even more Test Expectations.<br>
→ The **expect**(actual) expression is what we can call an Expectation. It describes an expected piece of behaviour in your application.<br>
→ The **matcher**(expected) expression is what we call a Matcher. It does a boolean comparison with the expected value and the actual value passed, it will fail if they are false. <br>
<details>
  <summary>Pre-built Matchers...</summary>

expect(**array**).toContain(**member**);
expect(**fn**).toThrow(**string**);
expect(**fn**).toThrowError(**string**);
expect(**instance**).toBe(**instance**);
expect(**mixed**).toBeDefined();
expect(**mixed**).toBeFalsy();
expect(**mixed**).toBeNull();
expect(**mixed**).toBeTruthy();
expect(**mixed**).toBeUndefined();
expect(**mixed**).toEqual(**mixed**);
expect(**mixed**).toMatch(**pattern**);
expect(**number**).toBeCloseTo(**number, decimalPlaces**);
expect(**number**).toBeGreaterThan(**number**);
expect(**number**).toBeLessThan(**number**);
expect(**number**).toBeNaN();
expect(**spy**).toHaveBeenCalled();
expect(**spy**).toHaveBeenCalledTimes(**number**);
expect(**spy**).toHaveBeenCalledWith(**...arguments**);

</details>

<hr>

### Installing...
* `git clone https://github.com/JoseMMorales/Angular-Material-FlexLayout.git`
* `cd Jasmine-Karma-Angular`
* `npm install`
* `ng serve -o`

### Author...
JoseMMorales

