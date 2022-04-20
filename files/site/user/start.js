let abonent={
	key:'',
	session:'',	
	domain:''
};
let manager={

};
let links={ //связываем действия пользователя с функциями
	blocks:{}, //блоки информации показать/скрыть
	btn:{}, //кнопки
	table:{}, //место для вывода таблиц
	felds:{},  //поля для ручного ввода данных
	objects:{}, //ссылки на базовые объекты
	writes:{}, //ссылки на поля вывода
    call_func (e){ 			//new
		control.fon_move();
        let link=e.target;
		let nodeName_patent=link.parentNode.nodeName; // таблица
		if(nodeName_patent=='TD'){
			let name=link.parentNode.parentNode.parentNode.dataset.name;
			if(name=='role_list'){ //функции по изменению
				click[name](link);
			}
		}
        name=link.dataset.action;
        if(name!='undefined'){ //функции по клику
			if(name in commands){
				control.check_comand(name);
				return;
			}
			if(link.dataset.many){
				name=link.dataset.many;
				if(name in commands){
					control.check_comand(name);
				} else {
					click[name](link);	
				}
				return;
			}
			click[name](link); 
        }
    },
    call_func_chng (e){		//new
		//если тип passvord то не сохранять
		control.fon_move();
        let link=e.target;
		let name_func=link.dataset.name_func;
		if(name_func){  // указана функция
			control[name_func](link); 
			return;
		}
		let obj=link.dataset.save;
		if(obj){  // указана функция
			links.objects[obj][link.dataset.id]=link.value; 
			return;
		}

    },
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
	list=document.querySelectorAll('div[data-write]');
	for(let i=0; i<list.length; i++){
		links.writes[list[i].dataset.write]=list[i];
	}
	abonent=comm.read_ls('abonent');
	links.objects.abonent=abonent;
	links.objects.links=links;
	links.objects.arrs=arrs;
	links.objects.manager=manager;
	
	if(!abonent.session){
		control.on_on(['login']);
	} else {
		//control.on_on(['buttons', 'in_user', 'check']);
		control.check_comand('read');
	}
	abonent.domain=document.location.pathname.split("/")[1];
	comm.ax_get('read_seting', '../settings.json');
	//control.on_on(['main_menu']);
	//links.felds.date.value=new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
	if(abonent.setting){
		control.apply_setting();
	}
}

link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
link_window_all.addEventListener('change', links.call_func_chng);  //onchange

start();