
// Initial state
let selectedOption = 2;
const prices = {
    1: 10.00,
    2: 18.00,
    3: 24.00
};

// Function to select an option
function selectOption(option) {
    // Update selected option
    selectedOption = option;
    
    // Update UI
    document.querySelectorAll('.option-container').forEach((container, index) => {
        const optionNumber = index + 1;
        const radioContainer = container.querySelector('.radio-container');
        
        if (optionNumber === option) {
            container.classList.add('selected');
            radioContainer.classList.add('selected');
            radioContainer.querySelector('.radio-inner').style.backgroundColor = '#ff7a8a';
        } else {
            container.classList.remove('selected');
            radioContainer.classList.remove('selected');
            radioContainer.querySelector('.radio-inner').style.backgroundColor = 'transparent';
        }
    });
    
    // Show/hide options grid
    const optionsGrid = document.querySelector('.options-grid');
    if (option === 2) {
        optionsGrid.style.display = 'grid';
    } else {
        optionsGrid.style.display = 'none';
    }
    
    // Update total price
    updateTotalPrice();
}

// Function to update total price
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${prices[selectedOption].toFixed(2)} USD`;
}

// Initialize the UI
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state
    selectOption(2);
    
    // Add event listeners for dropdowns
    const dropdowns = document.querySelectorAll('select');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', () => {
            // In a real application, you might update prices based on selections
            console.log(`${dropdown.id} changed to ${dropdown.value}`);
        });
    });
    
    // Add event listener for Add to Cart button
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        const selectedSizes = [];
        const selectedColors = [];
        
        if (selectedOption === 2) {
            selectedSizes.push(document.getElementById('size1').value);
            selectedSizes.push(document.getElementById('size2').value);
            selectedColors.push(document.getElementById('color1').value);
            selectedColors.push(document.getElementById('color2').value);
        }
        
        alert(`Added ${selectedOption} unit(s) to cart for $${prices[selectedOption].toFixed(2)} USD`);
        console.log({
            units: selectedOption,
            price: prices[selectedOption],
            sizes: selectedSizes,
            colors: selectedColors
        });
    });
});
