# Grade Goal Tracker - Product Requirements Document

## Overview

The Grade Goal Tracker is a simple interactive web tool for college students. Users can enter their own course categories, weights, and grades. The tool uses this information to calculate the student's current grade and what they need on their remaining coursework to reach a target course grade.

## User

The main user is a college student who wants to understand their current course grade and what they need to earn on remaining coursework to reach a target grade.

## Core Data

The tool keeps track of:

- Target course grade
- Category name
- Category weight
- Category grade
- Whether a category is completed or remaining

The data will be stored in JavaScript state while the page is open. No database, server, or outside API is needed.

## Main Features

### 1. Set Target Grade

The user can enter a target course grade between 0 and 100.

Example:

Target Grade: 90%

The target grade is used when calculating what the student needs on remaining coursework.

### 2. Add Course Category

The user can add a course category by entering:

- Category name
- Weight
- Current grade or remaining status

Example:

Midterms - 30% - 87%

When the user adds a category, it is added to the stored course data and the results are recalculated.

### 3. Mark a Category as Remaining

If a category has not been graded yet, the user can mark it as remaining instead of entering a current grade.

Example:

Final Exam - 40% - Remaining

Remaining categories are used to calculate how much of the course is left and what average is needed to reach the target grade.

### 4. Calculate Results

The tool should automatically calculate and display:

- Current grade based on completed categories
- Completed course weight
- Remaining course weight
- Average grade needed on remaining coursework to reach the target grade

The results should update whenever the user changes the course data.

### 5. Delete a Category

Each added category should have a delete button.

Deleting a category removes it from the stored data and recalculates the results.

### 6. Reset

The user can reset the tool without refreshing the page.

Resetting should:

- Remove all categories
- Clear the target grade
- Clear calculated results
- Return the tool to its empty state

## Interactions

The tool should include at least these interactions:

- Form inputs for category information
- Button to add a category
- Checkbox or dropdown to mark a category as completed or remaining
- Delete buttons for categories
- Reset button
- Target grade input

## Validation

The tool should prevent invalid information from breaking the calculator.

Examples of invalid input include:

- Empty category name
- Weight that is zero or negative
- Weight above 100%
- Grade below 0%
- Grade above 100%
- Total category weight above 100%
- Missing target grade when a target calculation is needed

Errors should appear directly on the page near the relevant input or form. The tool should not use alert boxes.

## Page States

### Empty State

When the user first opens the page:

- No categories are shown
- No calculated grade is shown
- The page tells the user to add their first category
- Inputs for the target grade and new category are available

### Invalid Input State

When the user enters invalid information:

- The category is not added
- A clear error message appears on the page
- Existing valid data stays unchanged
- The user can correct the input and try again

### In-Use State

After at least one valid category has been added:

- Added categories are displayed
- Completed and remaining categories are clearly identified
- Current grade is displayed when it can be calculated
- Completed and remaining weights are displayed
- The needed grade is displayed when there is remaining coursework and a target grade

### After Reset State

After the user presses Reset:

- All entered categories are removed
- Target grade is cleared
- Calculated results disappear
- The page returns to the same condition as the initial empty state

## Design and Usability Requirements

- The page should be easy to understand without instructions from another person.
- Important results should be easy to see.
- Error messages should appear close to the related input.
- The layout should work on both desktop and phone screens.
- Semantic HTML should be used where possible.
- Results should update on the page without alert boxes or page reloads.

## Technical Requirements

- Plain HTML, CSS, and JavaScript only
- No React, Tailwind, or other frameworks
- No external libraries or CDN resources
- No server
- No database
- No outside API
- State should be stored in JavaScript
- The page should update based on changes to the JavaScript state
- The project should be deployable using GitHub Pages

## Out of Scope

For this version, the tool will not:

- Save data permanently after the browser is closed or refreshed
- Connect to Canvas or another school website
- Automatically import grades
- Use a database or user accounts
- Track multiple courses at the same time
- Include complex grading rules such as dropping the lowest grade or extra credit

The goal is to keep the first version simple, useful, and easy to understand.