arrs={
	commands:{
		new_owner:{out:['login','password','name'], in:['key','session'], url:''},
		new_pass:{out:['login','password', 'session','new_login','new_password'], in:['key','session'], url:''},
		in_owner:{out:['key','session'], in:['key','session','role'], url:''},
		recovery_owner:{out:['login','password'], in:['key','session','role'], url:''},
		check_domain:{out:['session','domain'], in:['key','session','role'], url:''},
		take_domain:{out:['session','domain', 'company_name'], in:['key','session','role'], url:''},
		new_passkey:{out:['session','role','name'], in:['key','session'], url:1},
		recovery_staff:{out:['login','password','session'], in:['key','session'], url:1},
		list_domain:{out:['session'], in:['key','session','role'], url:''},
        staff_list_read:{out:['session', 'key', 'count'], in:['key',"[{},{},{}]"], url:1},
		
		new_staff:{out:['login','password','name','passkey'], in:['key','session','role']},
		in_staff:{out:['key','session'], in:['key','session','role']},
		out_staff:{out:['key','session'], in:['key']},		
		new_pass_staff:{out:['login','password','name','login_new','password_new','name_new'], in:['key','session']},
        read_file:{out:['key','session', 'name_file'], in:['key','name_file','txt_file']},
		
		read_staff:{out:['key','session'], in:['key',"[{},{},{}]"]},
		ok:{out:['key','session','key_user', 'action'], in:['key','key_user','perk','name_user']},		
		no_ok:{out:['key','session','key_user', 'action'], in:['key','key_user']},
		list_in:{out:['key','session'], in:['key',"[{},{},{}]"]}, 
		
		
		perk:{out:['key','session','key_user', 'perk'], in:['key','key_user','perk','name_user']},
		
		balance:{out:['key','session'], in:['key','count','balance_old','cost', 'limit']},	
		
		read_msgs:{out:['key','session'], in:['key',"[{},{},{}]"]},	
		write_msg:{out:['key','session', 'to', 'title', 'message'], in:['key','msg_num']},
		
		cost_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},	
        cost_dell:{out:['key','session', 'date'], in:['key','date']},
        cost_add:{out:['key','session', 'date', 'cost_obj'], in:['key','date']},
        
        log_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},
        
        user_list_read:{out:['key','session', 'number'], in:['key',"[{},{},{}]"]},
        user_dell:{out:['key','session', 'key_user'], in:['key', 'key_user']},
        user_dell_all:{out:['key','session'], in:['key']}, 
        

        staff_dell:{out:['key','session', 'key_staff'], in:['key', 'key_staff']},
        staff_dell_all:{out:['key','session'], in:['key']},
        role_list_read:{out:['key','session'], in:['key',"[{},{},{}]"]},
        role_write:{out:['key','session', 'role_name', 'role_obj'], in:['key','role_name']},  
        
        settings_calc_read:{out:['key','session'], in:['key',"[{},{},{}]"]},
        settings_calc_edit:{out:['key','session', 'settings_obj'], in:['key']}, 
        
        write_file:{out:['key','session', 'name_file','txt_file'], in:['key','name_file']}, 
	},
    first_login:[
		[
			['Логин','','login' ],
			['Пароль','', 'password' ],
		],
		[
			['Имя','', 'name' ]
		]
    ],
    first_login_format:[
		[
			['','div'],
			['','input', 'password',2], 		
		],
		[
			['','div'],
			['','input', 'text',2], 
		]
    ],
    login:[
		['Логин','','login' ],
		['Пароль','', 'password' ],
    ],
    login_format:[
		['','div'],
		['','input', 'password',2], 		
    ],
    new_pass:[
		['Логин','', 'login' ],
		['Пароль','', 'password' ],
		['Новый Логин','', 'new_login' ],
		['Новый Пароль','', 'new_password' ],
    ],
    coose_domain:[
		[
			['','','','check_domain_btn' ],
		],
		[]
    ],
    coose_domain_format:[
		[
			['','input', 'text'],
			['','input', 'text'],
			['', 'div'],	
			['', 'div', 'dataset','click'],			
		],
		[
			['Компания','div'],
			['Домен','div'],
			['Состояние','div'],
			['Выбрать', 'div', 'dataset','click'], 
		]
    ],
    staff_control:[
		[
			['','','','add' ],
		],
		[]
    ],
    staff_control_format:[
		[
			['','input', 'text'],
	        ['','input', 'list', '', 'role_list_option'],
			['', 'div'],	
			['', 'div', 'dataset','click'],			
		],
		[
			['Имя','div'],
			['Роль','div'],
			['Passkey','div'],
			['Создать', 'div', 'dataset','click'], 
		]
    ],
    staff_list_format:[
		['Ключ','div'],
		['Имя','div'],
		['Роль','div'],	
		['Создан','div'],
		['Passkey','div'],
		['Выбрать', 'div', 'dataset','click'], 			
    ],
};

let abonent={
	key:'',
	session:'',	
	domain:''
};
let comm={
	
	ax(obj, func, url){//стандартная функция отправки сообщения
		let req=new XMLHttpRequest();
		req.addEventListener('load', func);//привязали контекст
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
			control.on_on(['first_menu', 'manual_munu', 'manual_login']);
		}
	},
    show_ax(e) {//стандартная функция получения сообщения
        let data=e.target;
        if(data.status==200){
            let obj=JSON.parse(data.response);
			return obj;
		}
    }

};

let links={ //связываем действия пользователя с функциями
	group:{}, //блоки информации показать/скрыть
	click:{}, //кнопки
	table:{}, //место для вывода таблиц
	felds:{},  //поля для ручного ввода данных
	selects:{}, //элементы selekt
	temp:{}, //временные данные
//	many:{},
	tables:{},
	titles:{},
    call_func (e){
        let rand=Math.floor(Math.random() * 20) +40;
        document.documentElement.style.setProperty('--position_fon', rand+'%');
        let link=e.target;
        let name=link.dataset.click;
        if(name){ //функции по клику
			if(name in arrs.commands){
				control.check_comand(name);
				return;
			}
			if(link.dataset.many){
				name=link.dataset.many;
				if(name in arrs.commands){
					control.check_comand(name);
				}
				return;
			}
			control[name](link); 
        }
    },
    call_func_chng (e){
        let link=e.target;
        let name=link.parentNode.parentNode.parentNode.dataset.inputs;
		//let obj={};
        if(name){ //функции по изменению
			control[name](link);
			return;
        }
        name=link.parentNode.parentNode.parentNode.dataset.name_arr;
        if(name){ //функции по изменению
			//control.arr_change(link); 
			return;
        }
        name=link.dataset.id;
        if(name){ //функции по изменению
			control[name](link);
        }
    }
};

let control={
	check_comand(name){
		let obj={};
		let felds=arrs.commands[name].out;
		for(let i in felds){
			if(abonent[felds[i]]){//дописываем поля из abonent
				obj[felds[i]]=abonent[felds[i]];
			}
			if(links.felds[felds[i]]){//дописываем поля из felds
				obj[felds[i]]=links.felds[felds[i]].value;
			}
			if(links.temp[felds[i]]){//дописываем поля из temp
				obj[felds[i]]=links.temp[felds[i]];
			}
		}
		let abc=function(list, felds, obj){
			for(let k=0; k< list.length; k++){
				let ind=felds.indexOf(list[k].dataset.name);
				if(ind>-1){
					obj[felds[ind]]=list[k].value;
				}
			}
		};
		let list=links.tables.centre.querySelectorAll('input[data-name]');
		abc(list, felds, obj);
		list=links.tables.centre.querySelectorAll('select[data-name]');
		abc(list, felds, obj);
		if(!arrs.commands[name].url){
			url='../'+name;
		}else{
			url='../'+abonent.domain+'/'+name;
		}
		comm.ax(obj, control[name], url);
	},
    arr_change(link){  //функция отключена
        let name=link.parentNode.parentNode.parentNode.dataset.name_arr;
        if(link.parentNode.parentNode.dataset.obj_row){
            if(link.nodeName=='INPUT'||link.nodeName=='SELECT'){
                links[name].arr[link.parentNode.parentNode.dataset.obj_row][link.parentNode.parentNode.dataset.row][link.parentNode.dataset.number]=link.value;
            }  
        }else{
            if(link.nodeName=='INPUT'||link.nodeName=='SELECT'){
                links[name].arr[link.parentNode.parentNode.dataset.row][link.parentNode.dataset.number]=link.value;
            }  
        }
    },
	write_arr(name_obj, name_format, parent, name, multi=0){
	    //имя массива, формат массива, место вставки, имя ссылки, вложения
	    if(!links.sets){
	        links.sets={};
	    }
	    parent.innerHTML='';
	    parent.dataset.name=name;
	    let fnk=function(obj, format, parent){ 
    		if(!format.length){ //создаем формат, если его нет
    			for (let i=0; i<obj[0].length; i++){
    				format[i]=['','div'];
    			}
    		}
    		let flg=0;
    		for (let i=0; i<format.length; i++){//проверяем наличее названий 
    			if(format[i][0]){
    				flg=1;
    			}
    			if(format[i][2]=='list'){
    			    links.sets[format[i][4]]=new Set();
    			}
    		}
    		if(flg){
    			let row = document.createElement('tr');
    			for (let j=0; j<format.length; j++){
    				let name =document.createElement('th');
    				if(format[j][0]){
    				    name.innerText=format[j][0];
    				} else{
    				    name.innerText='column '+j;
    				}
    				row.append(name);
    			}
    		    parent.append(row);
    		}
    		for (let j=0; j<obj.length; j++){
    			let row = document.createElement('tr');
    			for (let i=0; i<format.length; i++){
    				let kol =document.createElement('td');
    				let kol_blk;
    				if(format[i][1]){
    					kol_blk =document.createElement(format[i][1]);
    					kol.append(kol_blk);
    				} else {
    					kol.innerText=obj[j][i];
    				}
    				if(format[i][2]){
    				    if(format[i][2]=='list'){
                            kol_blk.setAttribute('list',format[i][4]);
                            links.sets[format[i][4]].add(obj[j][i]);
    				    }else{
    					    kol_blk.type=format[i][2];
    				    }
    					kol_blk.value=obj[j][i];
    					if(obj[j][format[i][3]]){
    					   kol_blk.dataset.name= obj[j][format[i][3]];
    					}
    				} 
    				if(format[i][1]=='select'&&format[i][3]){
    					for (let k=0; k<format[i][3][1].length; k++){
    						let option;
    						option = new Option(format[i][3][1][k], format[i][3][0][k]);
    						kol_blk.append(option);
    					}
    					if(obj[j][i]){
    						kol_blk.value=obj[j][i];
    						//kol_blk.value=format[i][3].indexOf(obj[j][i]);
    					}
    					if(obj[j][format[i][2]]){
    					   kol_blk.dataset.name= obj[j][format[i][2]];
    					}
    				}
    				if(format[i][1]=='div'){
    				    if(format[i][2]=='dataset'&&format[i][3]){
    				       kol_blk.dataset[format[i][3]]=obj[j][i]; 
    				    } else{
    				        kol_blk.innerText=obj[j][i];
    				    }
    				}
    				if(format[i][1]=='img'){
    				   kol_blk.src=obj[j][i];
    				}
    				row.append(kol);
    				kol.dataset.number=i;
    			}
    			row.dataset.row=j;
    			if(multi){
    			    row.dataset.obj_row=m;
    			}
    			parent.append(row);				
    		}
    		for(let i in links.sets){
    		    let lst=document.createElement('datalist');
    		    lst.id=i;
    		    for (let value of links.sets[i]){
    		        let op=document.createElement('option');
    		        op.value=value;
    		        lst.append(op);
    		    }
    		    parent.append(lst);
    		}
	    };
	    let obj;
	    let format;
	    let m=0;
	    if(multi){
			for (m=0; m<name_obj.length; m++){
				format=name_format[m];
				obj=name_obj[m];
				fnk(obj, format, parent);
			} 
	    } else{
			format=name_format;
			obj=name_obj;
			fnk(obj, format, parent);
	    }
	    links[name]={};
	    links[name].arr=name_obj;
	    links[name].format=name_format;
	    links[name].multi=multi;
	},
    //open - close  block
	first_login(){
		let blk=links.tables.centre;
		control.on_on(['table', 'send', 'first_menu']);
		control.write_arr(arrs.first_login, arrs.first_login_format, blk, 'first_login', 1);
		links.titles.centre.innerText='Регистрация';
		links.click.send.dataset.arr_name='first_login';
		links.click.send.dataset.many='new_owner';
	},
	new_first(link){
		console.log('new_first');
		let blk=links.tables.centre;
		control.on_on(['first_menu', 'table', 'send', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.first_login, arrs.first_login_format, blk, 'first_login', 1);
		links.titles.centre.innerText='Регистрация';
		links.click.send.dataset.arr_name='first_login';
		links.click.send.dataset.many='new_owner';
	},	
    login(link){
		console.log('login');
		//let blk=links.group.table;
		control.on_on(['main_menu','login_menu', 'manual_munu', 'manual_login'], link);
		link.dataset.choose=1;
		//control.write_arr(arrs.login, arrs.login_format, blk, 'login');
    },

    domain_select(link){
		document.querySelector('.main>.top').innerText=link.value;		
		document.title=link.value;	
		abonent.domain=link.value;
		abonent.company_name=link.value;
		localStorage.owner_abonent=JSON.stringify(abonent);
	},
	
    domains(link){		//new
		console.log('domains');
		let blk=links.tables.centre;
		control.on_on(['main_menu', 'table', 'table_list', 'manual_munu', 'manual_login'], link);
		//control.check_comand('list_domain');
		link.dataset.choose=1;
		control.write_arr(arrs.coose_domain, arrs.coose_domain_format, blk, 'domains', 1);
		links.titles.centre.innerText='Выбрать домен';
		links.titles.centre_list.innerText='Мои домены';
		links.click.send.dataset.many='take_domain';
		//links.titles.domain.innerText='Выберите домен';
		let asd=[];
		blk=links.tables.centre_list;
		control.write_arr(control.make_arr_to_write(abonent.domain_list), asd, blk, 'domains_list');
    },
	
	list_domain(e){		//new
		abonent.domain_list=comm.show_ax(e);
		let asd=[];
		blk=links.tables.centre_list;
		control.write_arr(control.make_arr_to_write(abonent.domain_list), asd, blk, 'domains_list');
	},
	make_arr_to_write(obj){		//new
		let obj1=[];
		if(obj.length){
			for(let i=0; i<obj.length; i++){
				obj1[i]=[];
				obj1[i][0]=obj[i];
			};
		}
		return obj1;
	},
    stafs(link){		//new
		console.log('stafs');
		let blk=links.tables.centre;
		control.on_on(['main_menu', 'staff_menu',  'manual_munu', 'manual_login'], link);
		link.dataset.choose=1;
    },
    staff(link){		//new
		console.log('staff');
		let blk=links.tables.centre;
		control.on_on(['main_menu','table', 'domain', 'staff_menu', 'table_list', 'manual_munu', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.staff_control, arrs.staff_control_format, blk, 'stafs', 1);
		links.titles.centre.innerText='Управление Персоналом';
		links.titles.domain.innerText='Выберите домен';
		//links.click.send.dataset.many='staff_dell';
		abonent.key=1;
		abonent.count=1000;		
		//control.check_comand('staff_list_read');
		control.write_select_list_1(abonent.domain_list, links.selects.domain_select);
		links.titles.centre_list.innerText='Мои сотрудники';
		if(abonent.domain){
			links.selects.domain_select.value=abonent.domain;
			control.check_comand('staff_list_read');
			links.click.send.dataset.many='take_domain';
			let asd=[];
			blk=links.tables.centre_list;
			control.write_arr(control.make_arr_to_write(abonent.domain_list), asd, blk, 'domains_list');
		}
    },
	
	staff_list_read(e){
		let obj=comm.show_ax(e);
		if(Array.isArray(obj)){
			if(obj.length){
				//let asd=[];
				for(let i=0; i<obj.length; i++){
					obj[i].push("check_out");
				}
				blk=links.tables.centre_list;
				control.write_arr(obj, arrs.staff_list_format, blk, 'staff_list');
			}
		} 
	},
	
	in(link){
		console.log('in');
		let blk=links.tables.centre;
		control.on_on(['main_menu','login_menu', 'send', 'manual_munu', 'table', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.login, arrs.login_format, blk, 'login');
		links.titles.centre.innerText='Вход';
		links.click.send.dataset.many='recovery_owner';
		if(abonent.login){
			let login=links.tables.centre.querySelector('[data-name="login"]');
			login.value=abonent.login;
		}
	},
	in_first(link){
		console.log('in_first');
		let blk=links.tables.centre;
		control.on_on(['first_menu', 'table', 'send', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.login, arrs.login_format, blk, 'first_login');
		links.titles.centre.innerText='Вход';
		links.click.send.dataset.many='recovery_owner';
		//control.check_comand('list_domain');
	},
	new_pass_open(link){
		console.log('new_pass');
		let blk=links.tables.centre;
		control.on_on(['main_menu','login_menu',  'send', 'manual_munu', 'table', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.new_pass, arrs.login_format, blk, 'new_pass');
		links.titles.centre.innerText='Новые Логин и Пароль';
		links.click.send.dataset.many='new_pass';
		if(abonent.login){
			let login=links.tables.centre.querySelector('[data-name="login"]');
			login.value=abonent.login;
		}
	},
	out(link){
		abonent.key='';
		abonent.session='';
		localStorage.owner_abonent=JSON.stringify(abonent);
		control.on_on(['first_menu']);
	},
	new_firstr(link){	
		let blk=links.tables.centre;
		control.on_on(['main_menu','login_menu', 'send', 'manual_munu', 'table', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.new_pass, arrs.login_format, blk, 'new_pass');
		links.titles.centre.innerText='Новые Логин и Пароль';
		links.click.send.dataset.many='new_pass';
	},
	check_out(link){
		control.check_in(link);
		link.dataset.click='check_in';
		links.temp.company_name=link.parentNode.parentNode.children[1].children[0].innerText;
		links.temp.domain=link.parentNode.parentNode.children[0].children[0].innerText;
		links.group.send.dataset.display=1;
		//localStorage.owner_abonent=JSON.stringify(abonent);
	},
	check_in(link){
		if(link==1){ //костыль
			let list=links.tables.centre.querySelectorAll('div[data-click=check_in]');
		}
		let list=link.parentNode.parentNode.parentNode.querySelectorAll('div[data-click=check_in]');
		links.group.send.dataset.display=0;
		for(let i=0; i<list.length; i++){
			list[i].dataset.click='check_out';
		}
	},
	add(link){
		abonent.name=link.parentNode.parentNode.children[0].children[0].value;
		abonent.role=link.parentNode.parentNode.children[1].children[0].value;
		control.check_comand('new_passkey');
	},
	check_domain_btn(link){
		links.temp={};
		links.temp.company_name=link.parentNode.parentNode.children[0].children[0].value;
		links.temp.domain=link.parentNode.parentNode.children[1].children[0].value;
		control.check_comand('check_domain');
	},
	check_domain(e){
		let obj=comm.show_ax(e);
		if(obj){
			let blk=links.tables.centre;
			let domain=links.tables.centre.children[0].children[0].children[0].value;
			let name_company=links.tables.centre.children[0].children[1].children[0].value;
			arrs.coose_domain[0][0][0]=domain;
			arrs.coose_domain[0][0][1]=name_company;
			let sost=obj.status;
			arrs.coose_domain[1].push([domain,name_company,sost,'check_out']);
			control.write_arr(arrs.coose_domain, arrs.coose_domain_format, blk, 'domains', 1);
		}
	},
	take_domain(e){
		let obj=comm.show_ax(e);
		if(obj[1]!="occupied"&&obj[1]!="max domains"){
			document.querySelector('.main>.top').innerText=abonent.company_name;
			abonent.company_name=links.temp.company_name;
			abonent.domain=links.temp.domain;
			document.title=abonent.company_name;
			document.querySelector('.main>.top').innerText=abonent.company_name;
			localStorage.owner_abonent=JSON.stringify(abonent);
			control.check_comand('list_domain');
		} else {
			control.check_in(1);
		}
	},
	new_passkey(e){		//new
		let obj=comm.show_ax(e);
		if(obj){
			links.tables.centre.children[0].children[2].innerText=obj.passkey;
		}
		control.check_comand('staff_list_read');
	},
	
	request(){
		abonent.company_name=links.tables.centre.children[1].children[0].children[0].value;
		abonent.domain=links.tables.centre.children[1].children[1].children[0].value;
		document.querySelector('.main>.top').innerText=abonent.company_name;
		document.title=abonent.company_name;
		localStorage.owner_abonent=JSON.stringify(abonent);
	},
	new_pass(e){		//new
		let obj=comm.show_ax(e);
		if(obj.session){
			//abonent.key=obj[0];
			abonent.session=obj.session;
			localStorage.owner_abonent=JSON.stringify(abonent);
			control.on_on(['manual_munu', 'main_menu']);
		}
	},
	new_owner(e){		//new
		let obj=comm.show_ax(e);
		if(obj.session){
			//abonent.key=obj[0];
			abonent.session=obj.session;
			localStorage.owner_abonent=JSON.stringify(abonent);
			control.on_on(['manual_munu', 'main_menu']);
			control.check_comand('list_domain');
		} 
	},
	recovery_owner(e){		//new
		let obj=comm.show_ax(e);
		if(obj.session){
			//abonent.key=obj[0];
			abonent.session=obj.session;
			let login=links.tables.centre.querySelector('[data-name="login"]');
			abonent.login=login.value;
			localStorage.owner_abonent=JSON.stringify(abonent);
			control.on_on(['manual_munu', 'main_menu']);
			control.check_comand('list_domain');
		}
	},
    write_select(obj, parent){	
        parent.innerHTML='';
        for(let i in obj){
            let option;
            if(i==0){
                option = new Option(obj[i].name, i, true, true);
            } else{
                option = new Option(obj[i].name, i);
            }
            parent.append(option);
        }
    },
    write_select_list(obj, parent){		//new
        parent.innerHTML='';
        for(let i in obj){
            let option;
            if(i==0){
                option = new Option(obj[i], i, true, true);
            } else{
                option = new Option(obj[i], i);
            }
            parent.append(option);
        }
    },
    write_select_list_1(obj, parent){		//new
        parent.innerHTML='';
        for(let i in obj){
            let option;
            if(i==0){
                option = new Option(obj[i], obj[i], true, true);
            } else{
                option = new Option(obj[i], obj[i]);
            }
            parent.append(option);
        }
    },
	on_on(obj, link){  //obj - список имен  блоков которые нужно показать
	    control.off_off(link); // link -то на что нажали - выделяем, соседи - снимаем выделение
		if(link){
			link.dataset.choose=1;
		}
		for(let i in obj){
			links.group[obj[i]].dataset.display=1;	
			if(links.group[obj[i]].children.length){
        		for(let j=0; j<links.group[obj[i]].children.length; j++){
        			links.group[obj[i]].children[j].dataset.choose=0;	
        		}  
			}
		}
	},
	off_off(link){
		
		for(let i in links.group){
			links.group[i].dataset.display=0;	
		}
		if(link){
			let asd=link.parentNode;
			for(let i=0; i<asd.children.length; i++){
				asd.children[i].dataset.choose=0;	
			}
		}
	},


	check(e){
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
	},

};
function start(){
	let list=document.querySelectorAll('div[data-group]');
	for(let i=0; i<list.length; i++){
		links.group[list[i].dataset.group]=list[i];
	}
	list=document.querySelectorAll('div[data-action]');
	for(let i=0; i<list.length; i++){
		links.btn[list[i].dataset.action]=list[i];
	}
	list=document.querySelectorAll('div[data-click]');
	for(let i=0; i<list.length; i++){
		links.click[list[i].dataset.click]=list[i];
	}
	list=document.querySelectorAll('div[data-table]');
	for(let i=0; i<list.length; i++){
		links.table[list[i].dataset.table]=list[i];
	}
//	list=document.querySelectorAll('div[data-many');
//	for(let i=0; i<list.length; i++){
//		links.many[list[i].dataset.many]=list[i];
//	}
	list=document.querySelectorAll('div[data-title');
	for(let i=0; i<list.length; i++){
		links.titles[list[i].dataset.title]=list[i];
	}
	list=document.querySelectorAll('input[data-id]');
	for(let i=0; i<list.length; i++){
		links.felds[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('select[data-id]');
	for(let i=0; i<list.length; i++){
		links.selects[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('table[data-id]');
	for(let i=0; i<list.length; i++){
		links.tables[list[i].dataset.id]=list[i];
	}
	for(let i in links.group){
		links.group[i].dataset.display=0;	
	}
	if(localStorage.owner_abonent){
		abonent=JSON.parse(localStorage.owner_abonent);
	}
	if(abonent.session){
		links.group.manual_munu.dataset.display=1;
		links.group.main_menu.dataset.display=1;
		control.check_comand('list_domain');
	} else {
		links.group.first_menu.dataset.display=1;
	}
	if(abonent.company_name){
        document.querySelector('.main>.top').innerText=abonent.company_name;
        document.title=abonent.company_name;
	}
	

}
link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
link_window_all.addEventListener("change", links.call_func_chng);

start();