d3.csv("GAD1617_M7F_HIVAIDSPersonsanddeaths_20190514.csv", function(error, da) {
	//HIV - Affected People (2015-2016 )
     	//kachin
     	var score1=[];
        var label1=[];
		var count=0;
      for(var i=0;i<18;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[0].SR_NAME);
      	label1.push(count);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[18].SR_NAME);
      	label1.push(count);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[25].SR_NAME);
      	label1.push(count);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[32].SR_NAME);
      	label1.push(count);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[41].SR_NAME);
      	label1.push(count);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[78].SR_NAME);
      	label1.push(count);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[88].SR_NAME);
      	label1.push(count);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[116].SR_NAME);
      	label1.push(count);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[141].SR_NAME);
      	label1.push(count);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[169].SR_NAME);
      	label1.push(count);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[179].SR_NAME);
      	label1.push(count);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[196].SR_NAME);
      	label1.push(count);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[241].SR_NAME);
      	label1.push(count);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[296].SR_NAME);
      	label1.push(count);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].HIVAF15_16!="unknown")
      		count+=da[i].HIVAF15_16-"0";
      }	
      score1.push(da[322].SR_NAME);
      	label1.push(count);
      	
      	label1.push(0);
		var ctx = document.getElementById('c1').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: score1,
        datasets: [{
            backgroundColor: [
          "#886d56",
          "#2c5ec5",
          "#cea7da",
          "#9b9b81",
          "#a412e4",
          "#655aba",
          "#91cb01",
          "#867969",
          "#4a9d0f",
          "#2f207b",
          "#aa1c94",
          "#6fca4f",
          "#d9830b",
          "#d613e3",
          "#eebdaa"
        ],
            borderColor: 'rgb(255, 99, 132)',
            data: label1
        }]
    },

    // Configuration options go here
    options: {}
});


//HIV - Dead People (2015-2016)
     	//kachin
     	var score2=[];
        var label2=[];
	count=0;
      for(var i=0;i<18;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      }	
      score2.push(da[0].SR_NAME);
      	label2.push(count);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[18].SR_NAME);
      	label2.push(count);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[25].SR_NAME);
      	label2.push(count);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[32].SR_NAME);
      	label2.push(count);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[41].SR_NAME);
      	label1.push(count);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[78].SR_NAME);
      	label2.push(count);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[88].SR_NAME);
      	label2.push(count);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[116].SR_NAME);
      	label2.push(count);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[141].SR_NAME);
      	label2.push(count);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[169].SR_NAME);
      	label2.push(count);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[179].SR_NAME);
      	label2.push(count);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[196].SR_NAME);
      	label2.push(count);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[241].SR_NAME);
      	label2.push(count);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[296].SR_NAME);
      	label2.push(count);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].HIVDD15_16!="unknown")
      	count+=da[i].HIVDD15_16-"0";
      
      }	
      score2.push(da[322].SR_NAME);
      	label2.push(count);
      	
      	label2.push(0);
		var ctx = document.getElementById('c2').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: score2,
        datasets: [{
            backgroundColor: [
          "#886d56",
          "#2c5ec5",
          "#cea7da",
          "#9b9b81",
          "#a412e4",
          "#655aba",
          "#91cb01",
          "#867969",
          "#4a9d0f",
          "#2f207b",
          "#aa1c94",
          "#6fca4f",
          "#d9830b",
          "#d613e3",
          "#eebdaa"
        ],
            borderColor: 'rgb(255, 99, 132)',
            data: label2
        }]
    },

    // Configuration options go here
    options: {}
});

//HIV - Affected People (2016-2017 )
     	//kachin
     	var score3=[];
        var label3=[];
		count=0;
      for(var i=0;i<18;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[0].SR_NAME);
      	label3.push(count);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[18].SR_NAME);
      	label3.push(count);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[25].SR_NAME);
      	label3.push(count);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[32].SR_NAME);
      	label3.push(count);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[41].SR_NAME);
      	label3.push(count);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[78].SR_NAME);
      	label3.push(count);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[88].SR_NAME);
      	label3.push(count);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[116].SR_NAME);
      	label3.push(count);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[141].SR_NAME);
      	label3.push(count);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[169].SR_NAME);
      	label3.push(count);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[179].SR_NAME);
      	label3.push(count);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[196].SR_NAME);
      	label3.push(count);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[241].SR_NAME);
      	label3.push(count);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[296].SR_NAME);
      	label3.push(count);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].HIVAF16_17!="unknown")
      		count+=da[i].HIVAF16_17-"0";
      }	
      score3.push(da[322].SR_NAME);
      	label3.push(count);
      	
      	label3.push(0);
		var ctx = document.getElementById('c3').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: score3,
        datasets: [{
            backgroundColor: [
          "#886d56",
          "#2c5ec5",
          "#cea7da",
          "#9b9b81",
          "#a412e4",
          "#655aba",
          "#91cb01",
          "#867969",
          "#4a9d0f",
          "#2f207b",
          "#aa1c94",
          "#6fca4f",
          "#d9830b",
          "#d613e3",
          "#eebdaa"
        ],
            borderColor: 'rgb(255, 99, 132)',
            data: label3
        }]
    },

    // Configuration options go here
    options: {}
});


    //HIV - Dead People (2016-2017)
     	//kachin
     	var score4=[];
        var label4=[];
	count=0;
      for(var i=0;i<18;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      }	
      score4.push(da[0].SR_NAME);
      	label4.push(count);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[18].SR_NAME);
      	label4.push(count);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[25].SR_NAME);
      	label4.push(count);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[32].SR_NAME);
      	label4.push(count);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[41].SR_NAME);
      	label3.push(count);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[78].SR_NAME);
      	label4.push(count);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[88].SR_NAME);
      	label4.push(count);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[116].SR_NAME);
      	label4.push(count);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[141].SR_NAME);
      	label4.push(count);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[169].SR_NAME);
      	label4.push(count);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[179].SR_NAME);
      	label4.push(count);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[196].SR_NAME);
      	label4.push(count);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[241].SR_NAME);
      	label4.push(count);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[296].SR_NAME);
      	label4.push(count);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].HIVDD016_17!="unknown")
      	count+=da[i].HIVDD016_17-"0";
      
      }	
      score4.push(da[322].SR_NAME);
      	label4.push(count);
      	
      	label4.push(0);
		var ctx = document.getElementById('c4').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: score4,
        datasets: [{
            backgroundColor: [
          "#886d56",
          "#2c5ec5",
          "#cea7da",
          "#9b9b81",
          "#a412e4",
          "#655aba",
          "#91cb01",
          "#867969",
          "#4a9d0f",
          "#2f207b",
          "#aa1c94",
          "#6fca4f",
          "#d9830b",
          "#d613e3",
          "#eebdaa"
        ],
            borderColor: 'rgb(255, 99, 132)',
            data: label4
        }]
    },

    // Configuration options go here
    options: {}
});

})

