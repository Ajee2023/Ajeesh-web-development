const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374 , 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [ 31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36944 ],
                borderColor: 'blue',
                borderWidth: 2,
            }
        ]
    },
    option: {
        responsive: true
    }
})