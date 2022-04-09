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

