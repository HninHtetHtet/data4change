d3.csv("GAD1617_M7E_MostDiseaseInRegion_20190514.csv", function(error, da) {
	//Malaria - Number of Affected People
 var score1=[];
var label1=[];

      for(var i=141;i<169;i++){
      	score1.push(da[i].TS_NAME);
      	label1.push(da[i].DISAF01);
      }	
      label1.push(0);	   
		var ctx = document.getElementById('c1').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score1,
        datasets: [{
            label: 'Malaria',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label1
        }]
    },

    // Configuration options go here
    options: {}
 }); 
 

//Diarrhea - Number of Affected People
 var score2=[];
var label2=[];

     for(var i=141;i<169;i++){
      	score2.push(da[i].TS_NAME);
      	label2.push(da[i].DISAF02);
      }	
      label2.push(0);	   
		var ctx = document.getElementById('c2').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score2,
        datasets: [{
            label: 'Diarrhea',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label2
        }]
    },

    // Configuration options go here
    options: {}
 }); 
 
 
 //TB - Number of Affected People 
 var score3=[];
var label3=[];

      for(var i=141;i<169;i++){
      	score3.push(da[i].TS_NAME);
      	label3.push(da[i].DISAF03);
      }	
      label3.push(0);	   
		var ctx = document.getElementById('c3').getContext('2d');
var chart3 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score3,
        datasets: [{
            label: 'TB',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label3
        }]
    },

    // Configuration options go here
    options: {}
 });  
 
 
 
//Dysentery - Number of Affected People  
var score4=[];
var label4=[];

      for(var i=141;i<169;i++){
      	score4.push(da[i].TS_NAME);
      	label4.push(da[i].DISAF04);
      }	
      label4.push(0);	   
		var ctx = document.getElementById('c4').getContext('2d');
var chart4 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score4,
        datasets: [{
            label: 'Dysentery',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label4
        }]
    },

    // Configuration options go here
    options: {}
 }); 
 
 
 
 //Hepatitis - Number of Affected People 
 var score5=[];
var label5=[];

      for(var i=141;i<169;i++){
      	score5.push(da[i].TS_NAME);
      	label5.push(da[i].DISAF05);
      }	
      label5.push(0);	   
		var ctx = document.getElementById('c5').getContext('2d');
var chart5 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score5,
        datasets: [{
            label: 'Hepatitis',
             backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: label5
        }]
    },

    // Configuration options go here
    options: {}
 }); 
})