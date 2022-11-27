import initChart from "./chart.js";

initChart(
    ["7.1", "7.2", "7.18", "7.25", "7.28"],
    [500, 1000, 2200, 2600, 1700],
    document.querySelector('#myChart').getContext('2d')
);