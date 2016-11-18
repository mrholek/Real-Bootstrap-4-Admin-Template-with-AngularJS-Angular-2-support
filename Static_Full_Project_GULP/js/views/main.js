$(function(){

    toastr.info('Bootstrap 4 on steroids', 'Welcome to Real Admin', {
        closeButton: true,
        progressBar: true,
    });

    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });

    //convert Hex to RGBA
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    //Main Chart
    var data1 = [0,0,1,2,21,9,12,10,31,13,65,10,12,6,4,3,0];
    var data2 = [0,0,1,2,7,5,6,8,24,7,12,5,6,3,2,2,0];
    var data3 = [0,0,1,0,2,0,1,0,2,3,0,2,3,2,1,0,0];

    var data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: convertHex($.brandInfo,10),
                borderColor: $.brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2
            },
            {
                label: 'My Third dataset',
                backgroundColor: 'transparent',
                borderColor: $.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: data3
            }
        ]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function(value) {
                        return value.charAt(0);
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                }
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
        },
        legend: {
            display: false
        }
    };
    var ctx = $('#main-chart');
    var mainChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    //Gauges

    var opts1 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandInfo,
        colorStop: $.brandInfo,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
	var target = document.getElementById('gauge1'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts1); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value

    var opts2 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandWarning,
        colorStop: $.brandWarning,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
    var target = document.getElementById('gauge2'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts2); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value


    //Sparkline Charts
    var labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    var options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    };

    var data1 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandPrimary,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-1');
    var sparklineChart1 = new Chart(ctx, {
        type: 'line',
        data: data1,
        options: options
    });

    var data2 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandDanger,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-2');
    var sparklineChart2 = new Chart(ctx, {
        type: 'line',
        data: data2,
        options: options
    });

    var data3 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandWarning,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-3');
    var sparklineChart3 = new Chart(ctx, {
        type: 'line',
        data: data3,
        options: options
    });

    var data4 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-4');
    var sparklineChart4 = new Chart(ctx, {
        type: 'line',
        data: data4,
        options: options
    });

    var data5 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-5');
    var sparklineChart5 = new Chart(ctx, {
        type: 'line',
        data: data5,
        options: options
    });

    var data6 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandInfo,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-6');
    var sparklineChart6= new Chart(ctx, {
        type: 'line',
        data: data6,
        options: options
    });


    //Gauge JS
    var options = {
        lines: 12, // The number of lines to draw
        angle: 0.5, // The length of each line
        lineWidth: 0.08, // The line thickness
        pointer: {
            length: 0.9, // The radius of the inner circle
            strokeWidth: 0.035, // The rotation offset
            color: '#000000' // Fill color
        },
        limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
        colorStart: $.brandInfo,   // Colors
        colorStart: $.brandInfo,    // just experiment with them
        strokeColor: '#d1d4d7',   // to see which ones work best for you
        generateGradient: true
    };
    var target1 = document.getElementById('gauge-1'); // your canvas element
    var gauge1 = new Donut(target1).setOptions(options); // create sexy gauge!
        gauge1.maxValue = 100; // set max gauge value
        gauge1.animationSpeed = 32; // set animation speed (32 is default value)
        gauge1.set(48); // set actual value

    var target2 = document.getElementById('gauge-2');
    var gauge2 = new Donut(target2).setOptions(options);
        gauge2.maxValue = 100;
        gauge2.animationSpeed = 32;
        gauge2.set(61);

    var target3 = document.getElementById('gauge-3');
    var gauge3 = new Donut(target3).setOptions(options);
        gauge3.maxValue = 100;
        gauge3.animationSpeed = 32;
        gauge3.set(33);

    var target4 = document.getElementById('gauge-4');
    var gauge4 = new Donut(target4).setOptions(options);
        gauge4.maxValue = 100;
        gauge4.animationSpeed = 32;
        gauge4.set(23);

    var target5 = document.getElementById('gauge-5');
    var gauge5 = new Donut(target5).setOptions(options);
        gauge5.maxValue = 100;
        gauge5.animationSpeed = 32;
        gauge5.set(78);

    var target6 = document.getElementById('gauge-6');
    var gauge6 = new Donut(target6).setOptions(options);
        gauge6.maxValue = 100;
        gauge6.animationSpeed = 32;
        gauge6.set(11);

});
