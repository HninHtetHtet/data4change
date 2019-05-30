d3.csv("GAD1617_M7F_HIVAIDSPersonsanddeaths_20190514.csv", function(error, da) {
	//HIV - Affected People (2015-2016 )
 var score1=[];
var label1=[];

      for(var i=78;i<88;i++){
      	score1.push(da[i].TS_NAME);
      	label1.push(da[i].HIVAF15_16);
      }	
      label1.push(0);	   
		var ctx = document.getElementById('c27').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score1,
        datasets: [{
            label: 'HIV - Affected People (2015-2016 )',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label1
        }]
    },

    // Configuration options go here
    options: {}
 });   
    
    
  

//HIV - Affected People (2016-2017 )
var score3=[];
var label3=[];

      for(var i=78;i<88;i++){
      	score3.push(da[i].TS_NAME);
      	label3.push(da[i].HIVAF16_17);
      }	
      label3.push(0);	   
		var ctx = document.getElementById('c28').getContext('2d');
var chart3 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score3,
        datasets: [{
            label: 'HIV - Affected People (2016-2017 )',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label3
        }]
    },

    // Configuration options go here
    options: {}
 });   
    
    
    
})




