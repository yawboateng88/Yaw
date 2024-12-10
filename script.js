document.getElementById('receiptForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const marketId = document.getElementById('marketId').value;
    const receiptNo = document.getElementById('receiptNo').value;
    const datePaid = document.getElementById('datePaid').value;
    const customerName = document.getElementById('customerName').value;
    const phone = document.getElementById('phone').value;
    const marketName = document.getElementById('marketName').value;
    const amountPaid = document.getElementById('amountPaid').value;

    // Generate receipt content
    const receiptContent = `
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

    // Display the receipt content
    const receiptPreview = document.getElementById('receiptPreview');
    receiptPreview.textContent = receiptContent;
    receiptPreview.style.display = 'block';

    // Trigger print
    window.print();
});
