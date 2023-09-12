# POM_Exercise

# DogAPI Website Automation Exercise

In this exercise, you will automate the testing of a website that allows a user to log in and search for dog images using DogAPI. You will use Selenium WebDriver, TestNG, and the Page Object Model (POM) approach.

## Requirements

- Java
- Selenium WebDriver
- TestNG
- Maven

## Instructions

1. Open the deployed website https://techcodedu.github.io/POM_Exercise/. The login form should contain fields for email, password, a "Remember me" checkbox, a "Login" button, a "Forgot your password?" link, and a "Register" link.

2. Use the following credentials to log in:
    - Email: test@email.com
    - Password: password

3. After logging in, you will be redirected to the DogAPI page. On the DogAPI page, there is a search input that fetches random dog images from DogAPI and displays them when you type in the search input.

4. Create a Maven project and add the Selenium WebDriver and TestNG dependencies in the `pom.xml` file.

```xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>3.141.59</version>
    </dependency>
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.4.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

5. Create a `LoginPage` class in the `src/main/java` directory of your Maven project. This class will represent the login page of the website and will contain methods to interact with the elements on the page.

6. Create a `TestLogin` class in the `src/test/java` directory of your Maven project. This class will contain the TestNG test methods to test the login page of the website.

7. Create a TestNG XML file in the `src/test/resources` directory of your Maven project. This file will contain the configuration for your TestNG tests.

```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="MySuite">
    <test name="MyTest">
        <classes>
            <class name="com.example.TestLogin"/>
        </classes>
    </test>
</suite>
```

8. Run the TestNG tests by executing the following Maven command in your project directory:

```
mvn clean test
```

9. After running the tests, a `test-output` directory will be created in your project directory. Open the `index.html` file in the `test-output` directory to view the TestNG report.

## Deliverables

- `pom.xml` file
- `LoginPage` class
- `TestLogin` class
- TestNG XML file
- TestNG report

---
