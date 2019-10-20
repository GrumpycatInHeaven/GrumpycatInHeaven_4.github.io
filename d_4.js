      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Фактор',''],
          ['Некоторые инфекционные и паразитарные болезни',     0.015695],
          ['Новообразования',      0.193789],
          ['Болезни системы кровообращения',  0.651158],
          ['Болезни органов дыхания', 0.028272],
          ['Болезни органов пищеварения',    0.059996],
          ['Внешние причины', 0.051091]
        ]);

        var options = {
             pieHole: 0.5,
              pieSliceTextStyle: {
            color: 'black',
              },
          title: 'Женщины'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
