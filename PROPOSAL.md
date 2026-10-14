# Grade Goal Tracker Proposal

## What I am building

I am building a grade goal tracker where students can enter their own course categories, weights, and grades to see their current grade and what they need on their remaining work to reach their target grade.

## Who it is for

This tool is for college students, including myself, who want an easier way to understand their grades. It can be difficult to calculate a current grade when a course has different categories with different weights. This tool will make it easier to see where I currently stand and what grades I need on the remaining work.

## What it remembers

The tool will remember the target course grade entered by the user and the categories they add. For each category, it will keep the category name, its weight, and either the current grade or whether that category is still remaining.

For example, a student could add:

- Midterms - 30% - 87%
- Homework - 20% - 95%
- Participation - 10% - 100%
- Final Exam - 40% - Remaining

## Where the data lives

The data will be stored in JavaScript state while the page is open. I do not plan to use a database, server, or outside API.

## What each action changes

- Setting a target grade changes the grade the student is trying to reach.
- Adding a category adds its name, weight, and grade/status to the stored course data.
- Deleting a category removes it from the stored course data.
- Changing the course information causes the results to be calculated again.
- Resetting the tool removes the entered course data and returns the page to its starting state.

## Features

1. Users can set a target course grade.
2. Users can add their own course categories with different weights and grades.
3. A category can be marked as remaining if it has not been graded yet.
4. The tool calculates the student's current grade and the grade needed on remaining work to reach the target.
5. Users can delete categories or reset the tool and start over.

## What I do not know yet

I am not completely sure how to store and update multiple course categories in JavaScript. I also need to figure out how to recalculate the results whenever the user adds or deletes a category, how to handle categories that have not been graded yet, and how to show an error when the weights or grades entered by the user are invalid.