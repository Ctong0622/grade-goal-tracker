// ---------- Stored State ----------
// This is the application state for the whole tool.
let targetGrade = null;
let categories = [];

// ---------- Element References ----------
const targetGradeInput = document.getElementById("target-grade-input");
const targetGradeError = document.getElementById("target-grade-error");
const targetGradeDisplay = document.getElementById("target-grade-display");

// ---------- User Interactions ----------
targetGradeInput.addEventListener("input", handleTargetGradeInput);

function handleTargetGradeInput() {
  const rawValue = targetGradeInput.value;
  const validationError = getTargetGradeError(rawValue);

  if (validationError) {
    targetGrade = null;
    showTargetGradeError(validationError);
    updateTargetGradeDisplay();
    updateResults();
    return;
  }

  // Valid input updates the stored state.
  targetGrade = Number(rawValue);
  showTargetGradeError("");
  updateTargetGradeDisplay();
  updateResults();
}

// ---------- Calculations / Validation ----------
function getTargetGradeError(rawValue) {
  if (rawValue.trim() === "") {
    return "Enter a target grade.";
  }

  const numericValue = Number(rawValue);

  if (Number.isNaN(numericValue)) {
    return "Target grade must be a number.";
  }

  if (numericValue < 0 || numericValue > 100) {
    return "Target grade must be between 0 and 100.";
  }

  return "";
}

// ---------- Page Updates ----------
function showTargetGradeError(message) {
  targetGradeError.textContent = message;
}

function updateTargetGradeDisplay() {
  if (targetGrade === null) {
    targetGradeDisplay.textContent = "";
    return;
  }

  targetGradeDisplay.textContent = "Target: " + targetGrade + "%";
}
// ---------- Add Category Form (UI only, no state yet) ----------
const categoryStatusInput = document.getElementById("category-status-input");
const categoryGradeField = document.getElementById("category-grade-field");

categoryStatusInput.addEventListener("change", updateCategoryGradeFieldVisibility);
updateCategoryGradeFieldVisibility();

function updateCategoryGradeFieldVisibility() {
  categoryGradeField.hidden = categoryStatusInput.value === "not-yet";
}

// ---------- Add Category ----------
const categoryNameInput = document.getElementById("category-name-input");
const categoryWeightInput = document.getElementById("category-weight-input");
const categoryGradeInput = document.getElementById("category-grade-input");
const addCategoryButton = document.getElementById("add-category-button");
const addCategoryError = document.getElementById("add-category-error");
const categoryList = document.getElementById("category-list");
const emptyCategoryMessage = document.getElementById("empty-category-message");

addCategoryButton.addEventListener("click", handleAddCategory);

function handleAddCategory() {
  const name = categoryNameInput.value.trim();
  const weight = Number(categoryWeightInput.value);
  const isGraded = categoryStatusInput.value === "yes";
  const grade = Number(categoryGradeInput.value);

  const validationError = getAddCategoryError(name, categoryWeightInput.value, isGraded, categoryGradeInput.value);

  if (validationError) {
    showAddCategoryError(validationError);
    return;
  }

  // Valid input adds a new category to the stored state.
  categories.push({
    name: name,
    weight: weight,
    isGraded: isGraded,
    grade: isGraded ? grade : null
  });

  showAddCategoryError("");
  clearAddCategoryForm();
  renderCategoryList();
  updateResults();
}

// ---------- Calculations / Validation ----------
function getAddCategoryError(name, rawWeight, isGraded, rawGrade) {
  if (name === "") {
    return "Enter a category name.";
  }

  const weight = Number(rawWeight);

  if (rawWeight.trim() === "" || Number.isNaN(weight)) {
    return "Weight must be a number.";
  }

  if (weight <= 0 || weight > 100) {
    return "Weight must be greater than 0 and no more than 100.";
  }

  const totalWeight = getTotalCategoryWeight() + weight;

  if (totalWeight > 100) {
    return "Total category weight cannot exceed 100%.";
  }

  if (isGraded) {
    const grade = Number(rawGrade);

    if (rawGrade.trim() === "" || Number.isNaN(grade)) {
      return "Grade must be a number.";
    }

    if (grade < 0 || grade > 100) {
      return "Grade must be between 0 and 100.";
    }
  }

  return "";
}

function getTotalCategoryWeight() {
  return categories.reduce(function (total, category) {
    return total + category.weight;
  }, 0);
}

// ---------- Page Updates ----------
function showAddCategoryError(message) {
  addCategoryError.textContent = message;
}

function clearAddCategoryForm() {
  categoryNameInput.value = "";
  categoryWeightInput.value = "";
  categoryGradeInput.value = "";
  categoryStatusInput.value = "yes";
  updateCategoryGradeFieldVisibility();
}

function renderCategoryList() {
  categoryList.innerHTML = "";

  categories.forEach(function (category, index) {
    const item = document.createElement("li");
    item.className = "category-item";

    const gradeText = category.isGraded ? category.grade + "%" : "Not Yet";

    const info = document.createElement("span");
    info.textContent = category.name + " — " + category.weight + "% — " + gradeText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-secondary btn-delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      handleDeleteCategory(index);
    });

    item.appendChild(info);
    item.appendChild(deleteButton);
    categoryList.appendChild(item);
  });

  emptyCategoryMessage.hidden = categories.length > 0;
}

function handleDeleteCategory(index) {
  // Remove only that category from the stored state.
  categories.splice(index, 1);

  renderCategoryList();
  updateResults();
}

// ---------- Results ----------
const resultsSection = document.getElementById("results-section");
const currentGradeValue = document.getElementById("current-grade-value");
const completedWeightValue = document.getElementById("completed-weight-value");
const remainingWeightValue = document.getElementById("remaining-weight-value");
const gradeNeededValue = document.getElementById("grade-needed-value");
const gradeNeededSub = document.getElementById("grade-needed-sub");

function updateResults() {
  if (categories.length === 0) {
    resultsSection.hidden = true;
    return;
  }

  resultsSection.hidden = false;

  const completedWeight = getCompletedWeight();
  const remainingWeight = getRemainingWeight();
  const earnedPoints = getEarnedPoints();

  completedWeightValue.textContent = completedWeight + "%";
  remainingWeightValue.textContent = remainingWeight + "%";

  // Current Grade uses only completed categories.
  if (completedWeight === 0) {
    currentGradeValue.textContent = "Add a graded category to see this.";
  } else {
    const currentGrade = earnedPoints / completedWeight * 100;
    currentGradeValue.textContent = currentGrade.toFixed(1) + "%";
  }

  updateGradeNeeded(remainingWeight, earnedPoints);
}

function updateGradeNeeded(remainingWeight, earnedPoints) {
  if (targetGrade === null) {
    gradeNeededValue.textContent = "--";
    gradeNeededSub.textContent = "Enter a target grade to see this.";
    return;
  }

  if (remainingWeight === 0) {
    gradeNeededValue.textContent = "--";
    gradeNeededSub.textContent = "There is no remaining coursework left to grade.";
    return;
  }

  // Points still needed, spread across the remaining weight.
  const pointsNeeded = targetGrade - earnedPoints;
  const gradeNeeded = pointsNeeded / remainingWeight * 100;

  if (gradeNeeded > 100) {
    gradeNeededValue.textContent = gradeNeeded.toFixed(1) + "%";
    gradeNeededSub.textContent = "This target is not achievable with the grades entered so far.";
  } else if (gradeNeeded <= 0) {
    gradeNeededValue.textContent = "0%";
    gradeNeededSub.textContent = "Your target grade is already secured.";
  } else {
    gradeNeededValue.textContent = gradeNeeded.toFixed(1) + "%";
    gradeNeededSub.textContent = "to reach your " + targetGrade + "% target";
  }
}

function getCompletedWeight() {
  return categories
    .filter(function (category) {
      return category.isGraded;
    })
    .reduce(function (total, category) {
      return total + category.weight;
    }, 0);
}

function getRemainingWeight() {
  return categories
    .filter(function (category) {
      return !category.isGraded;
    })
    .reduce(function (total, category) {
      return total + category.weight;
    }, 0);
}

// Weighted points already earned from graded categories.
function getEarnedPoints() {
  return categories
    .filter(function (category) {
      return category.isGraded;
    })
    .reduce(function (total, category) {
      return total + (category.grade * category.weight / 100);
    }, 0);
}

// ---------- Reset ----------
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", handleReset);

function handleReset() {
  // Clear the stored state back to its starting values.
  targetGrade = null;
  categories = [];

  targetGradeInput.value = "";
  showTargetGradeError("");
  updateTargetGradeDisplay();

  showAddCategoryError("");
  clearAddCategoryForm();

  renderCategoryList();
  updateResults();
}