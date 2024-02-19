function openInfoPopup() {
    var popup = document.getElementById("info-popup");
    if (popup) {
        popup.style.display = "block";
    }
}

function closeInfoPopup() {
    var popup = document.getElementById("info-popup");
    if (popup) {
        popup.style.display = "none";
    }
}

var dragged;

function drag(event) {
    dragged = event.target;
    // Set data to be transferred during the drag
    event.dataTransfer.setData("text/plain", null);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var target = event.target.closest('.card');
    var container = document.querySelector('.cards');
    // Check if the drop target is a card or the container
    if (target) {
        // Calculate the position of the dragged card relative to the other cards
        var draggedRect = dragged.getBoundingClientRect();
        var targetRect = target.getBoundingClientRect();
        if (draggedRect.left < targetRect.left) {
            target.parentNode.insertBefore(dragged, target.nextSibling);
        } else {
            target.parentNode.insertBefore(dragged, target);
        }
    } else {
        container.appendChild(dragged);
    }
    // Remove the clone after dropping
    dragClone.remove();
    // Save the updated card order after dropping
    saveCardOrder();
}

// Add unique IDs to each card if they don't have one
document.querySelectorAll('.card').forEach((card, index) => {
    if (!card.id) {
        card.id = 'card-' + index;
    }
    card.addEventListener('dragend', saveCardOrder);
});

// Function to save the order of the cards in localStorage
function saveCardOrder() {
    const cardOrder = Array.from(document.querySelectorAll('.card')).map(card => card.id);
    localStorage.setItem('cardOrder', JSON.stringify(cardOrder));
}

// Function to retrieve the stored card order from localStorage and rearrange the cards accordingly
function loadCardOrder() {
    const cardOrder = JSON.parse(localStorage.getItem('cardOrder'));
    if (cardOrder) {
        const container = document.querySelector('.cards');
        cardOrder.forEach(cardId => {
            const card = document.getElementById(cardId);
            // Instead of appending the card ID, append the card itself
            if (card) {
                container.appendChild(card);
            }
        });
    }
}

const cards = document.querySelectorAll('.card');
let draggedCard = null;

function applyStyleToAllCards(style) {
    cards.forEach(card => {
        if (card !== draggedCard) {
            Object.assign(card.style, style);
        }
    });
}

function resetStyles() {
    cards.forEach(card => {
        card.style.backgroundColor = ''; // Reset background color
        card.style.filter = 'brightness(100%)'; // Reset brightness
        card.style.transform = 'scale(1)'; // Reset scale
    });
}

cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        draggedCard = card;
        /*card.style.backgroundColor = '#f0f0f0'; */
        applyStyleToAllCards({ transform: 'scale(0.90)' }); //   filter: 'brightness(10%)',
    });

    card.addEventListener('dragend', () => {
        draggedCard = null;
        resetStyles();
    });

    card.addEventListener('dragover', () => {
        applyStyleToAllCards({ filter: 'brightness(100%)' }); //   
        /*card.style.backgroundColor = '#f0f0f0'; */
        card.style.filter = 'brightness(200%)'; // Apply brightness to hovered card
    });

    card.addEventListener('dragleave', () => {
        card.style.backgroundColor = ''; // Reset background color
        card.style.filter = 'brightness(100%)'; // Reset brightness
    });
});

// Add event listeners to each card to handle drag operations
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
});

// Function to handle drag start
function dragStart(event) {
    dragged = event.target; // Store the dragged card
    // Create a clone of the dragged card
    dragClone = event.target.cloneNode(true);
    dragClone.classList.add('drag-clone');
    document.body.appendChild(dragClone);
    // Hide the original card during drag
    event.target.style.opacity = '0';
}

// Function to handle drag end
function dragEnd(event) {
    // Remove the clone and reset original card's opacity
    dragClone.remove();
    event.target.style.opacity = '1';
}

// Function to handle drag over
function dragOver(event) {
    event.preventDefault(); // Prevent default behavior
    // Set the position of the clone to follow the mouse cursor
    dragClone.style.left = (event.pageX - dragClone.offsetWidth / 2) + 'px';
    dragClone.style.top = (event.pageY - dragClone.offsetHeight / 2) + 'px';
}

// Add event listener to handle drag over on document
document.addEventListener('dragover', dragOver);

// Call the function to load the card order when the page is loaded
window.addEventListener('load', loadCardOrder);














// Define macros
const macros = ["calories", "protein", "fats", "carbs", "sugar", "fiber"];

// Loop over each macro to create the doughnut charts
macros.forEach((macroName, index) => {
    const value = parseInt(localStorage.getItem(macroName)) || 0;
    const maxValue = parseInt(localStorage.getItem(macroName + "Max")) || 0;

    // Define colors for each chart
    const chartColors = ['#ff9f40', '#ff6384', '#ffcd56', '#1BD2F3', '#9966ff', '#38DBAA'];
    const grayColor = '#3E5488'; // Define the color for the gray ring 3B4A72

    // Doughnut chart configuration
    const data = {
        labels: [macroName, 'Remaining'],
        datasets: [{
            data: [value, Math.max(0, maxValue - value)],
            backgroundColor: [chartColors[index], grayColor],
            borderWidth: 0
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: '85%', // Adjust the cutout to create the inner ring
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    // Create and render the chart
    const ctx = document.getElementById(`chart-${macroName}`).getContext('2d');
    new Chart(ctx, config);
});

// Function to update the chart data and render the updated chart
function updateCharts() {
    macros.forEach(macroName => {
        const value = parseInt(localStorage.getItem(macroName)) || 0;
        const maxValue = parseInt(localStorage.getItem(macroName + "Max")) || 0;

        // Get the chart instance
        const chartInstance = Chart.getChart(`chart-${macroName}`);

        // Update chart data
        chartInstance.data.datasets[0].data = [value, Math.max(0, maxValue - value)];

        // Update the chart
        chartInstance.update();
    });
}







// Function to check if the popup has been displayed before
function checkPopupDisplayed() {
    // Check if the flag for popup displayed exists in localStorage
    const popupDisplayed = localStorage.getItem('popupDisplayed');

    if (!popupDisplayed) {
        // If the flag doesn't exist, show the popup
        openPopup();

        // Set the flag in localStorage to indicate that the popup has been displayed
        localStorage.setItem('popupDisplayed', 'true');
    }
}

// Call the function to check if the popup has been displayed when the page loads
window.addEventListener('load', checkPopupDisplayed);









    function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    function openResetConfirmation() {
        document.getElementById('resetConfirmation').style.display = 'block';
    }

    function closeResetConfirmation() {
        document.getElementById('resetConfirmation').style.display = 'none';
    }

// Function to reset all values and entries
function resetValues() {
    // Reset all card values to 0g
    const macros = ["calories", "protein", "fats", "carbs", "sugar", "fiber"];
    
    macros.forEach(macroName => {
        document.getElementById(macroName + "-value").textContent = "0g";
        localStorage.setItem(macroName, "0");
    });

    // Clear all entries from localStorage
    localStorage.removeItem('entries');
    updateCharts()

    // Remove all entries from the recent entries list
    const recentEntriesList = document.getElementById("recentEntriesList");
    recentEntriesList.innerHTML = '';

    // Close the confirmation popup
    closeResetConfirmation();
}

// Function to update card values and store them in localStorage
function updateCardAndStorage(macroName, value) {
    // Get the current value from localStorage, or 0 if not present
    let currentValue = parseInt(localStorage.getItem(macroName)) || 0;

    // Add the new value to the current value
    let newValue = currentValue + value;

    // Update the card text content with "g" appended
    document.getElementById(macroName + "-value").textContent = newValue + "g";

    // Store the new value in localStorage
    localStorage.setItem(macroName, newValue.toString());
}

// Set default max values for calories, protein, fats, carbs, sugar, and fiber
const defaultMaxValues = {
    calories: 2100,
    protein: 80,
    fats: 50,
    carbs: 250,
    sugar: 30,
    fiber: 30
};

// Function to load values from localStorage or set default values if not present
function loadValuesFromStorage() {
    const macros = ["calories", "protein", "fats", "carbs", "sugar", "fiber"];
    macros.forEach(macroName => {
        const value = parseInt(localStorage.getItem(macroName)) || 0;
        document.getElementById(macroName + "-value").textContent = value + "g";
    });

    // Load max values from localStorage, or set default values if not present
    document.getElementById("calories-max").textContent = "/" + (parseInt(localStorage.getItem("caloriesMax")) || defaultMaxValues.calories);
    document.getElementById("protein-max").textContent = "/" + (parseInt(localStorage.getItem("proteinMax")) || defaultMaxValues.protein);
    document.getElementById("fats-max").textContent = "/" + (parseInt(localStorage.getItem("fatsMax")) || defaultMaxValues.fats);
    document.getElementById("carbs-max").textContent = "/" + (parseInt(localStorage.getItem("carbsMax")) || defaultMaxValues.carbs);
    document.getElementById("sugar-max").textContent = "/" + (parseInt(localStorage.getItem("sugarMax")) || defaultMaxValues.sugar);
    document.getElementById("fiber-max").textContent = "/" + (parseInt(localStorage.getItem("fiberMax")) || defaultMaxValues.fiber);

    const recentEntriesList = document.getElementById("recentEntriesList");
    recentEntriesList.innerHTML = '';

    // Load entries from localStorage
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.reverse(); // Reverse the order of entries (newest first)
    entries.forEach(entry => {
        createRecentEntry(entry.name, entry.servingSize, entry.calories, entry.protein, entry.fats, entry.carbs, entry.sugar, entry.fiber);
    });

    // Populate the popup form fields with previous responses
    document.getElementById("calories-max-input").value = localStorage.getItem("caloriesMax") || "";
    document.getElementById("protein-max-input").value = localStorage.getItem("proteinMax") || "";
    document.getElementById("fats-max-input").value = localStorage.getItem("fatsMax") || "";
    document.getElementById("carbs-max-input").value = localStorage.getItem("carbsMax") || "";
    document.getElementById("sugar-max-input").value = localStorage.getItem("sugarMax") || "";
    document.getElementById("fiber-max-input").value = localStorage.getItem("fiberMax") || "";
}



// Call loadValuesFromStorage when the page loads
window.addEventListener("load", loadValuesFromStorage);

function createRecentEntry(name, servingSize, calories, protein, fats, carbs, sugar, fiber) {
    // Construct the entry content
    const newEntryContent = `${name}-${servingSize}-${calories}-${protein}-${fats}-${carbs}-${sugar}-${fiber}`;

    // Retrieve existing entries from localStorage
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Check if the new entry already exists
    const isDuplicate = entries.some(entry => {
        const existingEntryContent = `${entry.name}-${entry.servingSize}-${entry.calories}-${entry.protein}-${entry.fats}-${entry.carbs}-${entry.sugar}-${entry.fiber}`;
        return existingEntryContent === newEntryContent;
    });

    // If it's a duplicate, return without adding the entry
    if (isDuplicate) {
        return;
    }

    // Update card values and store them in localStorage
    updateCardAndStorage("calories", calories);
    updateCardAndStorage("protein", protein);
    updateCardAndStorage("fats", fats);
    updateCardAndStorage("carbs", carbs);
    updateCardAndStorage("sugar", sugar);
    updateCardAndStorage("fiber", fiber);

    // Save the entry to localStorage
    const entry = {
        name: name,
        servingSize: servingSize,
        calories: calories,
        protein: protein,
        fats: fats,
        carbs: carbs,
        sugar: sugar,
        fiber: fiber
    };
    entries.unshift(entry); // Add entry to the beginning of the array
    localStorage.setItem('entries', JSON.stringify(entries));

    // Append the entry to the recent entries list
    const recentEntriesList = document.getElementById("recentEntriesList");
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");
    entryDiv.innerHTML = `
        <div class="entry1">
            <h3>${name} (${servingSize}g)&nbsp&nbsp</h3>
            <p>Calories: <strong id="bold-entries">${calories}</strong>&nbsp&nbsp</p>
            <p>Protein: <strong id="bold-entries">${protein}g</strong>&nbsp&nbsp</p>
            <p>Fats: <strong id="bold-entries">${fats}g</strong>&nbsp&nbsp</p>
            <p>Carbs: <strong id="bold-entries">${carbs}g</strong>&nbsp&nbsp</p>
            <p>Sugar: <strong id="bold-entries">${sugar}g</strong>&nbsp&nbsp</p>
            <p>Fiber: <strong id="bold-entries">${fiber}g</strong>&nbsp&nbsp</p>
            <button class="btn entry-delete-button" onclick="deleteEntry(this)"><span>Delete Entry</span></button>
        </div>
        <hr class="entries-line">
    `;
    recentEntriesList.prepend(entryDiv); // Add entry to the beginning of the list

    // Add event listener to the dynamically generated delete button
    const deleteButtons = document.querySelectorAll('.entry-delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to the bottom of the page
            window.scrollTo(0, document.body.scrollHeight);
        });
    });
}
// Function to delete an entry
function deleteEntry(button) {
    // Store the entry div
    const entryDiv = button.parentElement;

    // Get the name of the entry being deleted
    const entryName = entryDiv.querySelector("h3").textContent.split(' ')[0];

    // Set the title of the confirmation box
    const confirmationTitle = document.getElementById('confirmationTitle');
    confirmationTitle.textContent = `Delete "${entryName}" Confirmation`;

    // Store the entry data
    const name = entryDiv.querySelector("h3").textContent.split(' ')[0]; // Get the name from the entry title
    const servingSize = parseInt(entryDiv.querySelector("h3").textContent.split('(')[1].split('g')[0]); // Get the serving size from the entry title

    // Show the confirmation box
    const confirmationBox = document.getElementById('confirmationBox');
    confirmationBox.style.display = 'flex';

    // Function to confirm deletion
    window.confirmDeleteEntry = function() {
        // Get the entry data
        const calories = parseInt(entryDiv.querySelector("p:nth-child(2)").textContent.split(': ')[1]); // Get calories from the second <p> element
        const protein = parseInt(entryDiv.querySelector("p:nth-child(3)").textContent.split(': ')[1]); // Get protein from the third <p> element
        const fats = parseInt(entryDiv.querySelector("p:nth-child(4)").textContent.split(': ')[1]); // Get fats from the fourth <p> element
        const carbs = parseInt(entryDiv.querySelector("p:nth-child(5)").textContent.split(': ')[1]); // Get carbs from the fifth <p> element
        const sugar = parseInt(entryDiv.querySelector("p:nth-child(6)").textContent.split(': ')[1]); // Get sugar from the sixth <p> element
        const fiber = parseInt(entryDiv.querySelector("p:nth-child(7)").textContent.split(': ')[1]); // Get fiber from the seventh <p> element

        // Update total values by subtracting the values of the deleted entry
        updateCardAndStorage("calories", -calories);
        updateCardAndStorage("protein", -protein);
        updateCardAndStorage("fats", -fats);
        updateCardAndStorage("carbs", -carbs);
        updateCardAndStorage("sugar", -sugar);
        updateCardAndStorage("fiber", -fiber);

        // Remove the entry from the recent entries list
        entryDiv.remove();

        // Remove the entry from localStorage
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries = entries.filter(entry => entry.name !== name || entry.servingSize !== servingSize);
        localStorage.setItem('entries', JSON.stringify(entries));

        // Update the charts
        updateCharts();

        // Close the confirmation box
        closeConfirmationBox();
    };
}

// Function to close the confirmation box
function closeConfirmationBox() {
    const confirmationBox = document.getElementById('confirmationBox');
    confirmationBox.style.display = 'none';
}

// Get form values
let caloriesMaxInput = parseInt(document.getElementById("calories-max-input").value) || 0;
let proteinMaxInput = parseInt(document.getElementById("protein-max-input").value) || 0;
let fatsMaxInput = parseInt(document.getElementById("fats-max-input").value) || 0;
let carbsMaxInput = parseInt(document.getElementById("carbs-max-input").value) || 0;
let sugarMaxInput = parseInt(document.getElementById("sugar-max-input").value) || 0;
let fiberMaxInput = parseInt(document.getElementById("fiber-max-input").value) || 0;

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Check which form was submitted based on the presence of input fields
    const isAddNewForm = event.target.querySelector('#name-input');
    const isSetGoalForm = event.target.querySelector('#calories-max-input');

    if (isAddNewForm) {
        // This is the "Add New" form
        let name = document.getElementById("name-input").value;
        let servingSize = parseInt(document.getElementById("serving-size-input").value) || 0;
        let calories = parseInt(document.getElementById("calories-input").value) || 0;
        let protein = parseInt(document.getElementById("protein-input").value) || 0;
        let fats = parseInt(document.getElementById("fats-input").value) || 0;
        let carbs = parseInt(document.getElementById("carbs-input").value) || 0;
        let sugar = parseInt(document.getElementById("sugar-input").value) || 0;
        let fiber = parseInt(document.getElementById("fiber-input").value) || 0;

        // Update card values and store them in localStorage
        updateCardAndStorage("calories", calories);
        updateCardAndStorage("protein", protein);
        updateCardAndStorage("fats", fats);
        updateCardAndStorage("carbs", carbs);
        updateCardAndStorage("sugar", sugar);
        updateCardAndStorage("fiber", fiber);
        updateCharts()
        // Create and append a recent entry
        createRecentEntry(name, servingSize, calories, protein, fats, carbs, sugar, fiber);
    } else if (isSetGoalForm) {
        // This is the "Set Goal" form
        let caloriesMaxInput = parseInt(document.getElementById("calories-max-input").value) || 0;
        let proteinMaxInput = parseInt(document.getElementById("protein-max-input").value) || 0;
        let fatsMaxInput = parseInt(document.getElementById("fats-max-input").value) || 0;
        let carbsMaxInput = parseInt(document.getElementById("carbs-max-input").value) || 0;
        let sugarMaxInput = parseInt(document.getElementById("sugar-max-input").value) || 0;
        let fiberMaxInput = parseInt(document.getElementById("fiber-max-input").value) || 0;

        // Check if any input value is 0 or empty, set default max value to 100
    if (caloriesMaxInput === 0 || isNaN(caloriesMaxInput)) {
        caloriesMaxInput = 2000;
    }
    if (proteinMaxInput === 0 || isNaN(proteinMaxInput)) {
        proteinMaxInput = 60;
    }
    if (fatsMaxInput === 0 || isNaN(fatsMaxInput)) {
        fatsMaxInput = 65;
    }
    if (carbsMaxInput === 0 || isNaN(carbsMaxInput)) {
        carbsMaxInput = 300;
    }
    if (sugarMaxInput === 0 || isNaN(sugarMaxInput)) {
        sugarMaxInput = 35;
    }
    if (fiberMaxInput === 0 || isNaN(fiberMaxInput)) {
        fiberMaxInput = 25;
    }

 
        // Update max value elements
        document.getElementById("calories-max").textContent = "/" + caloriesMaxInput;
        document.getElementById("protein-max").textContent = "/" + proteinMaxInput;
        document.getElementById("fats-max").textContent = "/" + fatsMaxInput;
        document.getElementById("carbs-max").textContent = "/" + carbsMaxInput;
        document.getElementById("sugar-max").textContent = "/" + sugarMaxInput;
        document.getElementById("fiber-max").textContent = "/" + fiberMaxInput;

        // Save the max values to localStorage
        localStorage.setItem("caloriesMax", caloriesMaxInput.toString());
        localStorage.setItem("proteinMax", proteinMaxInput.toString());
        localStorage.setItem("fatsMax", fatsMaxInput.toString());
        localStorage.setItem("carbsMax", carbsMaxInput.toString());
        localStorage.setItem("sugarMax", sugarMaxInput.toString());
        localStorage.setItem("fiberMax", fiberMaxInput.toString());

        updateCharts()

    }

    // Reset the form
    event.target.reset();

    closePopup();
}

// Function to close all popups
function closeAllPopups() {
    closePopup(); // Close the main popup
    closeResetConfirmation(); // Close the reset confirmation popup
    closeConfirmationBox(); // Close the deletion confirmation popup
    closeInfoPopup(); // Close the info popup
}

// Add event listener for keydown event on document
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllPopups();
    }
});

$(document).ready(function() {
        // Retrieve previously searched food name from local storage
        var searchedFoodName = localStorage.getItem('searchedFoodName');
        if (searchedFoodName) {
            $('#food-input').val(searchedFoodName);
        }

        // Retrieve previously fetched food details from local storage
        var storedFoodDetails = JSON.parse(localStorage.getItem('foodDetails'));
        if (storedFoodDetails) {
            displayFoodDetails(storedFoodDetails);
        }

        $('#search-btn').click(function() {
            var query = $('#food-input').val();
            localStorage.setItem('searchedFoodName', query);
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
                headers: { 'X-Api-Key': 'OkKhWsEL3I5z2iqhu41Ipg==fWlLDA8h3RNoqFfq'},
                contentType: 'application/json',
                success: function(result) {
                    // Save the fetched food details to local storage
                    localStorage.setItem('foodDetails', JSON.stringify(result));
                    displayFoodDetails(result);
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
        });
        
        function displayFoodDetails(foodData) {
            var html = '<ul>';
                $.each(foodData, function(index, food) {
                    html += '<div class="food-details-name-sep"><div class="food-details-name"><li>Food Name: ' + food.name + '</li></div></div>';
                    html += '<div class="food-details-serving"><li>Serving Size: <strong>' + food.serving_size_g + 'g</strong></li> <hr class="food-details-lines"></div>';
                    html += '<div class="food-details-sep"><li>Calories: <strong>' + food.calories + 'g</strong></li></div>';
                    html += '<div class="food-details-sep"><li>Protein: <strong>' + food.protein_g + 'g</strong></li></div>';
                    html += '<div class="food-details-sep"><li>Fat: <strong>' + food.fat_total_g + 'g</strong></li></div>';
                    html += '<div class="food-details-sep"><li>Carbohydrates: <strong>' + food.carbohydrates_total_g + '</strong>g</li></div>';
                    html += '<div class="food-details-sep"><li>Sugar: <strong>' + food.sugar_g + 'g</strong></li></div>';
                    html += '<div class="food-details-sep"><li>Fiber: <strong>' + food.fiber_g + 'g</strong></li></div>';
                });
            html += '</ul>';
            $('#food-details').html(html);
        }
    });
