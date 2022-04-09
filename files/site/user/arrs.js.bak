arrs={
	commands:{
		new_user:{out:['login','password','name'], in:['color','color_txt', 'code']},
		recovery:{out:['login','password'], in:['color','color_txt', 'code']},
		in_user:{out:['key','session'], in:['color','color_txt', 'code']},
		out_user:{out:['key','session'], in:['key','perk','bill']},
		read:{out:['key','session'], in:['key','perk', 'in']},		
		check:{out:['key','session'], in:['key','color','color_txt', 'code']},
		bill:{out:['key','session'], in:['key','perk','bill']},
		cost_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},		          
        role_list_read:{out:['key','session'], in:['key',"[{},{},{}]"]},        
        settings_calc_read:{out:['key','session'], in:['key',"[{},{},{}]"]}, 
        read_file:{out:['key','session', 'name_file'], in:['key','name_file','txt_file']},       
	},
	bill:[
	    {type:'names', data:['Операция','Начало','Окончание','Цена','Сумма']},
	    {type:'start', data:['Вход', '12:45:57', '12:45:57', "10", '0']},
	    {type: 'item', data:['Зона 1', '12:45:57', '14:00:00', "10", '45']},
	    {type: 'item', data:['Зона 2', '14:00:00', '15:00:00', "20", '80']},
	    {type: 'item', data:['Зона 3', '15:00:00', '15:21:32', "30", '60']},
	    {type:'stop', data:['Выход', '15:21:32', '15:21:32', "30", '0']},
	    {type:'total', data:['Итого', '185', 'руб']},
    ],
	story:[
	    {type:'names', data:['Операция','Начало','Окончание','Цена','Сумма']},
	    {type: 'item', data:['Зона 1', '12:45:57', '14:00:00', "10", '45']},
	    {type: 'item', data:['Зона 2', '14:00:00', '15:00:00', "20", '80']},
	    {type: 'item', data:['Зона 3', '15:00:00', '15:21:32', "30", '60']}
    ]
};

let abonent={
	key:'',
	session:'',	
	domain:''
};

let comm={ //new

	ax_get(func, url){//стандартная функция отправки сообщения
		let req=new XMLHttpRequest();
		req.addEventListener('load', answer[func]);//привязали контекст
		req.open('GET', url, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.responseType = 'text';
		req.send();
	},
	
	ax(obj, func, url){//стандартная функция отправки сообщения
		let req=new XMLHttpRequest();
		req.addEventListener('load', answer[func]);//привязали контекст
		req.open('POST', url, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.responseType = 'text';
		let str_obj=JSON.stringify(obj);
		req.send(str_obj);
		req.onload=comm.err;
	},
	err(e){
		let data=e.target;
		if(data.status!=200){
			if(data.status>399){
				console.log(data.status);
				if(data.response=="Wrong login or password"){
					console.log("Wrong login or password");
					control.on_on(['login_menu', 'main_menu', 'buttons_line', 'table_centre']);  //, 'login_manual',  'main_manual'
				}
			}		
		}
	},
    show_ax(e) {//стандартная функция получения сообщения
        let data=e.target;
        if(data.status==200){
            let obj=JSON.parse(data.response);
			return obj;
		}
        if(data.status>399){

		}
    },
	
	write_ls(name, obj){ //пишем в locolstorage 
	let temp;
		if(typeof obj =="object"){
			temp=JSON.stringify(obj);
		}
		let pth=abonent.domain+'_user_'+name;
		localStorage[pth]=temp;
	},
	
	read_ls(name, type=1){ //читаем из  locolstorage
		let pth=abonent.domain+'_user_'+name;
		if(localStorage[pth]!=undefined){
			if(type){
				return JSON.parse(localStorage[pth]);	
			}else{
				return localStorage[pth];
			}
		}else{
			return {};
		}
	},
	write_setting(){
		let settings={};
		settings.company_name = abonent.company_name;
		settings.setting = abonent.setting;
		temp.name_file="settings.json";
		temp.txt_file=JSON.stringify(settings);
		control.check_comand('write_file');
	}

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

let control={
	write_bill(bill, parent){//рисуем объект bill
	    let blocks;
        for(let i in bill){ //список строк
            if(bill[i].type=='names'){
                //console.log('names '+bill[i].data.length);
                blocks=control.write_col(bill[i].data, parent); //список колонок
            }
            if(bill[i].type=='start'||bill[i].type=='stop'||bill[i].type=='item'){ 
                if(blocks){
                    for(let j in bill[i].data){ //перебираю колонки
                        let blk_item=document.createElement('div');
            	        blk_item.className='desc';
            	        blk_item.innerText=bill[i].data[j];
                        blocks.children[j].children[1].append(blk_item);
                    }
                }
            }
            if(bill[i].type=='total'){
                //console.log('total '+bill[i].data.length);
                let blk_total=parent.children[1];
                for(let j in bill[i].data){
                    let blk_item=document.createElement('div');
        	        blk_item.className='desc';
        	        blk_item.innerText=bill[i].data[j];
                    blk_total.append(blk_item);
                }
                
            }
        }		
	},
	write_col(names, parent){
	    parent.innerHTML='';
	    let blk_wind=document.createElement('div');
	    blk_wind.className='five';
	    parent.append(blk_wind);
	    let blk_total=document.createElement('div');
	    blk_total.className='two';
	    parent.append(blk_total);
	    for(let i in names){
	        let blk_column=document.createElement('div');
	        blk_column.className='three';
	        blk_column.dataset.col=i;
	        blk_wind.append(blk_column);
	        let blk_name=document.createElement('div');
	        blk_name.className='desc';
	        blk_name.innerText=names[i];
	        blk_column.append(blk_name);
	        let blk_items=document.createElement('div');
	        blk_items.className='three';
	        blk_items.dataset.items=i;
	        blk_column.append(blk_items);
	    }
	    return blk_wind;
	},
	
	btn(e){
		let btn=e.target.parentNode;
		com.ax("ghj");
	},
	new_user(e){

		//control.on_off({in_user:0, check:1, out_user:1});
	    let asd=comm.show_ax(e);
		if(asd){
			//let str_obj=JSON.stringify(asd);
			//abonent.name=str_obj.name;
			abonent.session=asd.session;
			//localStorage.abonent=JSON.stringify(abonent);
			abonent.color=asd.color;
			abonent.colorName=asd.colorName;
			abonent.code=asd.code;
			//console.log(str_obj);
			control.on_off({login:0, color:1, bill:0, btns:1,story:0});
		}
	},
	recovery(e){//
		abonent.key=65478;
		abonent.session=9876;
		localStorage.abonent=JSON.stringify(abonent);
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		//control.on_off({login:0, color:1, bill:0, btns:1,story:0});
	},
	on_off(obj){
		for(let i in obj){
			let	val;
			if(obj[i]){
				val=1;
			}else{
				val=0;
			}
			links.blocks[i].dataset.display=val;	
		}
	},
	on_off_btn(obj){
		for(let i in obj){
			let	val;
			if(obj[i]){
				val=1;
			}else{
				val=0;
			}
			links.btn[i].dataset.display=val;
		}
	},
	read(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:0, bill:0, btns:1,story:0,status:1});
		//нужно получить объект по названию
		//comm.ax("ghj",control.read_show);
	},
	in_user(e){
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0,in_user:0, check:1, out_user:1});
		//control.on_off_btn({in_user:0, check:1, out_user:1});
	},
	out_user(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0,in_user:1, check:0, out_user:0});
		//control.on_off_btn({in_user:1, check:0, out_user:0});
	},	
	check(e){
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
	},
	bill(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		//console.log(str_obj);
		control.write_bill(arrs.bill, links.table.bill);
		control.on_off({login:0, color:0, bill:1, btns:1,story:0,status:0});
	},	
	story(){//
	    control.write_bill(arrs.story, links.table.story);
		this.on_off({login:0, color:0, bill:0, btns:1,story:1,status:0});
	},	

	pass_(){//редактируем пароли
		ansver_.innerText= "";
		let obj={"admin":+pass_admin.value,"counter":+pass_counter.value,"user":+pass_user.value,"security":+pass_security.value};
		comm.ax({comand: "edit_file", password: passsword_.value, address:"passwords.txt", text:JSON.stringify(obj)});		
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