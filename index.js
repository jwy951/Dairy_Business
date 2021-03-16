function production() {
    var shed_A =(document.getElementById("shed_A").value);
    var shed_B =(document.getElementById("shed_B").value);
    var shed_C =(document.getElementById("shed_C").value);
    var shed_D =(document.getElementById("shed_D").value);
        shed_A = parseFloat(shed_A);
        shed_B = parseFloat(shed_B);
        shed_C = parseFloat(shed_C);
        shed_D = parseFloat(shed_D);
        var total=shed_A+shed_B+shed_C+shed_D;
        document.getElementById("shed_a").innerHTML=shed_A;
        document.getElementById("shed_b").innerHTML=shed_B;
        document.getElementById("shed_c").innerHTML=shed_C;
        document.getElementById("shed_d").innerHTML=shed_D;
        document.getElementById("total").innerHTML = total;
    }
    function evaluation(){
     var rate=(document.getElementById("buying_rate").value);
     var allmilk=(document.getElementById("totalmilk").value);
     
       rate =parseFloat(rate);
       allmilk =parseFloat(allmilk);
      var weekly=rate*allmilk*7;
      var monthly=rate*allmilk*30;
      var yearly=rate*allmilk*365;
      document.getElementById("weekly").innerHTML=weekly;
      document.getElementById("monthly").innerHTML=monthly;
      document.getElementById("yearly").innerHTML=yearly;
    }
   function annual(){
    var whole=(document.getElementById("milk").value);
      whole =parseFloat(whole);
      var dailyincome=whole*45;
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
    for (i = 0; i<months.length; i++){
      result = days[i] * dailyincome;
      document.getElementById("year").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + result + "</p>");
    }
   }