//READ VALUE FROM ADRUINO

/*const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Replace '/dev/ttyACM0' with your Arduino's serial port
const port = new SerialPort({
  path: 'COM7',
  baudRate: 9600
});

// Create a parser to read lines from the serial port
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// Open the serial port
port.on('open', () => {
  console.log('Serial port open');
});
// Handle incoming data from Arduino
parser.on('data', (data) => {
 // console.log(`Received from Arduino: ${data}`);
 const values = data.trim().split(',').map(Number); // Split by comma and convert to numbers
 if (values.length === 4) {
   const [ldr1, ldr2, ldr3,ldr4] = values;
   console.log(`LDR1 Value: ${ldr1}`);
   console.log(`LDR2 Value: ${ldr2}`);
   console.log(`LDR3 Value: ${ldr3}`);
   console.log(`LDR4 Value: ${ldr4}`);
 } else {
   console.error('Unexpected data format:', data);
 }


});

// Handle errors
port.on('error', (err) => {
  console.error('Error: ', err.message);
});*/


// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const lineChartOptions = {
  series: [
    {
      name: '',
      data: [31, 40, 28, 51, 42, 109, 100],
    }
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#008000'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Enegry Captured',
      },
    },
    {
      opposite: true,
      title: {
        text: '',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const lineChart = new ApexCharts(
  document.querySelector('#line-chart'),
  lineChartOptions
);
lineChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'LDR1-West',
      data: [167,167,168,168,167,168],
    },
    {
      name: 'LDR2-North',
      data: [126,126,128,126,126,127],
    },
    {
      name: 'LDR3-East',
      data: [98,99,99,100,99,99],
    },
    {
      name: 'LDR4-South',
      data: [162,162,162,162,162,162],
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: true,
    },
  },
  colors: ['#4f35a1', '#246dec', '#FF0000', '#FFCC00'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Direction',
      },
    },
    {
      opposite: true,
      title: {
        text: '',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

/*const twoDArray = [
  [167, 126, 98, 162],
  [167, 126, 99, 162],
  [168, 128, 99, 162],
  [168, 126, 100, 162],
  [167, 126, 99, 162],
  [168, 127, 99, 162],
   [168, 128, 99, 162],
 [167, 126, 98, 162]
];

const columnArrays = [];
for (let i = 0; i < twoDArray[0].length; i++) {
  //console.log("Value of i:" + i);
  columnArrays.push(twoDArray.map(row => row[i]));
  //console.log(areaChartOptions.series[0].data);


  //console.log(columnArrays);
}

areaChartOptions.series[0].data[0] = columnArrays[0];
areaChartOptions.series[0].data[1] = columnArrays[1];
areaChartOptions.series[0].data[2] = columnArrays[2];
areaChartOptions.series[0].data[3] = columnArrays[3];

console.log("Values are:" + areaChartOptions.series[0].data[0]);
console.log("Values are:" + areaChartOptions.series[0].data[1]);
console.log("Values are:" + areaChartOptions.series[0].data[2]);
console.log("Values are:" + areaChartOptions.series[0].data[3]);*/


const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


// Add event listeners to toggle button or other elements as needed
// (e.g., document.getElementById('sidebar-toggle').addEventListener('click', openSidebar);)



