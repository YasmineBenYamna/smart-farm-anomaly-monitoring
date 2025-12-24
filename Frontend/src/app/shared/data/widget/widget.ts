import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
  ApexTheme,
  ApexMarkers,
  ApexAnnotations,
  ApexGrid,
  ApexForecastDataPoints,
  ApexNoData,
  ApexStates,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#6362E7";
let success_color = localStorage.getItem("success_color") || "#7dc006";
let secondary_color = localStorage.getItem("secondary_color") || "#ffc500";
let info_color = localStorage.getItem("sinfo_color") || "#1d97ff";
let warning_color = localStorage.getItem("warning_color") || "#ff8819";

let zetaAdminConfig_primary = localStorage.getItem("primary") || "#6362E7";

export interface ApexOptions {
  annotations?: ApexAnnotations;
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  forecastDataPoints?: ApexForecastDataPoints;
  grid?: ApexGrid;
  labels?: string[];
  legend?: ApexLegend;
  markers?: ApexMarkers;
  noData?: ApexNoData;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  states?: ApexStates;
  stroke?: ApexStroke;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
  title?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
}

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
};

export let column: ChartOptions | any = {
  series: [
    {
      name: "Revenue",
      data: [19, 28, 31, 25, 35, 18, 23],
    },
    {
      name: "Free Cash Flow",
      data: [25, 31, 35, 29, 39, 22, 28],
    },
  ],
  chart: {
    type: "bar",
    height: 263,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [primary_color, secondary_color],
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      offsetX: 0,
      offsetY: -6,
      style: {
        colors: "#8E97B2",
        fontWeight: 400,
        fontSize: "10px",
        fontFamily: "roboto",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    // labels:{
    //   offsetX: 14,
    //   offsetY: -5
    // },
    tooltip: {
      enabled: true,
    },
    labels: {
      formatter: function (value: any) {
        return value + "k";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return "$ " + val + " thousands";
      },
    },
  },
  //   states: {
  //       hover: {
  //         filter: {
  //           type: 'darken',
  //           value: 1,
  //         }
  //       }
  //   },
};

export let sale: ChartOptions | any = {
  series: [
    {
      name: "Desktops",
      data: [18, 30, 25, 51, 34, 40, 34],
    },
  ],
  chart: {
    height: 142,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      bottom: 2,
      left: 10,
      blur: 6,
      color: "#000",
      opacity: 0.35,
    },
  },
  colors: ["#fff"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: -30,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

export let pie: ChartOptions | any = {
  labels: ["Men", "Women", "Accessories", "Children", "Apperal"],
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
    height: 320,
  },
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    width: 0,
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 310,
        },
      },
    },
    {
      breakpoint: 481,
      options: {
        chart: {
          height: 280,
        },
      },
    },
  ],
  colors: [primary_color, secondary_color, success_color, info_color, warning_color],
};

export let totalSale: ChartOptions | any = {
  series: [
    {
      name: "Desktops",
      data: [25, 12, 9, 16, 10, 21, 55, 104, 64, 70, 25],
    },
  ],
  chart: {
    height: 95,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 6,
      blur: 4,
      color: "#6362e7",
      opacity: 0.2,
    },
  },
  colors: ["#6362e7"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    lineCap: "butt",
  },

  tooltip: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: 0,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 421,
      options: {
        chart: {
          height: 60,
        },
      },
    },
  ],
};

// earning chart
export let earning: ChartOptions | any = {
  series: [
    {
      name: "Series 1",
      data: [
        [1327359600000, 6],
        [1327446000000, 20],
        [1327532400000, 15],
        [1327618800000, 40],
        [1327878000000, 18],
        [1327964400000, 20],
        [1328050800000, 18],
        [1328137200000, 23],
        [1328223600000, 18],
        [1328482800000, 35],
        [1328569200000, 30],
        [1328655600000, 55],
        [1328742000000, 0],
      ],
    },
  ],
  chart: {
    height: 145,
    type: "area",
    toolbar: {
      show: false,
    },
  },

  stroke: {
    curve: "smooth",
    colors: [primary_color],
    lineCap: "round",
    width: 3,
  },
  annotations: {
    points: [
      {
        x: new Date("31 January 2012").getTime(),
        y: 20,
        marker: {
          size: 6,
          fillColor: "#fff",
          strokeColor: primary_color,
          radius: 3,
          strokeWidth: 3,
        },
      },
    ],
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    opacity: 0.1,
    gradient: {
      type: "vertical",
      opacityFrom: 0.65,
      opacityTo: 0.3,
      stops: [0, 100],
    },
  },

  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    type: "datetime",

    show: false,
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    x: {
      show: false,
    },
    y: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      right: 0,
      bottom: 0,
      top: -35,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 105,
        },
      },
    },
  ],
};

// weekly chart
// export let weeklyChart: ChartOptions | any = {
//   series: [
//     {
//       name: "Statistics",
//       data: [500, 600, 200, 700, 750, 500],
//     },
//     {
//       name: "Statistics",
//       data: [800, 800, 800, 800, 800, 800],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 230,
//     stacked: true,
//     stackType: "100%",
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "20px",
//       borderRadius: 5,
//     },
//   },
//   grid: {
//     show: false,
//     xaxis: {
//       lines: {
//         show: false,
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   // fill: {
//   //   opacity: 0.9,
//   // },
//   legend: {
//     show: false,
//   },
//   states: {
//     hover: {
//       // filter: {
//       //   type: "darken",
//       //   value: 1,
//       // },
//     },
//   },
//   colors: ["#f4f6fd" ,"#6362e7"],
//   yaxis: {
//     tickAmount: 3,
//     min: 0,
//     max: 800, 

//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   xaxis: {
//     categories: ["M", "T", "W", "T", "F", "S"],
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 1600,
//       options: {
//         chart: {
//           height: 200,
//         },
//       },
//     },
//     {
//       breakpoint: 1366,
//       options: {
//         chart: {
//           height: 190,
//         },
//       },
//     },
//     {
//       breakpoint: 1101,
//       options: {
//         chart: {
//           height: 200,
//         },
//       },
//     },
//     {
//       breakpoint: 992,
//       options: {
//         chart: {
//           height: 380,
//         },
//       },
//     },
//     {
//       breakpoint: 576,
//       options: {
//         chart: {
//           height: 250,
//         },
//       },
//     },
//   ],
// };
export let weeklyChart: ChartOptions | any = {
  series: [
    {
      name: "Statistics 1",
      data: [500, 600, 200, 700, 750, 500],
    },
    {
      name: "Statistics 2",
      data: [800, 800, 800, 800, 800, 800],
    },
  ], 
  chart: {
    type: "bar",
    height: 230,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "10px",
      borderRadius: 5,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  colors: ["#6362e7", "#f4f6fd"],
  yaxis: {
    tickAmount: 3,
    min: 0,
    max: 800, 
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 190,
        },
      },
    },
    {
      breakpoint: 1101,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 380,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};


// transaction chart

export let transactionChart: ChartOptions | any = {
  series: [
    {
      name: "Males",
      data: [0, 20, 40, 60, 90, 70, 45, 30],
    },
    {
      name: "Females",
      data: [0, -20, -40, -60, -90, -70, -45, -30],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    height: 155,
    stacked: true,
  },
  colors: ["#6362e7" , "#ffc500"],
  plotOptions: {
    bar: {
      barHeight: "60%",
      horizontal: true,
      startingShape: "rounded",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    borderRadius: 10,
    colors: ["#fff"],
  },
  grid: {
    borderColor: "#1e2f6533",
    xaxis: {
      lines: {
        show: true,
        color: "#1e2f6533",
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -20,
      right: 0,
      bottom: -10,
      left: 0,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      formatter: function (val: any) {
        return val;
      },
    },
    y: {
      formatter: function (val: any) {
        return Math.abs(val) + "%";
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  xaxis: {
    position: "top",
    categories: ["85+", "80-84", "75-79", "70-74", "65-69", "60-64", "55-59", "50-54"],
    labels: {
      formatter: function (val: any) {
        return Math.abs(Math.round(val));
      },
      offsetX: 0,
      offsetY: 5,
      rotate: 0,
      style: {
        colors: ["#1e2f6533"],
        fontSize: "12px",
        fontWeight: 400, 
      }, 
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};



// yearly chart
export let yearlyChart: ChartOptions | any = {
  annotations: {
    points: [
      {
        x: new Date("14 Feb 2022").getTime(),
        y: 18,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: primary_color,
          radius: 2,
        },
      },
    ],
  },

  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 4,
      blur: 4,
      color: primary_color,
      opacity: 0.14,
    },
    height: 160,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
    dashArray: 8,
    show: true,
    curve: "smooth",
    lineCap: "round",
  },
  yaxis: {
    show: false,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },

  colors: [primary_color],
  series: [
    {
      name: "Series 1",
      data: [
        [1486771200000, 1],
        [1486857600000, 12],
        [1486944000000, 8],
        [1487030400000, 20],
      ],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -20,
      right: 0,
      top: -30,
      bottom: 0,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    labels: {
      offsetX: -30,
      offsetY: 0,
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
      return '<div class="arrow_box">' + "<span>" + series[seriesIndex][dataPointIndex] + "</span>" + "</div>";
    },
  },
  responsive: [
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 170,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 120,
        },
      },
    },
  ],
};

export let bitcoin: ChartOptions | any = {
  series: [
    {
      data: [
        [1351202400000, 37.3],
        [1351338000000, 36.6],
        [1351424400000, 39.5],
        [1351710800000, 32.55],
        [1351870000000, 32.55],
        [1352056400000, 35.6],
        [1352342800000, 30.45],
        [1352629200000, 39.6],
        [1352815600000, 37.5],
        [1352924000000, 38.3],
        [1353061200000, 36.2],
        [1353134000000, 37.25],
        [1353220400000, 37.22],
        [1353479600000, 33.3],
        [1353566000000, 34.23],
        [1353632400000, 32.3],
        [1353757200000, 34.23],
        [1353857200000, 36.3],
        [1353957200000, 38.28],
        [1354021500000, 37.1],
        [1354175600000, 39.28],
        [1354362000000, 36.22],
        [1354548400000, 36.22],
        [1354634800000, 38.55],
        [1354794000000, 36.22],
        [1354980400000, 40.5],
        [1355166800000, 40.8],
        [1355253200000, 39.5],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
        [1355885200000, 33.4],
        [1355985200000, 36.4],
        [1356085200000, 39.4],
      ],
    },
  ],
  chart: {
    type: "area",
    height: 100,
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "square",
    colors: undefined,
    width: 3,
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {},

  grid: {
    show: false,

    padding: {
      top: -40,
      right: 0,
      bottom: -40,
      left: 0,
    },
  },
  legend: {
    show: false,
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  icon: "bitcoin",
  coinName: "bitcoin",
  nameColor: "font-primary",
  iconBg: "primary",
  subName: "(BTC)",
  coinPrice: "305.64",
  percentage: "7.6",
  classColor: "badge-light-primary",
  arrow: "up",
};
// var chart = new ApexCharts(document.querySelector("#bitcoin-chart"), options);
// chart.render();
// bitcoin-chart end

// ripple chart start

export let ripple: ChartOptions | any = {
  series: [
    {
      data: [
        [1351202400000, 37.3],
        [1351338000000, 38.6],
        [1351424400000, 39.5],
        [1351710800000, 37.55],
        [1351870000000, 39.55],
        [1352056400000, 37.6],
        [1352342800000, 39.45],
        [1352629200000, 39.6],
        [1352815600000, 37.5],
        [1352924000000, 38.3],
        [1353061200000, 36.2],
        [1353134000000, 37.25],
        [1353220400000, 37.22],
        [1353479600000, 36.3],
        [1353566000000, 35.23],
        [1353632400000, 35.3],
        [1353757200000, 38.23],
        [1353857200000, 36.3],
        [1353957200000, 38.28],
        [1354021500000, 37.1],
        [1354175600000, 39.28],
        [1354362000000, 36.22],
        [1354548400000, 36.22],
        [1354634800000, 38.55],
        [1354794000000, 36.22],
        [1354980400000, 40.5],
        [1355166800000, 40.8],
        [1355253200000, 39.5],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
        [1355885200000, 33.4],
        [1355985200000, 36.4],
        [1356085200000, 39.4],
      ],
    },
  ],
  chart: {
    type: "area",
    height: 100,
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },

  grid: {
    show: false,

    padding: {
      top: -40,
      right: 0,
      bottom: -40,
      left: 0,
    },
  },
  legend: {
    show: false,
  },
  colors: ["#ffc500"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  icon: "ripple",
  coinName: "ripple",
  nameColor: "font-secondary",
  iconBg: "secondary",
  subName: "(XRP)",
  coinPrice: "52367.32",
  percentage: "2.8",
  classColor: "badge-light-secondary",
  arrow: "up",
};

export let ethereum: ChartOptions | any = {
  series: [
    {
      data: [
        [1351202400000, 37.3],
        [1351338000000, 36.6],
        [1351424400000, 39.5],
        [1351710800000, 32.55],
        [1351870000000, 32.55],
        [1352056400000, 35.6],
        [1352342800000, 30.45],
        [1352629200000, 39.6],
        [1352815600000, 37.5],
        [1352924000000, 38.3],
        [1353061200000, 36.2],
        [1353134000000, 37.25],
        [1353220400000, 37.22],
        [1353479600000, 33.3],
        [1353566000000, 34.23],
        [1353632400000, 32.3],
        [1353757200000, 34.23],
        [1353857200000, 36.3],
        [1353957200000, 38.28],
        [1354021500000, 37.1],
        [1354175600000, 39.28],
        [1354362000000, 36.22],
        [1354548400000, 36.22],
        [1354634800000, 38.55],
        [1354794000000, 36.22],
        [1354980400000, 40.5],
        [1355166800000, 40.8],
        [1355253200000, 39.5],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
        [1355885200000, 33.4],
        [1355985200000, 36.4],
        [1356085200000, 39.4],
      ],
    },
  ],
  chart: {
    type: "area",
    height: 100,
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },

  grid: {
    show: false,

    padding: {
      top: -40,
      right: 0,
      bottom: -40,
      left: 0,
    },
  },
  legend: {
    show: false,
  },
  colors: ["#00B8E9"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  icon: "ethereum",
  coinName: "ethereum",
  nameColor: "font-info",
  iconBg: "info",
  subName: "(ETH)",
  coinPrice: "68.52",
  percentage: "5.9",
  classColor: "badge-light-info",
  arrow: "up",
};

export let litecoin: ChartOptions | any = {
  series: [
    {
      data: [
        [1351202400000, 37.3],
        [1351338000000, 36.6],
        [1351424400000, 39.5],
        [1351710800000, 32.55],
        [1351870000000, 32.55],
        [1352056400000, 35.6],
        [1352342800000, 30.45],
        [1352629200000, 39.6],
        [1352815600000, 37.5],
        [1352924000000, 38.3],
        [1353061200000, 36.2],
        [1353134000000, 37.25],
        [1353220400000, 37.22],
        [1353479600000, 33.3],
        [1353566000000, 34.23],
        [1353632400000, 32.3],
        [1353757200000, 34.23],
        [1353857200000, 36.3],
        [1353957200000, 38.28],
        [1354021500000, 37.1],
        [1354175600000, 39.28],
        [1354362000000, 36.22],
        [1354548400000, 36.22],
        [1354634800000, 38.55],
        [1354794000000, 36.22],
        [1354980400000, 40.5],
        [1355166800000, 40.8],
        [1355253200000, 39.5],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
        [1355885200000, 33.4],
        [1355985200000, 36.4],
        [1356085200000, 39.4],
      ],
    },
  ],
  chart: {
    type: "area",
    height: 100,
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },

  grid: {
    show: false,

    padding: {
      top: -40,
      right: 0,
      bottom: -40,
      left: 0,
    },
  },
  legend: {
    show: false,
  },
  colors: ["#FF8819"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  icon: "litecoin",
  coinName: "litecoin",
  nameColor: "font-warning",
  iconBg: "warning",
  subName: "(LTC)",
  coinPrice: "204.42",
  percentage: "4.2",
  classColor: "badge-light-warning",
  arrow: "up",
};

export let notification: ChartOptions | any = {
  series: [
    {
      name: "Series 1",
      data: [
        [1327359600000, 6],
        [1327446000000, 20],
        [1327532400000, 15],
        [1327618800000, 40],
        [1327878000000, 18],
      ],
    },
  ],
  chart: {
    type: "line",
    height: 40,
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    curve: "smooth",
    width: 3,
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },

  grid: {
    show: false,

    padding: {
      top: -28,
      left: -10,
      bottom: 0,
      right: -20,
    },
  },
  legend: {
    show: false,
  },
  colors: [primary_color],
};

export let candlestick: ChartOptions | any = {
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  chart: {
    type: "candlestick",
    height: 320,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#8E97B2",
        fontWeight: 400,
        fontSize: "10px",
        fontFamily: "roboto",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: primary_color,
        downward: secondary_color,
      },
      wick: {
        useFillColor: true,
      },
    },
  },

  grid: {
    show: false,

    padding: {
      top: -20,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    labels: {
      style: {
        colors: ["#1E2F65"],
        fontWeight: 400,
        fontSize: "12px",
        fontFamily: "roboto",
      },
      offsetX: 0,
      offsetY: 0,
    },
  },
};

// productchart
export let productchart: ChartOptions | any = {
  chart: {
    height: 320,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },

  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  fill: {
    colors: [primary_color, secondary_color],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },

  colors: [primary_color, secondary_color],
  labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09 ", "10", "11", "12"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Series A",
      },
    },
    {
      opposite: true,
      title: {
        text: "Series B",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: any) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};

export let salesradar: ChartOptions | any = {
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "Reflected",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  colors: [primary_color, secondary_color, "#7dc006"],
  chart: {
    height: 300,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  title: {
    text: "Radar Chart - Multi Series",
  },
  stroke: {
    width: 0,
  },
  markers: {
    size: 0,
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

export let smallChat: ChartOptions | any = {
  labels: ["M", "T", "W", "T", "F", "S", "M"],
  series: [
    [4, 9, 8, 10, 7, 12],
    [10, 5, 6, 4, 7, 2],
  ],
};
