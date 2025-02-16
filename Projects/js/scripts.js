


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


const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();






