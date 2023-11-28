// Define variables to store user input
let name, email, goal, breakfast, snack1, lunch, snack2, dinner;

// Function to generate the meal plan
function generateMealPlan() {
    // Get user input
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userGoal = document.getElementById('goal').value;

    // Split the user goals into an array based on new lines (Enter key)
    const goalsArray = userGoal.split('\n').map(goal => goal.trim()).filter(Boolean);
    const [breakfast, snack1, lunch, snack2, dinner] = goalsArray;

    // Validate email
    if (!validateEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Generate the meal plan using document.write()
    document.write('<html><head><title>Meal Plan</title></head><body>');
    document.write(`<h1>Weekly Meal Plan for ${userName}</h1>`);

    // Display personal information
    document.write(`<p><strong>Personal Information:</strong></p>`);
    document.write(`<p>Name: ${userName}</p>`);
    document.write(`<p>Email: ${userEmail}</p>`);

    // Display goals for the week
    document.write('<p><strong>Goals for the Week:</strong></p>');
    document.write('<ul>');
    document.write(`<li>Breakfast: ${breakfast}</li>`);
    document.write(`<li>Snack 1: ${snack1}</li>`);
    document.write(`<li>Lunch: ${lunch}</li>`);
    document.write(`<li>Snack 2: ${snack2}</li>`);
    document.write(`<li>Dinner: ${dinner}</li>`);
    document.write('</ul>');

    document.write('</body></html>');
}

// Function to validate email
function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

// Functions for clearing, printing, and downloading the planner
function clearPlanner() {
    // Reset or clear the values of form elements
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('breakfast').value = '';
    document.getElementById('snack1').value = '';
    document.getElementById('lunch').value = '';
    document.getElementById('snack2').value = '';
    document.getElementById('dinner').value = '';
}

function printPlanner() {
    // Open the print dialog
    window.print();
}

function downloadPlanner() {
    // Get the content you want to download (replace this with your actual content)
    const plannerContent = generatePlannerContent(); // You need to implement this function

    // Create a Blob with the content
    const blob = new Blob([plannerContent], { type: 'text/plain' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);

    // Set the filename for the download
    link.download = 'planner.txt'; // You can change the filename and extension as needed

    // Append the link to the document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}