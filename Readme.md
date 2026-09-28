## 1. How did `event.preventDefault()` help in handling form submission?
It stopped the page from refreshing when I submitted the form. It allowed me to check the form using JavaScript.

## 2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 uses things like `required` and `minlength` to check the input. JavaScript lets me create custom validation and error messages. I used both to make the form work better.

## 3. Explain how you used `localStorage` to persist and retrieve the username. What are the limitations of `localStorage` for storing sensitive data?
I used `localStorage` to save the username and email. I used `getItem()` to get the saved data when the page loads. It is not safe to store passwords or other sensitive information in `localStorage`.

## 4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
My challenge was showing errors while the user was typing. I solved it by using the `input` event and checking the input validity.

## 5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I used simple messages like `"Username is required"` and `"Passwords do not match"`. The messages appear when the user enters incorrect information.
