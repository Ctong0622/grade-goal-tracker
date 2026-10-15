# Grade Goal Tracker - Design Direction

## Overall Style

The Grade Goal Tracker should have a clean, simple, and modern design. It should feel like a student productivity tool rather than a business website.

The interface should be easy to understand at first glance. The design should not use too many colors, animations, or decorative elements. The main focus should be entering course information and understanding the calculated results.

## Page Layout

The website will be a single-page tool with one main content column centered on the screen.

The page will be organized in this order:

1. Header and short description
2. Target grade
3. Add Category form
4. Course category list
5. Results
6. Reset button

The content should have enough spacing between sections so the page does not feel crowded.

## Header

At the top of the page, display:

**Grade Goal Tracker**

Below the title, include a short description such as:

"Add your course categories and see what you need to reach your target grade."

The header should be simple and not take up too much space.

## Target Grade Section

The target grade should appear near the top because it is one of the main pieces of information used by the tool.

It should include:

- A clear "Target Grade" label
- A numeric input
- A percent sign

The input should be easy to find and edit.

## Add Category Section

The Add Category section should appear inside a simple card or clearly separated area.

It should include:

- Category name input
- Weight input
- Grade input
- A control for choosing whether the category is completed or remaining
- Add Category button

If the category is marked as remaining, the grade input should not be required.

The Add Category button should be visually clear but not oversized.

## Course Category List

After categories are added, they should appear in a clear list below the form.

Each category should show:

- Category name
- Weight
- Grade or "Remaining"
- Delete button

Completed and remaining categories should be easy to distinguish using text or a small status label.

The Delete button should be less visually prominent than the Add Category button.

## Results Section

The Results section should be one of the most visually important areas of the page.

It should display:

- Current Grade
- Completed Weight
- Remaining Weight
- Grade Needed on Remaining Work

The most important calculated number, especially the grade needed to reach the target, should use larger text so the user can understand the answer quickly.

The results should remain simple and should not use charts or unnecessary graphics.

## Buttons

Buttons should have a consistent style.

The main Add Category button should be the primary button.

Delete and Reset should look less important than the primary action.

Buttons should have readable text, comfortable spacing, and slightly rounded corners.

## Colors

Use a light background with darker text for readability.

Use white or slightly different light surfaces for cards and sections.

Use one main accent color for important actions and results.

Error messages can use a clear warning color.

Avoid using too many different colors.

## Typography

Use a simple, readable system font.

The visual hierarchy should be clear:

- Large page title
- Medium section headings
- Normal body text
- Larger numbers for important calculated results

Text should remain easy to read on both desktop and mobile screens.

## Empty State

When the page first opens and there are no categories:

- The target grade and Add Category form are visible.
- The category list is empty.
- A simple message says: "Add your first category to get started."
- Calculated results are not shown yet.

The empty page should still feel complete and intentional.

## Invalid Input State

When the user enters invalid information:

- The page should stay in place and should not reload.
- A short error message should appear close to the related input or form.
- The incorrect category should not be added.
- Existing valid categories and results should remain visible.
- The user should be able to correct the input and try again.

Errors should not appear in alert boxes.

## In-Use State

After the user adds valid categories:

- The empty-state message disappears.
- The category list becomes visible.
- Each category displays its information and delete option.
- The Results section displays the calculations that can currently be made.
- Adding or deleting a category updates the page without reloading.

The calculated results should be easy to notice without distracting from the rest of the tool.

## After Reset State

When the user presses Reset:

- All categories disappear.
- The target grade is cleared.
- All calculated results disappear.
- Error messages are cleared.
- The "Add your first category to get started." message returns.

The page should look the same as the original empty state.

## Mobile Design

The page should remain readable on a phone.

On smaller screens:

- The main content should use most of the available screen width with comfortable margins.
- Form fields can stack vertically.
- Category information can stack if there is not enough horizontal space.
- Buttons should remain easy to tap.
- Text and calculated results should not require horizontal scrolling.

## Simple Layout Reference

The general page structure should look like this:

    -----------------------------------
            Grade Goal Tracker

      Add your course categories and
      see what you need to reach your
              target grade.
    -----------------------------------

    TARGET GRADE
    [ 90 ] %

    -----------------------------------
    ADD CATEGORY

    Category Name
    [ Midterms                  ]

    Weight
    [ 30 ] %

    Status
    [ Completed / Remaining     ]

    Grade
    [ 87 ] %

    [ + Add Category ]
    -----------------------------------

    YOUR COURSE

    Midterms
    30% | 87%                 Delete

    Homework
    20% | 95%                Delete

    Final Exam
    40% | Remaining          Delete

    -----------------------------------
    YOUR RESULTS

    Current Grade             91.4%
    Completed Weight            60%
    Remaining Weight            40%

           Grade Needed
               87.9%

      to reach your 90% target

    -----------------------------------

              [ Reset ]

## Design Priorities

The most important design priorities are:

1. Make the tool easy to understand without instructions.
2. Make data entry simple.
3. Make the calculated answer easy to find.
4. Clearly show errors without interrupting the user.
5. Keep the interface simple enough to work well on both desktop and mobile.