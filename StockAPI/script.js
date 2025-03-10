document.addEventListener('DOMContentLoaded', function() {
    const marketData = document.getElementById('market-data');

   
    const mockData = [
        {
            full_name: "TSX Index",
            short_name: "TSX",
            percentage_change: "+1.44%",
            current_value: "25,147.03",
            trend: "up"
        },
        {
            full_name: "DOW",
            short_name: "DJI",
            percentage_change: "-1.69%",
            current_value: "43,426.02",
            trend: "down"
        },
        {
            full_name: "S&P 500",
            short_name: "INX",
            percentage_change: "-1.71%",
            current_value: "6,013.12",
            trend: "down"
        },
        {
            full_name: "NASDAQ",
            short_name: "COMP",
            percentage_change: "-2.20%",
            current_value: "19,524.01",
            trend: "down"
        },
        {
            full_name: "CAD/USD Canadian Dollar/United States Dollar",
            short_name: "CAD/USD",
            percentage_change: "-0.33%",
            current_value: "0.702",
            trend: "down"
        }
    ];

    mockData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('market-item');
        itemDiv.innerHTML = `
            <div class="market-name">
                <div>${item.full_name}</div>
                <div>${item.short_name}</div>
            </div>
            <div class="market-value">
                <div class="percentage-change ${item.trend}">${item.percentage_change}</div>
                <div>${item.current_value}</div>
            </div>
        `;
        marketData.appendChild(itemDiv);
    });
});