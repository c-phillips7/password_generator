According to the assignment below, a password generator was created using JavaScript.

Prompts were created to set user preferences for:

• Password length (between 8 - 128)
• Character type used
    -lower case
    -UPPER CASE
    -numb3rs
    -special characters!?


Error 'alert' messages were set up for common wrong inputs for settings:

• Input is not a number
• Input is not an integer
• Number is not between 8 - 128


User's choices were then used to determine how random password is generated.


Once generated, the password is checked to see if all the selected parameters were used at least once, if not a new password is generated.
(Special thanks to Andrew Yu for reccomending .some() to achieve this.)


Screenshots:
![Screenshot](https://github.com/c-phillips7/password_generator/blob/master/Assets/password_generator_screenshot.png?raw=true)



Live page link:
https://c-phillips7.github.io/password_generator/

GitHub repo link:
https://github.com/c-phillips7/password_generator/tree/master



The assignment:
# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at some [examples of special characters on the OWASP Foundation website](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![An app window with the label Password Generator, an input field labeled Your Secure Password, and a Generate Password button.](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
