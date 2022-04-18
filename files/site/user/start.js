let abonent={
	key:'',
	session:'',	
	domain:''
};
let manager={
	key:'',
	session:'',	
	domain:''
};
let links={ //связываем действия пользователя с функциями
	blocks:{}, //блоки информации показать/скрыть
	btn:{}, //кнопки
	table:{}, //место для вывода таблиц
	felds:{},  //поля для ручного ввода данных
    call_func (e){
		control.fon_move();
        let link=e.target;
        let name=link.dataset.action;
		let obj={};
        if(name){ //функции по клику
			if(name in arrs.commands){
				let felds=arrs.commands[name].out;
				//obj.type=name;
				for(let i in felds){
					if(abonent[felds[i]]){
						obj[felds[i]]=abonent[felds[i]];
					}
				}
				//дописываем поля из felds
				for(let i in felds){
					if(links.felds[felds[i]]){
						obj[felds[i]]=links.felds[felds[i]].value;
					}
				}
				//дополняем дату
				
				comm.ax(obj, control[name], name);
			} else {
				control[name](); 
			}
        }
    }	
};

function start(){
	abonent.domain=document.location.pathname.split("/")[1]; //new
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
	
	abonent=comm.read_ls('abonent');
	if(abonent.setting){
		control.apply_setting();
	}
	
	if(abonent.key||abonent.session){
		control.on_on(['login']);
	} else {
		control.on_on(['buttons', 'in_user', 'check']);
	}
	abonent.domain=document.location.pathname.split("/")[1];
}

link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
//link_window_all.addEventListener('change', control.description);  //onchange

start();