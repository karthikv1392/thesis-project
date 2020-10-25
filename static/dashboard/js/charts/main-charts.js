$(document).ready(function() {
    xvalues_traffic=[];
    yvalues_traffic=[];
    xvalues_energy =[];
    yvalues_energy=[];
    ysensor_values_energy=[];
    ysensor_values_traffic=[];

    var data_global=null;
function sum(obj){
        return obj.S1+obj.S2+obj.S3+obj.S4+obj.S5+obj.S6+obj.S7+obj.S8+obj.S9+obj.S10+obj.S11+obj.S12+obj.S13+
            obj.S14+obj.S15+obj.S16+obj.S17+obj.S18+obj.S19+obj.S20+obj.S21+obj.S22;
    }
        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:5000/',
            success: function (data) {
                var result = JSON.parse(data);
                data_global=result;
                for(var j in result.energy) {
                    xvalues_energy.push(result.energy[j].timestamp);
                    yvalues_energy.push(sum(result.energy[j]));

                    ysensor_values_energy.push(result.energy[j].S1)
                //    console.log(result.energy[j]);
                }
                for(var k in result.traffic) {
                    xvalues_traffic.push(result.traffic[k].timestamp);
                    yvalues_traffic.push(sum(result.traffic[k]));

                    ysensor_values_traffic.push(result.traffic[k].S1)
                //    console.log(result.traffic[k]);
                }
                show_energy();
                show_traffic();
                show_single_energy();
                show_single_traffic();
                console.log(data)
            },
            statusCode: {
                400: function (response) {
                    console.log(response);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
$('#loginSubmit').on('click', function(e) {
    e.preventDefault();

})
 function show_energy() {
    const ctx1 = document.getElementById('myChart1');

    const myLineChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: xvalues_energy,

            datasets: [
                {
                    label: "Energy",
                    fillColor: "rgba(220,220,220,0.2)",
                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
                     borderColor: 'rgba(255, 99, 132, 1)',
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgb(26,239,12)",
                    pointStrokeColor: "#ffffff",
                    pointHighlightFill: "#f10d0d",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: yvalues_energy
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + 'J';
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            var d = new Date(value)
                            if(d.getMinutes()<10){
                                return d.getHours()-1 +":0" + d.getMinutes();
                            }
                            else {
                                return d.getHours() - 1 + ":" + d.getMinutes();
                            }
                        }
                    }
                }]
            }
        }
    });
}
function show_traffic() {
    const ctx2 = document.getElementById('myChart2');
    const myLineChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: xvalues_traffic,

            datasets: [
                {
                    label: "Traffic",
                    fillColor: "rgba(220,220,220,0.2)",
                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
                     borderColor: 'rgba(54, 162, 235, 1)',
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgb(26,239,12)",
                    pointStrokeColor: "#ffffff",
                    pointHighlightFill: "#f10d0d",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: yvalues_traffic
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + 'kB';
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            var d = new Date(value)
                            if(d.getMinutes()<10){
                                return d.getHours()-1 +":0" + d.getMinutes();
                            }
                            else {
                                return d.getHours() - 1 + ":" + d.getMinutes();
                            }
                        }
                    }
                }]
            }
        }
    });
}
function show_single_traffic() {
    const ctx3 = document.getElementById('myChart3');
    const myLineChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: xvalues_traffic,

            datasets: [
                {
                    label: "Traffic",
                    fillColor: "rgba(220,220,220,0.2)",
                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
                     borderColor: 'rgba(54, 162, 235, 1)',
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgb(26,239,12)",
                    pointStrokeColor: "#ffffff",
                    pointHighlightFill: "#f10d0d",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: ysensor_values_traffic
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + 'kB';
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            var d = new Date(value)
                            if(d.getMinutes()<10){
                                return d.getHours()-1 +":0" + d.getMinutes();
                            }
                            else {
                                return d.getHours() - 1 + ":" + d.getMinutes();
                            }
                        }
                    }
                }]
            }
        }
    });
}

function show_single_energy() {
    const ctx4 = document.getElementById('myChart4');
    const myLineChart4 = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: xvalues_energy,

            datasets: [
                {
                    label: "Energy",
                    fillColor: "rgba(220,220,220,0.2)",
                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
                     borderColor: 'rgba(255, 99, 132, 1)',
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgb(26,239,12)",
                    pointStrokeColor: "#ffffff",
                    pointHighlightFill: "#f10d0d",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: ysensor_values_energy
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + 'J';
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            var d = new Date(value)
                            if(d.getMinutes()<10){
                                return d.getHours()-1 +":0" + d.getMinutes();
                            }
                            else {
                                return d.getHours() - 1 + ":" + d.getMinutes();
                            }
                        }
                    }
                }]
            }
        }
    });
}
/*
var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

 */
});