const statusHeading = document.getElementById('status-heading');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', function() {
    
    if (statusHeading.textContent === "OFF") {
        statusHeading.textContent = "ON";
        statusHeading.style.color = "#28a745"; 
    } else {
        statusHeading.textContent = "OFF";
        statusHeading.style.color = "#333";
    }
});