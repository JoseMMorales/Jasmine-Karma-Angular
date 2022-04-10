<div align="center">

  ![Screenshot 2022-04-10 at 19 39 35](https://user-images.githubusercontent.com/43299285/162632186-899570bf-c222-4a2b-8be2-dc083760760c.png)

</div>

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

### Outcome of testing...

#### Command line:
<div align="center">

  ![Screenshot 2022-04-10 at 19 25 37](https://user-images.githubusercontent.com/43299285/162631721-b2f5728b-3757-423b-ba76-909fb5e69d5f.png)

</div>

#### Browser:
<div align="center">

  ![Screenshot 2022-04-10 at 19 27 52](https://user-images.githubusercontent.com/43299285/162631794-0fd62c44-a213-4e67-a603-2aaf746980fb.png)

</div>

### Installing...
* `git clone https://github.com/JoseMMorales/Angular-Material-FlexLayout.git`
* `cd Jasmine-Karma-Angular`
* `npm install`
* `ng serve -o`

### Author...
JoseMMorales

