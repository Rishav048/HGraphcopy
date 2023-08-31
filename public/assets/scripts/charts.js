/* chart1 - Line Chart */

document.addEventListener("DOMContentLoaded", function () {
  // const labels2 = [
  //   "JAN 2023",
  //   "FEB 2023",
  //   "MAR 2023",
  //   "APR 2023",
  //   "MAY 2023",
  //   "JUN 2023",
  //   "JUL 2023",
  //   "AUG 2023",
  //   "SEP 2023",
  //   "OCT 2023",
  //   "NOV 2023",
  //   "DEC 2023",
  // ];
  //  function createLeftToRightGradient(ctx) {
  //     const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0); // Adjust the values as needed for your chart
  //     gradient.addColorStop(0, "rgba(229, 227, 200, 0.25)");
  //     gradient.addColorStop(0.25, "rgba(246, 193, 220, 0.25)");
  //     gradient.addColorStop(0.5, "rgba(184, 197, 222, 0.25)");
  //     gradient.addColorStop(0.75, "rgba(180, 237, 211, 0.25)");
  //     gradient.addColorStop(1, "rgba(245, 231, 199, 0.25)");
  //     return gradient;
  //   }
  // const data1 = {
  //   labels: labels1,
  //   datasets: [
  //     {
  //       label: "Active Products",
  //       data: [
  //         65000, 59000, 80000, 81000, 56000, 55000, 40000, 65000, 59000,
  //         80000, 81000, 56000,
  //       ],
  //       borderColor: "#5A4898",
  //       tension: 0.4,
  //       borderWidth: 2,
  //       pointBorderColor: "#5A4898",
  //       pointBackgroundColor: "#5A4898",
  //       pointBorderWidth: 0,
  //       pointRadius: 0,
  //       pointHoverBackgroundColor: "rgba(0, 0, 0, 0)",
  //       pointHoverBorderColor: "#222",
  //       pointHoverBorderWidth: 3,
  //       pointHoverRadius: 7,
  //       fill: false,
  //     },
  //     {
  //       label: "Draft Products",
  //       data: [
  //         55000, 49000, 70000, 91000, 66000, 65000, 50000, 55000, 49000,
  //         70000, 91000, 66000,
  //       ],
  //       borderColor: "#A1AEFF",
  //       tension: 0.4,
  //       borderWidth: 2,
  //       borderDash: [7, 3],
  //       pointBorderColor: "#A1AEFF",
  //       pointBackgroundColor: "#A1AEFF",
  //       pointBorderWidth: 0,
  //       pointRadius: 0,
  //       pointHoverBackgroundColor: "rgba(0, 0, 0, 0)",
  //       pointHoverBorderColor: "#222",
  //       pointHoverBorderWidth: 3,
  //       pointHoverRadius: 7,
  //       fill: true,
  //       backgroundColor: function (context) {
  //         const chart = context.chart;
  //         const { ctx, chartArea } = chart;
  //         return createLeftToRightGradient(ctx);
  //       },
  //     },
  //   ],
  // };
  // let ctx1 = document.getElementById("chart_line").getContext("2d");
  // let chart_line = new Chart(ctx1, {
  //   type: "line",
  //   data: data1,
  //   options: {
  //     maintainAspectRatio: false,
  //     scales: {
  //       x: {
  //         beginAtZero: true,
  //         grid: {
  //           color: "#eaeaea",
  //         },
  //         ticks: {
  //           callback: function (value, index, values) {
  //             return this.getLabelForValue(value).split(" ")[0];
  //           },
  //           color: "#222222",
  //           padding: 5,
  //           font: {
  //             family: '"Bebas Neue", sans-serif',
  //             size: 12,
  //           },
  //         },
  //         border: {
  //           color: "#d6cfcc",
  //         },
  //       },
  //       y: {
  //         beginAtZero: true,
  //         grid: {
  //           color: "#eaeaea",
  //         },
  //         ticks: {
  //           callback: function (value, index, values) {
  //             if (value >= 1000) {
  //               return value / 1000 + "k";
  //             } else {
  //               return value;
  //             }
  //           },
  //           minRotation: 90,
  //           padding: 10,
  //           color: "#222222",
  //           font: {
  //             family: '"Bebas Neue", sans-serif',
  //             size: 12,
  //           },
  //         },
  //         border: {
  //           color: "#d6cfcc",
  //         },
  //       },
  //     },
  //     interaction: {
  //       intersect: false,
  //       mode: "index",
  //     },
  //     plugins: {
  //       tooltip: {
  //         titleFont: {
  //           size: 12,
  //           style: "italic",
  //           weight: 400,
  //         },
  //         titlePaddingBottom: 5,
  //         padding: 10,
  //         boxPadding: 5,
  //         cornerRadius: 10,
  //         displayColors: true,
  //         bodyFont: {
  //           size: 16,
  //           weight: 400,
  //           family: '"Bebas Neue", sans-serif',
  //         },
  //       },
  //       legend: {
  //         display: false,
  //         labels: {
  //           // This more specific font property overrides the global property
  //           font: {
  //             size: 12,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
});

document.addEventListener("DOMContentLoaded", function () {
  /* Bar Chart - chart2 */
  function createLinearGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  }

  let ctx2 = document.getElementById("chart_bar").getContext("2d");

  const labels2 = [
    "JAN 2023",
    "FEB 2023",
    "MAR 2023",
    "APR 2023",
    "MAY 2023",
    "JUN 2023",
    "JUL 2023",
    "AUG 2023",
    "SEP 2023",
    "OCT 2023",
    "NOV 2023",
    "DEC 2023",
  ];

  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Single",
        data: [
          65000, 59000, 80000, 81000, 56000, 55000, 40000, 65000, 59000, 80000,
          81000, 56000,
        ],
        fill: false,
        backgroundColor: createLinearGradient(ctx2, "#5e4595", "#fff"),
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 0,
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: "Packages",
        data: [
          55000, 49000, 70000, 91000, 66000, 65000, 50000, 55000, 49000, 70000,
          91000, 66000,
        ],
        fill: false,
        backgroundColor: createLinearGradient(ctx2, "#ffc7a0", "#fff"),
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 0,
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  const sumTotal = (tooltipItems) => {
    let sum = 0;

    tooltipItems.forEach(function (tooltipItem) {
      sum += tooltipItem.parsed.y;
    });
    return "Total Products: " + sum;
  };

  let chart_bar = new Chart(ctx2, {
    type: "bar",
    data: data2,
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: "#eaeaea",
          },
          ticks: {
            callback: function (value, index, values) {
              return this.getLabelForValue(value).split(" ")[0];
            },
            color: "#222222",
            padding: 5,
            font: {
              family: '"Bebas Neue", sans-serif',
              size: 12,
            },
          },
          border: {
            color: "#d6cfcc",
          },
        },

        y: {
          beginAtZero: true,
          grid: {
            color: "#eaeaea",
          },
          ticks: {
            callback: function (value, index, values) {
              if (value >= 1000) {
                return value / 1000 + "k";
              } else {
                return value;
              }
            },

            minRotation: 90,
            padding: 10,
            color: "#222222",
            font: {
              family: '"Bebas Neue", sans-serif',
              size: 12,
            },
          },
          border: {
            color: "#d6cfcc",
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 12,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 12,
            style: "italic",
            weight: 400,
          },
          titlePaddingBottom: 5,
          padding: 10,
          boxPadding: 5,
          cornerRadius: 10,
          displayColors: true,
          bodyFont: {
            size: 16,
            weight: 400,
            family: '"Bebas Neue", sans-serif',
          },
          callbacks: {
            beforeBody: sumTotal,
          },
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /* Chart3 - Distribution Chart */
  const labels3 = ["N", "E", "S", "W"];

  const data3 = {
    labels: labels3,
    datasets: [
      // {
      //   label: "Label 1",
      //   data: [65, 59, 80, 81],
      //   borderColor: "#ffc7a0",
      //   tension: -0.2,
      //   fill: true,
      //   borderWidth: 2,
      //   backgroundColor: "rgba(83, 171, 141, 0.5)",
      //   borderColor: "rgb(83, 171, 141, 0)",
      //   pointBackgroundColor: "rgb(83, 171, 141)",
      //   pointBorderColor: "rgba(83, 171, 141, 0)",
      //   pointRadius: 4,
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(83, 171, 141)",
      //   pointHoverBorderWidth: 2,
      //   pointHoverRadius: 8,
      // },
      {
        label: "Label 2",
        data: [55, 49, 70, 91],
        borderColor: "#5e4595",
        tension: -0.2,
        fill: true,
        borderWidth: 2,
        backgroundColor: "rgba(165, 21, 132, 0.25)",
        borderColor: "rgb(165, 21, 132, 0)",
        pointBackgroundColor: "rgb(165, 21, 132)",
        pointBorderColor: "rgba(165, 21, 132, 0)",
        pointRadius: 4,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(165, 21, 132)",
        pointHoverBorderWidth: 2,
        pointHoverRadius: 8,
      },
    ],
  };

  let ctx3 = document.getElementById("chart_distribution").getContext("2d");
  let chart_distribution = new Chart(ctx3, {
    type: "radar",
    data: data3,
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: {
            circular: true,
            color: "#8f9398",
          },
          ticks: {
            display: false,
          },
          pointLabels: {
            font: {
              family: '"Bebas Neue", sans-serif',
              size: 16,
            },
          },
          angleLines: {
            color: "#8f9398",
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        tooltip: {
          titleFont: {
            size: 11,
            style: "italic",
            weight: 400,
          },
        },
        legend: {
          display: false,
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
    },
  });
});

/* chart3 - Bar Chart */
// const labels3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// const data3= {
//   labels: labels3,
//   datasets: [{
//     label: 'Label 1',
//     data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
//     borderColor: '#ffc7a0',
//     tension: 0.1,
//     fill: true,
//     borderWidth: 2,
//     backgroundColor: 'rgba(83, 171, 141, 0.5)',
//     borderColor: 'rgb(83, 171, 141, 0)',
//     pointBackgroundColor: 'rgb(83, 171, 141)',
//     pointBorderColor: 'rgba(83, 171, 141, 0)',
//     pointRadius: 4,
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(83, 171, 141)',
//     pointHoverBorderWidth: 2,
//     pointHoverRadius: 8,
//   },
//   {
//     label: 'Label 2',
//     data: [55, 49, 70, 91, 66, 65, 50, 55, 49, 70, 91, 66],
//     borderColor: '#5e4595',
//     tension: 0.1,
//     fill: true,
//     borderWidth: 2,
//     backgroundColor: 'rgba(165, 21, 132, 0.2)',
//     borderColor: 'rgb(165, 21, 132, 0)',
//     pointBackgroundColor: 'rgb(165, 21, 132)',
//     pointBorderColor: 'rgba(165, 21, 132, 0)',
//     pointRadius: 4,
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(165, 21, 132)',
//     pointHoverBorderWidth: 2,
//     pointHoverRadius: 8,
//   }]
// };

// let ctx3 = document.getElementById('chart_distribution').getContext('2d');
// let chart_distribution = new Chart( ctx3, {
//     type: 'radar',
//     data: data3,
//     options: {
//       maintainAspectRatio: false,
//         scale: {
//             ticks: {
//                 display: false,
//             },
//         },
//         plugins: {
//             legend: {
//                 display: false,
//                 labels: {
//                     font: {
//                         size: 14
//                     }
//                 }
//             }
//         }
//     }
// });

if (typeof labels1 === "undefined") {
  const labels1 = [
    "JAN 2023",
    "FEB 2023",
    "MAR 2023",
    "APR 2023",
    "MAY 2023",
    "JUN 2023",
    "JUL 2023",
    "AUG 2023",
    "SEP 2023",
    "OCT 2023",
    "NOV 2023",
    "DEC 2023",
  ];

  function createLeftToRightGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0); // Adjust the values as needed for your chart
    gradient.addColorStop(0, "rgba(229, 227, 200, 0.25)");
    gradient.addColorStop(0.25, "rgba(246, 193, 220, 0.25)");
    gradient.addColorStop(0.5, "rgba(184, 197, 222, 0.25)");
    gradient.addColorStop(0.75, "rgba(180, 237, 211, 0.25)");
    gradient.addColorStop(1, "rgba(245, 231, 199, 0.25)");
    return gradient;
  }
  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: "Active Products",
        data: [
          65000, 59000, 80000, 81000, 56000, 55000, 40000, 65000, 59000, 80000,
          81000, 56000,
        ],
        borderColor: "#5A4898",
        tension: 0.4,
        borderWidth: 2,
        pointBorderColor: "#5A4898",
        pointBackgroundColor: "#5A4898",
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBorderColor: "#222",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 7,
        fill: false,
      },
      {
        label: "Draft Products",
        data: [
          55000, 49000, 70000, 91000, 66000, 65000, 50000, 55000, 49000, 70000,
          91000, 66000,
        ],
        borderColor: "#A1AEFF",
        tension: 0.4,
        borderWidth: 2,
        borderDash: [7, 3],
        pointBorderColor: "#A1AEFF",
        pointBackgroundColor: "#A1AEFF",
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBorderColor: "#222",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 7,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return createLeftToRightGradient(ctx);
        },
      },
    ],
  };
  let ctx1 = document.getElementById("chart_line").getContext("2d");
  let chart_line = new Chart(ctx1, {
    type: "line",
    data: data1,
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: "#eaeaea",
          },
          ticks: {
            callback: function (value, index, values) {
              return this.getLabelForValue(value).split(" ")[0];
            },
            color: "#222222",
            padding: 5,
            font: {
              family: '"Bebas Neue", sans-serif',
              size: 12,
            },
          },
          border: {
            color: "#d6cfcc",
          },
        },

        y: {
          beginAtZero: true,
          grid: {
            color: "#eaeaea",
          },
          ticks: {
            callback: function (value, index, values) {
              if (value >= 1000) {
                return value / 1000 + "k";
              } else {
                return value;
              }
            },
            minRotation: 90,
            padding: 10,
            color: "#222222",
            font: {
              family: '"Bebas Neue", sans-serif',
              size: 12,
            },
          },
          border: {
            color: "#d6cfcc",
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        tooltip: {
          titleFont: {
            size: 12,
            style: "italic",
            weight: 400,
          },
          titlePaddingBottom: 5,
          padding: 10,
          boxPadding: 5,
          cornerRadius: 10,
          displayColors: true,
          bodyFont: {
            size: 16,
            weight: 400,
            family: '"Bebas Neue", sans-serif',
          },
        },
        legend: {
          display: false,
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 12,
            },
          },
        },
      },
    },
  });
}
