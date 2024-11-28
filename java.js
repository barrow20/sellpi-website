document.getElementById('piForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const paymentMethod = document.getElementById('payment').value;
    const amount = document.getElementById('amount').value;

    let walletAddress;
    switch (paymentMethod) {
        case 'btc':
            walletAddress = 'Your-Bitcoin-Wallet-Address';
            break;
        case 'eth':
            walletAddress = 'Your-Ethereum-Wallet-Address';
            break;
        case 'usdt':
            walletAddress = 'Your-USDT-Wallet-Address';
            break;
        default:
            walletAddress = 'Unknown';
    }

    document.getElementById('walletAddress').textContent = walletAddress;
    document.getElementById('walletInfo').style.display = 'block';
});