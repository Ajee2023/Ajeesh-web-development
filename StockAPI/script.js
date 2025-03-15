const apiKey = 'JAATO72WNV3KZUCT';

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
        document.getElementById('symbol').textContent = stockData.symbol;
        document.getElementById('price').textContent = `$${stockData.price}`;
        document.getElementById('change').textContent = `${stockData.change} (${stockData.changePercent})`;

        if (parseFloat(stockData.change) >= 0) {
            document.getElementById('change').style.color = 'green';
        } else {
            document.getElementById('change').style.color = 'red';
        }
    } else {
        document.getElementById('symbol').textContent = 'Stock not found';
        document.getElementById('price').textContent = '';
        document.getElementById('change').textContent = '';
    }
}