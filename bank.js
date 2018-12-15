function WelcomeMessage() {
    alert("Welcome Bitches");
}
window.onload = WelcomeMessage;
var SearchButton = document.getElementById("Searchbutton");
SearchButton.onsubmit=function(event){
    event.preventDefault();
console.log("We have submitted the search"); 
};


var client = [
    { 
        Name: "Fuck Shit",
        AccountNum: 6666666,
        Amount: 1000000000000,
        Savings: false,
    },
    {
        Name: "Hell Low",
        AccountNum: 7777777,
        Amount: 9000000000000,
        Savings: true,
    }
]
function addsymbols(amount){
    var returnedvalue = ""
    returnedvalue = returnedvalue + "$"
    returnedvalue = returnedvalue + amount.toLocaleString();
    return returnedvalue;
}
function ListInformation(client){
    var Name1 = document.getElementById("Client1");
    var Name2 = document.getElementById("Client2");
    var Info1 = document.getElementById("ClientInfo1");
    var Info2 = document.getElementById("ClientInfo2");
    Name1.innerHTML=client[0].Name;
    Name2.innerHTML=client[1].Name;
    //Info1.innerHTML=client[0].AccountNum + '<br />' + client[0].Amount;
    //Info2.innerHTML=client[1].AccountNum + '<br />' + client[1].Amount;

    if ( client[0].Savings) {
        Info1.innerHTML = "Saving's Acct:" + client[0].AccountNum + '<br /> Amount: ' + addsymbols(client[0].Amount);
      }else{
         Info1.innerHTML = "Checking Acct:" + client[0].AccountNum + '<br /> Amount: ' +  addsymbols (client[0].Amount);
      }
    if ( client[1].Savings) {
        Info2.innerHTML = "Saving's Acct:" + client[1].AccountNum + '<br /> Amount: ' +  addsymbols (client[1].Amount);
      } else{
        Info2.innerHTML = "Checking Acct" + client[1].AccountNum + '<br /> Amount: ' + addsymbols (client[1].Amount);
    }
    
}
    ListInformation(client);