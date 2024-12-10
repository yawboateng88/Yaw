function generateReceipt() {
    // Get input values
    const marketId = document.getElementById('marketId').value;
    const receiptNo = document.getElementById('receiptNo').value;
    const datePaid = document.getElementById('datePaid').value;
    const customerName = document.getElementById('customerName').value;
    const phone = document.getElementById('phone').value;
    const marketName = document.getElementById('marketName').value;
    const amountPaid = document.getElementById('amountPaid').value;

    // Update receipt preview
    document.getElementById('previewMarketId').textContent = marketId;
    document.getElementById('previewReceiptNo').textContent = receiptNo;
    document.getElementById('previewDatePaid').textContent = datePaid;
    document.getElementById('previewCustomerName').textContent = customerName;
    document.getElementById('previewPhone').textContent = phone;
    document.getElementById('previewMarketName').textContent = marketName;
    document.getElementById('previewAmountPaid').textContent = amountPaid;
}
