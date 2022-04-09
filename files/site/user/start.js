

function start(){
	let list=document.querySelectorAll('div[data-block]');
	for(let i=0; i<list.length; i++){
		links.blocks[list[i].dataset.block]=list[i];
	}
	list=document.querySelectorAll('div[data-action]');
	for(let i=0; i<list.length; i++){
		links.btn[list[i].dataset.action]=list[i];
	}
	list=document.querySelectorAll('div[data-table]');
	for(let i=0; i<list.length; i++){
		links.table[list[i].dataset.table]=list[i];
	}
	list=document.querySelectorAll('input[data-id]');
	for(let i=0; i<list.length; i++){
		links.felds[list[i].dataset.id]=list[i];
	}
	
	if(localStorage.abonent){
		abonent=JSON.parse(localStorage.abonent);
	}
	if(abonent.key||abonent.session){
		control.on_off({login:0, color:0, bill:0, btns:1,story:0,in_user:1, check:0, out_user:0});
		//control.on_off_btn({in_user:1, check:0, out_user:0});
	} else {
		control.on_off({login:1, color:0, bill:0, btns:0,story:0});		
	}
	abonent.domain=document.location.pathname.split("/")[1];
}

link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
//link_window_all.addEventListener('change', control.description);  //onchange

start();