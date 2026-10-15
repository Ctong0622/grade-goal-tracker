# Agent Instructions

## Project

This project is the Grade Goal Tracker for OIM3690 Mini Project 2.

Before making changes, read:

- PROPOSAL.md
- PRD.md
- DESIGN.md

Follow the requirements and design direction in those files.

## Technology Rules

Use only:

- HTML
- CSS
- Plain JavaScript

Do not use:

- React
- Tailwind
- Frameworks
- External libraries
- CDN resources
- Databases
- Servers
- Outside APIs

Everything must run directly in the browser and be deployable with GitHub Pages.

## JavaScript Rules

Keep the JavaScript simple, readable, and appropriate for a student project.

The application state should be stored in JavaScript.

The code should clearly separate:

- Stored state
- User interactions
- Calculations
- Page updates

Do not add unnecessary abstractions or complicated patterns.

Use clear variable and function names so the code can be explained during a class walkthrough.

Do not use alert() for errors. Show validation messages directly on the page.

## Building Rules

Build the project one interaction at a time instead of generating unnecessary features.

The required states are:

- Empty
- Invalid input
- In use
- After reset

The tool must update without reloading the page.

A user must be able to reset the tool without refreshing the browser.

The page must work on both desktop and mobile screens.

Use semantic HTML where appropriate.

## Scope

Only build features described in PRD.md.

Do not add features such as:

- User accounts
- Canvas integration
- Automatic grade importing
- Multiple-course tracking
- Databases
- Permanent storage
- Complex grading rules

If something is unclear, prefer the simpler implementation that satisfies the PRD.

## Changes

Make focused changes and keep the code easy to review.

Do not change the project's requirements or design direction unless asked.

When implementing a feature, explain what was changed and which part of the JavaScript holds or changes the application state.