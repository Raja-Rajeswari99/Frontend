var em1 ={firstname:"ishan",lastname:"kishan"}
var em2={firstname:"Rohit",lastname:"sharma"};

function invite(greeat1,greeat2)
{
  console.log(
    greeat1+" "+this.firstname+" "+this.lastname+","+greeat2);
  
  
}

var inviteem1=invite.call(em1);
var inviteem2=invite.apply(em2);