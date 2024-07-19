// Add event listener to pay now button
document.getElementById('pay-now').addEventListener('click', function() {
    // Get payment information
    var cardNumber = document.getElementById('card-number').value;
    var expirationDate = document.getElementById('expiration-date').value;
    var cvv = document.getElementById('cvv').value;

    // Validate payment information
    if (!validateCardNumber(cardNumber) || !validateExpirationDate(expirationDate) || !validateCvv(cvv)) {
        alert('Invalid payment information');
        return;
    }

    // Tokenize payment information (optional)
    var token = tokenizePaymentInformation(cardNumber, expirationDate, cvv);

    // Make payment request to payment gateway API
    fetch('https://your-payment-gateway.com/api/charge', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: token
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle payment response
        if (data.success) {
            alert('Payment successful!');
        } else {
            alert('Payment failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error making payment:', error);
        alert('Payment failed. Please try again.');
    });
});

// Validation functions
function validateCardNumber(cardNumber) {
    // Implement card number validation logic
    return true; // or false
}

function validateExpirationDate(expirationDate) {
    // Implement expiration date validation logic
    return true; // or false
}

function validateCvv(cvv) {
    // Implement CVV validation logic
    return true; // or false
}

// Tokenization function (optional)
function tokenizePaymentInformation(cardNumber, expirationDate, cvv) {
    // Implement tokenization logic
    return 'token'; // or null
}

// Add event listener to pay now button
document.getElementById('pay-now').addEventListener('click', function() {
    // Get payment method selection
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    // Get payment information based on payment method
    var paymentInfo;
    if (paymentMethod === 'credit-card') {
        paymentInfo = {
            cardNumber: document.getElementById('card-number').value,
            expirationDate: document.getElementById('expiration-date').value,
            cvv: document.getElementById('cvv').value
        };
    } else if (paymentMethod === 'paypal') {
        paymentInfo = {
            paypalEmail: document.getElementById('paypal-email').value
        };
    } else if (paymentMethod === 'bank-transfer') {
        paymentInfo = {
            bankAccountNumber: document.getElementById('bank-account-number').value,
            bankRoutingNumber: document.getElementById('bank-routing-number').value
        };
    }

    // Validate payment information
    if (!validatePaymentInfo(paymentMethod, paymentInfo)) {
        alert('Invalid payment information');
        return;
    }

    // Tokenize payment information (optional)
    var token;
    if (paymentMethod === 'credit-card') {
        token = tokenizeCreditCardPaymentInfo(paymentInfo.cardNumber, paymentInfo.expirationDate, paymentInfo.cvv);
    } else {
        token = null;
    }

    // Make payment request to payment gateway API
    fetch('https://your-payment-gateway.com/api/charge', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            paymentMethod: paymentMethod,
            paymentInfo: paymentInfo,
            token: token
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle payment response
        if (data.success) {
            alert('Payment successful!');
        } else {
            alert('Payment failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error making payment:', error);
        alert('Payment failed. Please try again.');
    });
});

// Validation functions
function validatePaymentInfo(paymentMethod, paymentInfo) {
    if (paymentMethod === 'credit-card') {
        return validateCreditCardPaymentInfo(paymentInfo);
    } else if (paymentMethod === 'paypal') {
        return validatePaypalPaymentInfo(paymentInfo);
    } else if (paymentMethod === 'bank-transfer') {
        return validateBankTransferPaymentInfo(paymentInfo);
    }
    return false;
}

function validateCreditCardPaymentInfo(paymentInfo) {
    return validateCardNumber(paymentInfo.cardNumber) && validateExpirationDate(paymentInfo.expirationDate) && validateCvv(paymentInfo.cvv);
}

function validatePaypalPaymentInfo(paymentInfo) {
    // Implement paypal payment info validation logic
    return true; // or false
}

function validateBankTransferPaymentInfo(paymentInfo) {
    // Implement bank transfer payment info validation logic
    return true; // or false
}

// Tokenization function (optional)
function tokenizeCreditCardPaymentInfo(cardNumber, expirationDate, cvv) {
    // Implement credit card tokenization logic
    return 'token'; // or null
}

const cart = {};
const totalPriceElement = document.getElementById('total-price');

document.addEventListener('DOMContentLoaded', () => {
    const addCartButtons = document.querySelectorAll('.add-to-cart');

    addCartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const productLi = event.target.parentNode;
            const price = parseInt(productLi.dataset.price, 10);

            if (!cart[productLi.dataset.price]) {
                cart[productLi.dataset.price] = 0;
            }

            cart[productLi.dataset.price] += price;

            let totalPrice = 12;
            Object.values(cart).forEach((price) => {
                totalPrice += price;
            });

            totalPriceElement.textContent = `Total Price: ${totalPrice} vnd`;
        });
    });
});