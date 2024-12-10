document.getElementById('receiptForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the input values
    const marketId = document.getElementById('marketId').value;
    const receiptNo = document.getElementById('receiptNo').value;
    const datePaid = document.getElementById('datePaid').value;
    const customerName = document.getElementById('customerName').value;
    const phone = document.getElementById('phone').value;
    const marketName = document.getElementById('marketName').value;
    const amountPaid = document.getElementById('amountPaid').value;

    // Format the receipt text for printing
    const receiptText = `
--------------------------------------
   Accra Metropolitan Assembly
        Market Toll Receipt
--------------------------------------
Market ID: ${marketId}
Receipt No: ${receiptNo}
Date Paid: ${datePaid}
Bill To: ${customerName}
Phone: ${phone}
Market Name: ${marketName}
Amount Paid: GHS ${amountPaid}
--------------------------------------
     Thank you for your payment!
--------------------------------------
    `;

    // Create a hidden iframe to print the receipt
    const printWindow = window.open('', '_blank', 'width=300,height=600');
    printWindow.document.write(`<pre>${receiptText}</pre>`);
    printWindow.document.close();

    // Automatically print and close the window
    printWindow.print();
    printWindow.close();
});
