//your JS code here. If required.
let select=document.querySelector("#colorSelect");
function clr(){
	let val=select.val;
	if(val!==-1){
		select.remove(val);
	}
}