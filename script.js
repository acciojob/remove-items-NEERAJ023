//your JS code here. If required.

function clr(){
	let select=document.querySelector("#colorSelect");
	let va=select.selectedIndex;
	if(va!==-1){
		select.remove(va);
	}
}