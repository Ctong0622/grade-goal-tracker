# Grade Goal Tracker

## What This Tool Does

This tool lets a student enter their own course categories (like Midterms, Homework, or Final Exam), the weight of each category, and the grade they got on it. The student can also set a target grade for the course. Based on that information, the tool calculates:

- Your current grade
- How much of the course weight is completed
- How much weight is still remaining
- The average grade you need on the remaining coursework to hit your target grade

Everything is calculated live in the browser with plain HTML, CSS, and JavaScript. There's no database, server, or outside API involved, so nothing is saved once you close or refresh the page.

## How to Use

1. **Enter a target grade.** At the top, type the grade you're aiming for in the course (for example, 90).
2. **Add a category.** In the "Add Category" section, type the name of the category (like "Homework" or "Midterms").
3. **Enter its weight.** Type how much that category is worth toward your final grade, as a percent (for example, 30 for 30%).
4. **Choose whether it has been graded.** Use the dropdown to select "Yes" if you already have a grade for it, or "Not Yet" if it's still coming up.
5. **Enter the grade when applicable.** If you selected "Yes," a field will show up asking for your grade in that category. Enter it there.
6. **Click "+ Add Category."** The category will show up in the "Your Course" list below.
7. **Add more categories.** Repeat the steps above for every category in your course until all the weights add up to how you want.
8. **Read the calculated results.** Once you've added at least one graded category, the "Your Results" section appears showing your current grade, completed weight, remaining weight, and the grade you need on what's left to reach your target.
9. **Delete a category.** If you added something wrong, click the "Delete" button next to that category and it will be removed, and the results will recalculate automatically.
10. **Reset the tool.** Click the "Reset" button at the bottom to clear everything and start over, without needing to refresh the page.

## Live Site

This project has not been deployed to GitHub Pages yet.

**Live link:** `[ADD GITHUB PAGES URL HERE ONCE DEPLOYED]`

## Difference From My Original Expectation

The biggest difference from what I expected was how unintuitive the first version of the interface felt. When I first got the form working, it wasn't clear what some fields actually meant, especially "Category Name," "Weight in Course," whether a category was graded yet, and "Your Grade." I went back and added clearer labels and helper text under the fields so a first-time user could understand what to type in without needing someone to explain it to them.

## AI Reflection

**Pick one piece of AI output you did not accept as-is. What did it give you, what did you change, and how did you know it needed changing?**

Early in development, the AI had built out the "Add Category" form and interface, but the actual logic behind the "Add Category" button wasn't working yet, clicking it didn't do anything to actually add the category to the course. I caught this by testing the form in the browser and noticing that nothing appeared in the "Your Course" list after filling it out and clicking the button. I had the AI implement the real add-category logic so the button would read the form inputs, validate them, and push the new category into the stored course data, and then I tested it again with multiple categories to make sure the calculated results updated correctly.

Specific commit: `7494832` — "Complete grade tracker functionality and interface"
