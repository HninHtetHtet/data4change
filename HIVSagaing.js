d3.csv("GAD1617_M7F_HIVAIDSPersonsanddeaths_20190514.csv", function(error, da) {
	//HIV - Affected People (2015-2016 )
 var score1=[];
var label1=[];

      for(var i=41;i<78;i++){
      	score1.push(da[i].TS_NAME);
      	label1.push(da[i].HIVAF15_16);
      }	
      label1.push(0);	   
		var ctx = document.getElementById('c21').getContext('2d');
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
    
    
    //HIV - Dead People (2015-2016)
    var score2=[];
var label2=[];

     for(var i=41;i<78;i++){
      	score2.push(da[i].TS_NAME);
      	label2.push(da[i].HIVDD15_16);
      }	
      label2.push(0);	   
		var ctx = document.getElementById('c22').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score2,
        datasets: [{
            label: 'HIV - Dead People (2015-2016)',
             backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label2
        }]
    },

    // Configuration options go here
    options: {}     
});


//HIV - Affected People (2016-2017 )
var score3=[];
var label3=[];

      for(var i=41;i<78;i++){
      	score3.push(da[i].TS_NAME);
      	label3.push(da[i].HIVAF16_17);
      }	
      label3.push(0);	   
		var ctx = document.getElementById('c23').getContext('2d');
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
    
    
    //HIV - Dead People (2016-2017)
    var score4=[];
var label4=[];

     for(var i=41;i<78;i++){
      	score4.push(da[i].TS_NAME);
      	label4.push(da[i].HIVDD016_17);
      }	
      label4.push(0);	   
		var ctx = document.getElementById('c24').getContext('2d');
var chart4 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score4,
        datasets: [{
            label: 'HIV - Dead People (2016-2017)',
             backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label4
        }]
    },

    // Configuration options go here
    options: {}    
});
})




