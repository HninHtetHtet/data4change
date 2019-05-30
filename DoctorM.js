var pop=[1395825,279033,1495616,504284,5224921,2501836,4974673,4013143,5290992,1668209,3110109,6368703,4802663,6081508,974357];
var per=0;
d3.csv("GAD1617_M7D_HealthCarePersonal_20190514.csv", function(error, da) {
	//Malaria
     	//kachin
     	//document.write(da[269].PHYSNB+9);
     	var score1=[];
        var label1=[];
		var count=0;
      for(var i=0;i<18;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      
      score1.push(da[0].SR_NAME);
      per=(count/pop[0])*1000;
      	label1.push(per);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[18].SR_NAME);
      	per=(count/pop[1])*1000;
      	label1.push(per);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[25].SR_NAME);
      	per=(count/pop[2])*1000;
      	label1.push(per);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[32].SR_NAME);
      	per=(count/pop[3])*1000;
      	label1.push(per);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[41].SR_NAME);
      	per=(count/pop[4])*1000;
      	label1.push(per);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[78].SR_NAME);
      	per=(count/pop[5])*1000;
      	label1.push(per);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[88].SR_NAME);
      	per=(count/pop[6])*1000;
      	label1.push(per);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[116].SR_NAME);
      	per=(count/pop[7])*1000;
      	label1.push(per);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[141].SR_NAME);
      	per=(count/pop[8])*1000;
      	label1.push(per);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[169].SR_NAME);
      	per=(count/pop[9])*1000;
      	label1.push(per);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[179].SR_NAME);
      	per=(count/pop[10])*1000;
      	label1.push(per);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[196].SR_NAME);
      	per=(count/pop[11])*1000;
      	label1.push(per);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[241].SR_NAME);
      	per=(count/pop[12])*1000;
      	label1.push(per);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[296].SR_NAME);
      	per=(count/pop[13])*1000;
      	label1.push(per);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score1.push(da[322].SR_NAME);
      	per=(count/pop[14*100])*1000;
      	label1.push(per);
      	
      //label1.push(0);
		var ctx = document.getElementById('DocM1').getContext('2d');
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

//Diarrhea
//kachin
     	//document.write(da[269].PHYSNB+9);
     	var score2=[];
        var label2=[];
		count=0;
      for(var i=0;i<18;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[0].SR_NAME);
      	per=(count/pop[0])*1000;
      	label2.push(per);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[18].SR_NAME);
      	per=(count/pop[1])*1000;
      	label2.push(per);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[25].SR_NAME);
      	per=(count/pop[2])*1000;
      	label2.push(per);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[32].SR_NAME);
      	per=(count/pop[3])*1000;
      	label2.push(per);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[41].SR_NAME);
      	per=(count/pop[4])*1000;
      	label2.push(per);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[78].SR_NAME);
      	per=(count/pop[5])*1000;
      	label2.push(per);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[88].SR_NAME);
      	per=(count/pop[6])*1000;
      	label2.push(per);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[116].SR_NAME);
      	per=(count/pop[7])*1000;
      	label2.push(per);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[141].SR_NAME);
      	per=(count/pop[8])*1000;
      	label2.push(per);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[169].SR_NAME);
      	per=(count/pop[9])*1000;
      	label2.push(per);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[179].SR_NAME);
      	per=(count/pop[10])*1000;
      	label2.push(per);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[196].SR_NAME);
      	per=(count/pop[11])*1000;
      	label2.push(per);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[241].SR_NAME);
      	per=(count/pop[12])*1000;
      	label2.push(per);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[296].SR_NAME);
      	per=(count/pop[13])*1000;
      	label2.push(per);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score2.push(da[322].SR_NAME);
      	per=(count/pop[14])*1000;
      	label2.push(per);
      	
      //label2.push(0);
		var ctx = document.getElementById('c2').getContext('2d');
var chart1 = new Chart(ctx, {
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


//TB
//kachin
     	//document.write(da[269].PHYSNB+9);
     	var score3=[];
        var label3=[];
		count=0;
      for(var i=0;i<18;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[0].SR_NAME);
      	per=(count/pop[0])*1000;
      	label3.push(per);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[18].SR_NAME);
      	per=(count/pop[1])*1000;
      	label3.push(per);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[25].SR_NAME);
      	per=(count/pop[2])*1000;
      	label3.push(per);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[32].SR_NAME);
      	per=(count/pop[3])*1000;
      	label3.push(per);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[41].SR_NAME);
      	per=(count/pop[4])*1000;
      	label3.push(per);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[78].SR_NAME);
      	per=(count/pop[5])*1000;
      	label3.push(per);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[88].SR_NAME);
      	per=(count/pop[6])*1000;
      	label3.push(per);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[116].SR_NAME);
      	per=(count/pop[7])*1000;
      	label3.push(per);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[141].SR_NAME);
      	per=(count/pop[8])*1000;
      	label3.push(per);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[169].SR_NAME);
      	per=(count/pop[9])*1000;
      	label3.push(per);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[179].SR_NAME);
      	per=(count/pop[10])*1000;
      	label3.push(per);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[196].SR_NAME);
      	per=(count/pop[11])*1000;
      	label3.push(per);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[241].SR_NAME);
      	per=(count/pop[12])*1000;
      	label3.push(per);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[296].SR_NAME);
      	per=(count/pop[13])*1000;
      	label3.push(per);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score3.push(da[322].SR_NAME);
      	per=(count/pop[14])*1000;
      	label3.push(per);
      	
      //label3.push(0);
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


//Dysentery
//kachin
     	//document.write(da[269].PHYSNB+9);
     	var score4=[];
        var label4=[];
		count=0;
      for(var i=0;i<18;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[0].SR_NAME);
      	per=(count/pop[0])*1000;
      	label4.push(per);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[18].SR_NAME);
      	per=(count/pop[1])*1000;
      	label4.push(per);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[25].SR_NAME);
      	per=(count/pop[2])*1000;
      	label4.push(per);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[32].SR_NAME);
      	per=(count/pop[3])*1000;
      	label4.push(per);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[41].SR_NAME);
      	per=(count/pop[4])*1000;
      	label4.push(per);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[78].SR_NAME);
      	per=(count/pop[5])*1000;
      	label4.push(per);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[88].SR_NAME);
      	per=(count/pop[6])*1000;
      	label4.push(per);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[116].SR_NAME);
      	per=(count/pop[7])*1000;
      	label4.push(per);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[141].SR_NAME);
      	per=(count/pop[8])*1000;
      	label4.push(per);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[169].SR_NAME);
      	per=(count/pop[9])*1000;
      	label4.push(per);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[179].SR_NAME);
      	per=(count/pop[10])*1000;
      	label4.push(per);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[196].SR_NAME);
      	per=(count/pop[11])*1000;
      	label4.push(per);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[241].SR_NAME);
      	per=(count/pop[12])*1000;
      	label4.push(per);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[296].SR_NAME);
      	per=(count/pop[13])*1000;
      	label4.push(per);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score4.push(da[322].SR_NAME);
      	per=(count/pop[14])*1000;
      	label4.push(per);
      	
      //label4.push(0);
		var ctx = document.getElementById('c4').getContext('2d');
var chart1 = new Chart(ctx, {
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

//Hepatitis
//kachin
     	//document.write(da[269].PHYSNB+9);
     	var score5=[];
        var label5=[];
		count=0;
      for(var i=0;i<18;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[0].SR_NAME);
      	per=(count/pop[0])*1000;
      	label5.push(per);
      	
       //kayah
      	count=0;
      	for(var i=18;i<25;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[18].SR_NAME);
      	per=(count/pop[1])*1000;
      	label5.push(per);
      	
      	
      	//kayin
      	count=0;
      	for(var i=25;i<32;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[25].SR_NAME);
      	per=(count/pop[2])*1000;
      	label5.push(per);
      	
      	
      	//Chin
      	count=0;
      	for(var i=32;i<41;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[32].SR_NAME);
      	per=(count/pop[3])*1000;
      	label5.push(per);
      	
      	
      	//Sagaing
      	count=0;
      	for(var i=41;i<78;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[41].SR_NAME);
      	per=(count/pop[4])*1000;
      	label5.push(per);
      	
      	
      	//Tanintharyi
      	count=0;
      	for(var i=78;i<88;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[78].SR_NAME);
      	per=(count/pop[5])*1000;
      	label5.push(per);      	
      	
      	
      	//Bago
      	count=0;
      	for(var i=88;i<116;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[88].SR_NAME);
      	per=(count/pop[6])*1000;
      	label5.push(per);  	
      	
      	      	
        //magway
      	count=0;
      	for(var i=116;i<141;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[116].SR_NAME);
      	per=(count/pop[7])*1000;
      	label5.push(per);
      	
      	
      	//mandalay
      	count=0;
      	for(var i=141;i<169;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[141].SR_NAME);
      	per=(count/pop[8])*1000;
      	label5.push(per);
      	 	
      	
      	//mon
      	count=0;
      	for(var i=169;i<179;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[169].SR_NAME);
      	per=(count/pop[9])*1000;
      	label5.push(per);
      	 	 	
      	
      	//Rakhine
      	count=0;
      	for(var i=179;i<196;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[179].SR_NAME);
      	per=(count/pop[10])*1000;
      	label5.push(per);      	
      	 	 	
      	
      	//yangon
      	count=0;
      	for(var i=196;i<241;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[196].SR_NAME);
      	per=(count/pop[11])*1000;
      	label5.push(per);
      	 	 	
      	
      	//shan
      	count=0;
      	for(var i=241;i<296;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[241].SR_NAME);
      	per=(count/pop[12])*1000;
      	label5.push(per);      	
      	
      	
      	//ayeyarwady
      	count=0;
      	for(var i=296;i<322;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[296].SR_NAME);
      	per=(count/pop[13])*1000;
      	label5.push(per);
      		
      	
      	//nay pyi taw
      	count=0;
      	for(var i=322;i<330;i++){
      	if(da[i].PHYSNB=="unknown")
      		count+=0;
      	else
      		count+=da[i].PHYSNB-"0";
      }	
      score5.push(da[322].SR_NAME);
      	per=(count/pop[14])*1000;
      	label5.push(per);
      	
      //label5.push(0);
		var ctx = document.getElementById('c5').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: score5,
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
            data: label5
        }]
    },

    // Configuration options go here
    options: {}
});
})

