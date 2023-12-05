// Define variables to store user input
let name, email, goal, breakfast, snack1, lunch, snack2, dinner;

// Function to generate the meal plan
function generateMealPlan() {
    // Get user input
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userGoal = document.getElementById('goal').value;

    // Validate email
    if (!validateEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Split the user goals into an array based on new lines
    const goalsArray = userGoal.split('\n').map(goal => goal.trim()).filter(Boolean);

    // Assign goals to variables
    const [breakfast, snack1, lunch, snack2, dinner] = goalsArray;

    // Define days of the week with Sunday placed in the middle
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Generate the meal plan using document.write()
    document.write('<html><head><title>Meal Plan</title>');

    // Add CSS styles for the generated page
    document.write(`
        <style>
            body {
                font-family: 'Roboto', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: #333;
                line-height: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
            }

            h1 {
                text-align: center;
                color: #673AB7;
                margin-top: 10px;
            }

            p {
                margin-bottom: 10px;
                text-align: center;
            }

            .grid-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            .grid-item {
                width: 100%;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                margin-bottom: 5px;
            }

            strong {
                color: #673AB7;
            }
        </style>
    `);

    document.write('</head><body>');

    // Display content on the generated page
    document.write(`<h1>Weekly Meal Plan for ${userName}</h1>`);

    // Display personal information
    document.write(`<p><strong>Personal Information:</strong></p>`);
    document.write(`<p>Name: ${userName}</p>`);
    document.write(`<p>Email: ${userEmail}</p>`);

    // Display common heading for goals for the week
    document.write('<p><strong>Goals for this week:</strong></p>');

    // Display goals for each day of the week in a 3x3 grid
    document.write('<div class="grid-container">');

    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];

        document.write('<div class="grid-item">');
        document.write(`<p><strong>${day}:</strong></p>`);
        document.write('<ul>');
        document.write(`<li><strong>Breakfast:</strong> ${breakfast}</li>`);
        document.write(`<li><strong>Snack 1:</strong> ${snack1}</li>`);
        document.write(`<li><strong>Lunch:</strong> ${lunch}</li>`);
        document.write(`<li><strong>Snack 2:</strong> ${snack2}</li>`);
        document.write(`<li><strong>Dinner:</strong> ${dinner}</li>`);
        document.write('</ul>');
        document.write('</div>');
    }

    document.write('</div>');
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
    // Validate email
    const userEmail = document.getElementById('email').value;
    if (!validateEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Get page and open the print dialog
    generateMealPlan();
    window.print();
}

function downloadPlanner() {
    // Validate email
    const userEmail = document.getElementById('email').value;
    if (!validateEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    generateMealPlan();
    // Get the HTML content of the current page
    const pageContent = document.documentElement.outerHTML;

    // Create a Blob with the content
    const blob = new Blob([pageContent], { type: 'text/html' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);

    // Set the filename for the download
    link.download = 'meal_plan.html';

    // Append the link to the document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}