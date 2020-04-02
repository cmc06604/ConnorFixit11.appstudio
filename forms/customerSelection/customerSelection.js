
let query = ""
let req = ""
let results = ""
let customerData = ""







customerSelection.onshow=function(){

    var myQuery = "SELECT * from customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=cmc06604&query=" + myQuery);
    console.log(req)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        customerData = results
        if (results.length == 0) 
          NSB.MsgBox("There are no customers")
        else { 
          for (i = 0; i <= results.length -1; i++)
              drpCustomers.addItem(results[i][1])
        }
   } else
        NSB.MsgBox("Error Code:" + req.status)
}



drpCustomers.onclick=function(s){
  let state = ""
  let message = ""
  let customerName = ""
  
  
  if (typeof(s) == "object"){
      return
  } else { 
  customerName = drpCustomers.selection
      for (i = 0; i <= customerData.length - 1; i++){
            if (customerName == customerData[i][1])
                    state = customerData[i][4]
      }
  
  
  
      query = "SELECT name FROM customer WHERE state= " + '"' + state + '"';
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=cmc06604&query=" + query);
      if (req.status == 200) {
        console.log(req.responseText)
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            NSB.MsgBox("There are no customers2")
          else { 
            for (i = 0; i <= results.length - 1; i++)
              message = message + results[i] + "\n"
            txaCustomerOutput.value = message
          }
      } else 
          NSB.MsgBox("Network Error: " + req.status)
    }
}
          
          
  
  
  
  
  
  
changeFormDelete.onclick=function(){
  ChangeForm(customerDelete)
}
