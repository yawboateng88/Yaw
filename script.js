let printerDevice;

document.getElementById('connectPrinter').addEventListener('click', async () => {
    try {
        // Request a Bluetooth device
        printerDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service']
        });

        // Connect to the device's GATT server
        const server = await printerDevice.gatt.connect();
        alert('Printer connected successfully!');
    } catch (error) {
        alert('Failed to connect to printer: ' + error.message);
    }
});

document.getElementById('receiptForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!printerDevice) {
        alert('Please connect to a Bluetooth printer first!');
        return;
    }

    // Get input values
    const marketId = document.getElementById('marketId').value;
    const receiptNo = document.getElementById('receiptNo').value;
    const datePaid = document.getElementById('datePaid').value;
    const customerName = document.getElementById('customerName').value;
    const phone = document.getElementById('phone').value;
    const marketName = document.getElementById('marketName').value;
    const amountPaid = document.getElementById('amountPaid').value;

    // Format receipt content
    const receiptContent = `
Market Toll Receipt
--------------------------
Market ID: ${marketId}
Receipt No: ${receiptNo}
Date Paid: ${datePaid}
Bill To: ${customerName}
Phone: ${phone}
Market Name: ${marketName}
Amount Paid: GHS ${amountPaid}
--------------------------
Thank you for your payment!
`;

    try {
        // Send ESC/POS commands to the printer
        const encoder = new TextEncoder();
        const receiptData = encoder.encode(receiptContent);

        const characteristic = await printerDevice.gatt.getPrimaryService('battery_service')
            .then(service => service.getCharacteristic('battery_level'));
        await characteristic.writeValue(receiptData);

        alert('Receipt printed successfully!');
    } catch (error) {
        alert('Failed to print receipt: ' + error.message);
    }
});
