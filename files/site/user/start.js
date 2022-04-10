let abonent={
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
        let rand=Math.floor(Math.random() * 20) +40;
        document.documentElement.style.setProperty('--position_fon', rand+'%');
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