const printButton = document.getElementById("printButton");
const status = document.getElementById("status");

// Sample receipt data
const receipt = `
Market Toll Receipt
--------------------
Date: 2024-12-10
Amount: GHS 10.00
Thank you!
`;

printButton.addEventListener("click", async () => {
    try {
        status.textContent = "Status: Connecting to printer...";

        // Request Bluetooth device
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'] // Adjust services if required by the printer
        });

        // Connect to the GATT server
        const server = await device.gatt.connect();
        status.textContent = `Status: Connected to ${device.name}`;

        // Send print data (ESC/POS formatted)
        const encoder = new TextEncoder();
        const data = encoder.encode(receipt);

        // Write data to the printer (simulated here)
        // This step will vary based on printer capabilities and specifications
        // Placeholder: Implement writing to ESC/POS printer service
        console.log("Data sent:", data);
        alert("Printed receipt (simulation)");

        status.textContent = "Status: Print successful!";
    } catch (error) {
        console.error("Error:", error);
        status.textContent = "Status: Connection failed. Check console.";
        alert("Failed to print. Ensure printer is compatible.");
    }
});
