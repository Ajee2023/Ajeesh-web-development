const apiKey = 'JAATO72WNV3KZUCT'; // Replace with your Alpha Vantage API key

async function getStockData(symbol) {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const globalQuote = data['Global Quote'];
        if (globalQuote) {
            return {
                symbol: globalQuote['01. symbol'],
                price: globalQuote['05. price'],
                change: globalQuote['09. change'],
                changePercent: globalQuote['10. change percent']
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return null;
    }
}

async function searchStock() {
    const symbol = document.getElementById('searchInput').value.toUpperCase();
    const stockData = await getStockData(symbol);

    if (stockData) {
        document.getElementById('stockSymbol').textContent = stockData.symbol;
        document.getElementById('stockPrice').textContent = `$${stockData.price}`;

        // Example Metrics (Replace with actual API data if available)
        document.getElementById('marketCap').textContent = '1.5T'; // Placeholder
        document.getElementById('volume').textContent = '25M'; // Placeholder

        // Display up or down arrow
        const arrowDisplay = document.getElementById('arrowDisplay');
        if (parseFloat(stockData.change) >= 0) {
            arrowDisplay.textContent = '▲'; // Up arrow
            arrowDisplay.style.color = 'green';
        } else {
            arrowDisplay.textContent = '▼'; // Down arrow
            arrowDisplay.style.color = 'red';
        }
    } else {
        document.getElementById('stockSymbol').textContent = 'Stock not found';
        document.getElementById('stockPrice').textContent = '';
        document.getElementById('marketCap').textContent = '';
        document.getElementById('volume').textContent = '';
        document.getElementById('arrowDisplay').textContent = ''; // Clear arrow
    }
}

document.getElementById('searchButton').addEventListener('click', searchStock);