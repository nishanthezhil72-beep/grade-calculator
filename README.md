# Grade Calculator

A beginner-friendly, responsive Grade Calculator built with **HTML, CSS, and JavaScript**. Enter marks for five subjects to calculate the total, average percentage, and overall grade.

## Features

- Enter marks for five subjects
- Validate marks between 0 and 100
- Calculate total marks out of 500 and average percentage
- Assign a grade based on the average
- Display feedback based on the result
- Clear the form and start again
- Responsive layout for desktop and mobile
- No frameworks or package installation required

## Grade Scale

| Average | Grade |
| --- | --- |
| 90–100 | A |
| 80–89.99 | B |
| 70–79.99 | C |
| 60–69.99 | D |
| 50–59.99 | E |
| Below 50 | F |

This is a sample scale for the project. Change it to match your institution's grading rules if needed.

## Technologies

- HTML5 — page structure
- CSS3 — styling and responsive layout
- JavaScript — validation and calculations

## Project Structure

```text
grade-calculator/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .gitignore
└── README.md
```

## Run Locally

1. Download or clone this repository.
2. Open the `grade-calculator` folder.
3. Open `index.html` in your browser.

For a convenient development workflow, open the folder in Visual Studio Code and use the **Live Server** extension.

## How It Works

1. The user enters marks for five subjects.
2. JavaScript checks that each mark is between 0 and 100.
3. The marks are added to calculate the total.
4. The total is divided by five to calculate the average.
5. Conditional statements convert the average into a grade.
6. The result is displayed on the page.

## Future Improvements

- Add or remove subjects dynamically
- Allow different maximum marks per subject
- Save previous results
- Add GPA calculation
- Download a result report

## Contributing

Fork the repository, create a branch, make your changes, and submit a pull request.

## License

You may add an MIT `LICENSE` file if you want to publish this project under the MIT License.
