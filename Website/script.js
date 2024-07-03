document.addEventListener("DOMContentLoaded", () => {
    function updateDateTime() {
        const currentTimeUTC = document.getElementById("currentTimeUTC");
        const currentDay = document.getElementById("currentDay");

        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});
