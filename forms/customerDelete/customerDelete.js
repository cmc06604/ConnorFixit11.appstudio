
customerDelete.onshow=function(){
  query = "Select * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=cmc06604&query=" + query);
  
  if (req.status == 200) {
  results = JSON.parse(req.responseText)
      if (results.length == 0)
        NSB.MsgBox("There are no customers")
      else
        for (i = 0; i <= results.length - 1; i++)
            drpCustomers1.addItem(results[i][1])
  } else
       NSB.MsgBox("Error Code:" + req.status)
}

btnRun1.onclick=function(){ //good 
  let message = ""
  
    if (typeof(s) == "object"){ 
      return
    } else {
        customerName = drpCustomers1.selection
        query = "DELETE FROM customer WHERE name = " + "'" + customerName + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=cmc06604&query=" + query);
        if (req.status == 200) {
                if (req.responseText == 500) 
                        NSB.MsgBox("The customer was Deleted")
                 else
                      NSB.MsgBox("The customer was not Deleted")
          } else
             NSB.MsgBox("Network error: " + req.status)       
                    
        
      query = "Select * FROM customer"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=cmc06604&query=" + query);
  
      if (req.status == 200) {
          results = JSON.parse(req.responseText)
          if (results.length == 0)
                  NSB.MsgBox("There are no customers")
          else {
                for (i = 0; i <= results.length - 1; i++)
                    message = message + results[i] + "\n"
                txaCustomerOutput1.value = message 
          } 
      } else
       NSB.MsgBox("Error Code:" + req.status)
    }
}



btnChangeFormAdd.onclick=function(){
  ChangeForm(customerAdd)
}
