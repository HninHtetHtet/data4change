/**
 * @author HHH
 */
/**
 * @author HHH
 */
d3.csv("GAD1617_M7E_MostDiseaseInRegion_20190514.csv", function(error, da) {
     	//kachin
     	var score1=[];
        var label1=[];

      for(var i=0;i<18;i++){
      	score1.push(da[i].TS_NAME);
      	label1.push(da[i].DISDD01);
      }	
      label1.push(0);	   
		var ctx = document.getElementById('md1').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score1,
        datasets: [{
        	label: 'Kachin',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label1
        }]
    },

    // Configuration options go here
    options: {}
});


//kayah
var score2=[];
var label2=[];
for(var i=18;i<25;i++){
      	score2.push(da[i].TS_NAME);
      	label2.push(da[i].DISDD01);
      }	
      label2.push(0);	   
		var ctx = document.getElementById('md2').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score2,
        datasets: [{
        	label: 'Kayah',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label2
        }]
    },

    // Configuration options go here
    options: {}
});


//kayin
var score3=[];
var label3=[];
for(var i=25;i<32;i++){
      	score3.push(da[i].TS_NAME);
      	label3.push(da[i].DISDD01);
      }	
      label3.push(0);	   
		var ctx = document.getElementById('md3').getContext('2d');
var chart3 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score3,
        datasets: [{
        	label: 'Kayin',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label3
        }]
    },

    // Configuration options go here
    options: {}
});


//chin
var score4=[];
var label4=[];
for(var i=32;i<41;i++){
      	score4.push(da[i].TS_NAME);
      	label4.push(da[i].DISDD01);
      }	
      label4.push(0);	   
		var ctx = document.getElementById('md4').getContext('2d');
var chart4 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score4,
        datasets: [{
        	label: 'Chin',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label4
        }]
    },

    // Configuration options go here
    options: {}
});



//sagaing
var score5=[];
var label5=[];
for(var i=41;i<78;i++){
      	score5.push(da[i].TS_NAME);
      	label5.push(da[i].DISDD01);
      }	
      label5.push(0);	   
		var ctx = document.getElementById('md5').getContext('2d');
var chart5 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score5,
        datasets: [{
        	label: 'Sagaing',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label5
        }]
    },

    // Configuration options go here
    options: {}
});



//Tanintharyi
var score6=[];
var label6=[];
for(var i=78;i<88;i++){
      	score6.push(da[i].TS_NAME);
      	label6.push(da[i].DISDD01);
      }	
      label6.push(0);	   
		var ctx = document.getElementById('md6').getContext('2d');
var chart6 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score6,
        datasets: [{
        	label: 'Tanintharyi',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label6
        }]
    },

    // Configuration options go here
    options: {}
});



//bago
var score7=[];
var label7=[];
for(var i=88;i<116;i++){
      	score7.push(da[i].TS_NAME);
      	label7.push(da[i].DISDD01);
      }	
      label7.push(0);	   
		var ctx = document.getElementById('md7').getContext('2d');
var chart7 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score7,
        datasets: [{
        	label: 'Bago',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label7
        }]
    },

    // Configuration options go here
    options: {}
});



//Magway
var score8=[];
var label8=[];
for(var i=116;i<141;i++){
      	score8.push(da[i].TS_NAME);
      	label8.push(da[i].DISDD01);
      }	
      label8.push(0);	   
		var ctx = document.getElementById('md8').getContext('2d');
var chart8 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score8,
        datasets: [{
        	label: 'Magway',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label8
        }]
    },

    // Configuration options go here
    options: {}
});



//Mandalay
var score9=[];
var label9=[];
for(var i=141;i<169;i++){
      	score9.push(da[i].TS_NAME);
      	label9.push(da[i].DISDD01);
      }	
      label9.push(0);	   
		var ctx = document.getElementById('md9').getContext('2d');
var chart9 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score9,
        datasets: [{
        	label: 'Mandlay',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label9
        }]
    },

    // Configuration options go here
    options: {}
});




//mon
var score10=[];
var label10=[];
for(var i=169;i<179;i++){
      	score10.push(da[i].TS_NAME);
      	label10.push(da[i].DISDD01);
      }	
      label10.push(0);	   
		var ctx = document.getElementById('md10').getContext('2d');
var chart10 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score10,
        datasets: [{
        	label: 'Mon',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label10
        }]
    },

    // Configuration options go here
    options: {}
});



//Rakhine
var score11=[];
var label11=[];
for(var i=179;i<196;i++){
      	score11.push(da[i].TS_NAME);
      	label11.push(da[i].DISDD01);
      }	
      label11.push(0);	   
		var ctx = document.getElementById('md11').getContext('2d');
var chart11 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score11,
        datasets: [{
        	label: 'Rakhine',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label11
        }]
    },

    // Configuration options go here
    options: {}
});

//yangon
var score12=[];
var label12=[];
for(var i=196;i<241;i++){
      	score12.push(da[i].TS_NAME);
      	label12.push(da[i].DISDD01);
      }	
      label12.push(0);	   
		var ctx = document.getElementById('md12').getContext('2d');
var chart12 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score12,
        datasets: [{
        	label: 'Yangon',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label12
        }]
    },

    // Configuration options go here
    options: {}
});


//shan
var score13=[];
var label13=[];
for(var i=241;i<296;i++){
      	score13.push(da[i].TS_NAME);
      	label13.push(da[i].DISDD01);
      }	
      label13.push(0);	   
		var ctx = document.getElementById('md13').getContext('2d');
var chart13 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score13,
        datasets: [{
        	label: 'Shan',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label13
        }]
    },

    // Configuration options go here
    options: {}
});



//Ayeyarwady
var score14=[];
var label14=[];
for(var i=296;i<322;i++){
      	score14.push(da[i].TS_NAME);
      	label14.push(da[i].DISDD01);
      }	
      label14.push(0);	   
		var ctx = document.getElementById('md14').getContext('2d');
var chart14 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score14,
        datasets: [{
        	label: 'Ayeyarwady',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label14
        }]
    },

    // Configuration options go here
    options: {}
});


//Naypyitaw  Council
var score15=[];
var label15=[];
for(var i=322;i<330;i++){
      	score15.push(da[i].TS_NAME);
      	label15.push(da[i].DISDD01);
      }	
      label15.push(0);	   
		var ctx = document.getElementById('md15').getContext('2d');
var chart15 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: score15,
        datasets: [{
        	label: 'Naypyitaw  Council',
            backgroundColor: 'black',
            borderColor: 'rgb(255, 99, 132)',
            data: label15
        }]
    },

    // Configuration options go here
    options: {}
});


})

