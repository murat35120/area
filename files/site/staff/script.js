arrs={
	commands:{
		new_staff:{out:['login','password','name','passkey'], in:['key','session','role']},  //new
		recovery_staff:{out:['login','password'], in:['key','session','role']},
		in_staff:{out:['key','session'], in:['key','session','role']},
		out_staff:{out:['key','session'], in:['key']},		
		new_pass_staff:{out:['login','password','new_login','new_password'], in:['key','session']},
        read_file:{out:['session', 'name_file'], in:['key','name_file','txt_file']},
        write_file:{out:['session', 'name_file','txt_file'], in:['key','name_file']}, 
        staff_list_read:{out:['session', 'key', 'count'], in:['key',"[{},{},{}]"]},
        role_list_read:{out:['session'], in:['key',"[{},{},{}]"]},
		new_passkey:{out:['session','role','name'], in:['key','session']},
        role_write:{out:['session', 'title', 'rights'], in:['key','role_name']},
        settings_calc_read:{out:['session'], in:['key',"[{},{},{}]"]},
        settings_calc_edit:{out:['session', 'rounding','unit_time','cost_in','min_cost','vat','currency'], in:['key']}, 
		cost_read:{out:['session', 'date'], in:['key',"[{},{},{}]"]},	
        cost_dell:{out:['session', 'date'], in:['key','date']},
        cost_add:{out:['session', 'date', 'times'], in:['key','date']},
		perk:{out:['session','key_user', 'perk'], in:['key','key_user','perk','name_user']},
		perk_n:{out:['session', 'perk'], in:['key','key_user','perk','name_user']},
		perk_list_read:{out:['session'], in:['key','key_user','perk','name_user']},
		
		read_staff:{out:['key','session'], in:['key',"[{},{},{}]"]},
		ok:{out:['key','session','key_user', 'action'], in:['key','key_user','perk','name_user']},		
		no_ok:{out:['key','session','key_user', 'action'], in:['key','key_user']},
		list_in:{out:['key','session'], in:['key',"[{},{},{}]"]}, 
		
		

		
		balance:{out:['key','session'], in:['key','count','balance_old','cost', 'limit']},	
		
		read_msgs:{out:['key','session'], in:['key',"[{},{},{}]"]},	
		write_msg:{out:['key','session', 'to', 'title', 'message'], in:['key','msg_num']},
        
        log_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},
        
        user_list_read:{out:['key','session', 'number'], in:['key',"[{},{},{}]"]},
        user_dell:{out:['key','session', 'key_user'], in:['key', 'key_user']},
        user_dell_all:{out:['key','session'], in:['key']}, 
        

        staff_dell:{out:['key','session', 'key_staff'], in:['key', 'key_staff']},
        staff_dell_all:{out:['key','session'], in:['key']},

	},
	list_right:[
	        {name:'new_staff', description:'Регистрация сотрудника (себя)', right:['new_staff', 'recovery_staff', 'in_staff', 'out_staff', 'new_pass_staff', 'read_file']},
	        {name:'read_staff', description:'Регистрация Входа(Выхода) пользователей', right:['read_staff', 'ok', 'no_ok', 'list_in']}, 
	        {name:'perk', description:'Менять уровень обслуживания пользователей', right:['perk','perk_n', 'perk_list_read']}, 
	        {name:'balance', description:'Смотреть стоимость услуг сервиса', right:['balance']}, 
	        {name:'write_msg', description:'Писать сообщения сервису', right:['write_msg', 'read_msgs']},
	        {name:'cost_read', description:'Редактировать прайс лист', right:['cost_add', 'cost_dell', 'cost_read']},
	        {name:'log_read', description:'Читать историю посещений', right:['log_read']},
	        {name:'user_list_read', description:'Управлять списоком пользователей', right:['user_list_read', 'user_dell', 'user_dell_all']},  
	        {name:'staff_list_read', description:'Управлять списком сотрудников', right:['staff_list_read', 'new_passkey', 'staff_dell', 'staff_dell_all', 'role_list_read', 'role_write']},  
	        {name:'settings_calc_edit', description:'Редактировать настройки стоимости', right:['settings_calc_read', 'settings_calc_edit']},
	        {name:'write_file', description:'Сохранять файлы на сервере', right:['write_file']}
	],
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
    ],
	
// new	
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
    role_list_format:[
		['Роль','div'],
		['Выбрать', 'div', 'dataset','click'], 			
    ],
    right_list_format:[
		['Права','div','',2],
		['Добавить', 'div', 'dataset','click'], 			
    ],


    count_set:[
		[
			['Единица времения', 'мин', 'unit_time' ],
		],
		[		
			['Округление', 0, 'rounding' ],
			['Стоимость входа', 0, 'cost_in' ],
			['Минимальная стоимость', 0, 'min_cost' ],
			['НДС', 20, 'vat' ],  
			['Базовая стоимость', 1, 'base_cost' ],
		],
		[
			['Валюта', 'руб', 'currency' ], 
 
		]
    ],
    count_set_format:[
        [
            ['Настройка','div'],
            ['Значение','select',2, [["sec", "min", "hour"],["секунда", "минута", "час"]]]
        ],
        [
            ['','div'],
            ['','input', 'number', 2]
        ],
        [
            ['','div'],
            ['','input', 'text', 2]
        ]
    ],

    price_list:[		
		['Серебрянный', '14:00:12', '14.55','right_out', 'petk', 'time', 'cost' ],
		['Золотой', '14:01:12', '14.55', 'right_out', 'petk', 'time', 'cost' ],
		['Новый', '14:02:12', '14.55', 'right_out', 'petk', 'time', 'cost' ],
		['Серебрянный', '15:00:12', '14.55', 'right_out', 'petk', 'time', 'cost' ],
		['Золотой', '16:00:12', '14.55', 'right_out', 'petk', 'time', 'cost' ],
		['Новый', '17:00:12', '14.55', 'right_out', 'petk', 'time', 'cost' ],
    ],
    price_list_format:[
		['Статус','select',4, [[0],["Золотой"]]],
		['время','input', 'time', 5],
		['цена','input', 'number', 6],
		['выбрать',  'div', 'dataset','click'],
    ], 

    calendar:{
        '02022020': [
            [
				['Серебрянный', '14:00:12', '14.55' ],
				['Золотой', '14:01:12', '14.55' ],
				['Новый', '14:02:12', '14.55' ],            
            ],
        ]
    },
	
	perk_control:[
		['','add' ]
	],
	perk_control_format:[
			['Название','input', 'list', '', 'role_list_option'],
			['Создать', 'div', 'dataset','click'] 
		],	
	perk_format:[
			['Номер','div'],
			['Имя', 'div'] 
	],
	
    decor_list:[
        [
            ['Размер названия', '22' ],
            ['Размер текста', '23' ],
            ['Размер кнопок', '24' ]  
        ],
        [
            ['Шрифт названия', 'Arial' ], 
            ['Шрифт текста', 'Times' ]  
        ],
        [
            ['Цвет названия', '#800080' ],
            ['Цвет текста', '#00FF00' ], 
        ]
    ],
    decor_list_format:[
        [
            ['Настройка','div'],
            ['Значение','input', 'number'] 
        ],
        [
            ['','div'],
            ['', 'select','', [["Arial", "Times", "Unicode"],["Arial", "Times", "Unicode"]]]
        ],
        [
            ['','div'],
            ['','input', 'color']
        ]
    ],
    balance_list:[
        ['Дата начала', '12-10-2020' ],
        ['Количество операций', '5432', 'шт' ],
        ['Цена операции', '0,03', 'руб.' ],
        ['Сумма', '154', 'руб.' ],
        ['Баланс на начало', '154', 'руб.' ],   
        ['Баланс текущий', '154', 'руб.' ], 
    ],
    balance_list_format:[
        ['Параметр','div'],
        ['Значение','div'],
        ['Единицы','div'],        
    ],
    detail:[
        ['Название компании', 'ООО "Рога и Копыта"', 'company_name' ],
        ['ИНН', '7804539523', 'inn' ],
        ['КПП', '780402007', 'kpp' ],
        ['Индекс', '194200', 'index'],
        ['Город', 'Санкт_Петербург', 'city' ],   
        ['Адрес', 'ул. Бобруйская д.8 офис 132', 'address' ], 
        ['Телефон', '812 542-06-78', 'phone' ], 
        ['EMail', 'roga@mail.ru', 'email' ], 
        ['Кому', 'Иванов Николай Сергеевич', 'from' ], 
    ],
    detail_format:[
        ['Параметр','div'],
        ['Значение','input', 'text',2]
    ],
    new_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
		[
			['Имя','', 'name' ],
			['Passkey','', 'passkey' ],
		]
    ],
    new_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
		[
			['','div'],
			['','input', 'text',2], 
		]
    ],	
    new_pass_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
		[
			['Новый Логин','','new_login' ],
		],
		[
			['Новый Пароль','', 'new_password' ],
		],
    ],
    new_pass_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
    ],	
    recovery_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
    ],
    recovery_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
    ],
    decor:[  //new
        [
            ['Размер названия', '40', '--name_size' ], 
        ],
        [
            ['Шрифт названия', 'serif', '--name_font' ],  
        ],
        [
            ['Цвет названия', '#800080', '--name_color' ], 
        ]
    ],
    decor_format:[		//new
        [
            ['Настройка','div'],
            ['Значение','input', 'number', 2] 
        ],
        [
            ['','div'],
            ['', 'select','2', [["arial", "serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],["arial", "serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]]]
        ],
        [
            ['','div'],
            ['','input', 'color', 2]
        ]
    ],
	
	price:{
		"2020-01-01":[
			[0, '14:00:12', '14.55','right_out', 'perk', 'time', 'cost' ],
		]
	},
	
	temp_price:[],
};

let abonent={
};  //new

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
		if(typeof obj =="object"){
			obj=JSON.stringify(obj);
		}
		let pth=abonent.domain+'_user_'+name;
		localStorage[pth]=obj;
	},
	
	read_ls(name, type=1){ //читаем из  locolstorage
		let pth=abonent.domain+'_user_'+name;
		if(localStorage[pth]){
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
	group:{}, //блоки информации показать/скрыть	new
	click:{}, //кнопки		new
	table:{}, //место для вывода таблиц 
	felds:{},  //поля для ручного ввода данных new
	selects:{}, //элементы selekt new/	
	titles:{},
	main_menu:{},
	tables:{},
	titles:{},
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
        name=link.dataset.click;
        if(name!='undefined'){ //функции по клику
			if(name in arrs.commands){
				control.check_comand(name);
				return;
			}
			if(link.dataset.many){
				name=link.dataset.many;
				if(name in arrs.commands){
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
		let nodeName_patent=link.parentNode.nodeName; // таблица
		if(nodeName_patent=='TD'){
			if(link.type!='password'){
				let table_name=link.parentNode.parentNode.parentNode.dataset.name; // tтаблица
				let number=nodeName_patent=link.parentNode.dataset.number; //колонка
				let row=link.parentNode.parentNode.dataset.row; //ряд
				let obj_row=link.parentNode.parentNode.dataset.obj_row;  //ряд в объекте (если двух уровневая таблица)
				if(!links[table_name].multi){ //таблица одноуровневая
					links[table_name].arr[row][number]=link.value;
				}else{
					links[table_name].arr[obj_row][row][number]=link.value;
				}
			}
			control.write_temp_table(link.parentNode.parentNode.parentNode); //пишем в temp значение всех полей таблицы
			let value_name=link.dataset.name; 
			if(value_name){
				if(value_name.slice(0,2)=="--"){
					document.documentElement.style.setProperty(value_name, link.value);
					control.style_to_file(temp);
				}
			}
		}
    }
};

let temp={};  //new

let click={		//new
	login(link){	
		console.log('login');
		temp={};
		control.on_on(['login_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	stafs(link){
		console.log('stafs');
		control.on_on(['staff_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		abonent.key=0;
		abonent.count=1000;
		control.check_comand("staff_list_read");
		control.check_comand("role_list_read");
		
    },
	service(link){
		console.log('service');
		control.on_on(['service_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	price(link){
		console.log('price');
		control.on_on(['price_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	manager(link){
		console.log('manager');
		control.on_on(['manager_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	clients(link){
		console.log('clients');
		control.on_on(['clients_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	in(link){	
		console.log('in');
		control.on_on(['login_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		//control.write_arr(arrs.in_staff, arrs.in_staff_format, links.table.centre, 'in_staff', multi=1);
		//links.click.send.dataset.many='in_staff';
		control.check_comand('in_staff');
    },	
	recovery_staff_open(link){	
		console.log('recovery_staff');
		control.on_on(['login_menu', 'main_menu', 'buttons_line', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		links.titles.centre.innerText="Вход";
		temp={};
		control.write_arr(arrs.recovery_staff, arrs.recovery_staff_format, links.table.centre, 'recovery_staff', 1);
		links.click.send.dataset.many='recovery_staff';
    },
	new_staff_open(link){	
		console.log('new_pass_open');
		control.on_on(['login_menu', 'main_menu', 'buttons_line', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		links.titles.centre.innerText="Регистрация";
		temp={};
		control.write_arr(arrs.new_staff, arrs.new_staff_format, links.table.centre, 'new_staff', 1);
		links.click.send.dataset.many='new_staff';
    },
	new_pass_staff_open(link){	
		console.log('new_pass_open');
		control.on_on(['login_menu', 'main_menu', 'buttons_line', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		links.titles.centre.innerText="Смена Логина и Пароля";
		temp={};
		control.write_arr(arrs.new_pass_staff, arrs.new_pass_staff_format, links.table.centre, 'new_pass_staff', 1);
		links.click.send.dataset.many='new_pass_staff';
    },
	out(link){
		console.log('out');
		control.on_on(['main_menu']); 
		abonent.key='';
		abonent.session='';
		abonent.login='';
		temp={};
		comm.write_ls('abonent','');
    },
	decor(link){
		console.log('decor');
		control.on_on(['main_menu', 'service_menu', 'buttons_line', 'table_centre']); 
		link.dataset.choose=1;
		links.main_menu.service.dataset.choose=1;
		temp={};
		control.write_arr(arrs.decor, arrs.decor_format, links.table.centre, 'decor', 1);
		links.click.send.dataset.many='write_file';
		links.click.send.dataset.name_file='decor';
		control.write_temp_table(links.table.centre);
		let settings={};
		settings.company_name = abonent.company_name;
		settings.setting = abonent.setting;
		temp.name_file="settings.json";
		temp.txt_file=JSON.stringify(settings);
    },
	count_set_open(link){	
		console.log('count_set_open');
		control.on_on(['price_menu', 'main_menu', 'buttons_line', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.price.dataset.choose=1;
		temp={};
		control.check_comand('settings_calc_read');
    },
	price_list_open(link){	
		console.log('price_list_open');
		control.on_on(['price_menu', 'main_menu', 'table_centre', 'typical_day', 'copy', 'buttons_line', 'delete', 'insert', 'price_date'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.price.dataset.choose=1;
		links.titles.centre.innerText='Стоимость от времени';
		temp={};
		links.felds.date.dataset.display=0;
		temp.date="2020-01-01";
		click.cost_show(temp.date);
		links.click.send.dataset.many='price_list_send';
		//control.check_comand('cost_read');//читаем типовой день  и открываем его
    },
	
	perk_list_open(link){		//new
		let blk=links.table.centre;
		control.on_on(['main_menu','table_centre', 'price_menu', 'table_list']);
		links.click.price.dataset.choose=1;
		links.click.perk_list_open.dataset.choose=1;
		control.write_arr(arrs.perk_control, arrs.perk_control_format, blk, 'perks');
		links.titles.centre.innerText='Управление привелегиями';	
		links.titles.centre_list.innerText='Уровни обслуживания';
		blk=links.table.centre_list;
		if(abonent.setting.perk_list.length){
			control.write_arr(abonent.setting.perk_list, arrs.perk_format, blk, 'perk_list');
		}else{
			blk.innerHTML="";
		}
	},
	
	role_open(link){	
		console.log('role');
		control.on_on(['staff_menu', 'main_menu', 'table_two'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.stafs.dataset.choose=1;
		links.titles.centre_two.innerText='Управление Правами';
		if(!abonent.role_list_all){
			control.check_comand('role_list_read');
		}
		links.click.send.dataset.many='role_write';
    },
	typical_o(link){	
		console.log('typical_o');
		links.group.typical_day.dataset.display=1;
		links.felds.date.dataset.display=0;
		link.dataset.click='calendar';
		link.title='Календарь';
		temp.date="2020-01-01";
		click.cost_show(temp.date);
    },
	calendar(link){	
		console.log('calendar');
		links.group.typical_day.dataset.display=0;
		links.felds.date.dataset.display=1;
		link.dataset.click='typical_o';
		link.title='Типовой день';
		temp.date=links.felds.date.value;
		click.cost_show(temp.date);
    },
	cost_show(date){
		let arr=arrs.price[date];
		if(!arr){
			arr=[];
		}
		links.price=arr;
		control.sort_price(arr);
		let arr_select_0=[];
		let arr_select_1=[];
		for(let i=0; i<abonent.setting.perk_list.length; i++ ){
			arr_select_0.push(abonent.setting.perk_list[i][0]);
			arr_select_1.push(abonent.setting.perk_list[i][1]);
		}
		arrs.price_list_format[0][3]=[arr_select_0, arr_select_1];
		control.write_arr(arr, arrs.price_list_format, links.table.centre, 'count_set', 0);
	},
	recovery(){
		temp.date=temp.date.split("-").join('.');
		control.check_comand('cost_read');
	},
    role(link){		//new
		console.log('role');
		let blk=links.tables.centre;
		control.on_on(['main_menu', 'domain', 'staff_menu', 'table_two', 'manual_munu', 'manual_send'], link);
		link.dataset.choose=1;
		links.click.stafs.dataset.choose=1;
		links.titles.centre_two.innerText='Управление Правами';
		links.titles.domain.innerText='Выберите домен';
		control.write_select_list_1(abonent.domain_list, links.selects.domain_select);
		if(abonent.domain){
			links.selects.domain_select.value=abonent.domain;
			if(!abonent.role_list_all){
				control.check_comand('role_list_read');
			}
			links.click.send.dataset.many='role_write';
		}
		
    },

	role_list(link){
		console.log('role_list');
		temp.title=link.parentNode.parentNode.children[0].children[0].innerText;
		let number=link.parentNode.parentNode.dataset.row;
		let place =links.table.centre_two;
		let role_groop=control.role_groop(abonent.role_list_all[number].list); //role_list.includes(arr[i].name)
		//нужна функция собирающая группы
		let arr=arrs.list_right;
		let new_arr=[];
		let temp_arr;
		for(let i=0; i<arr.length; i++){
			let btn="right_out";
			if(role_groop.includes(arr[i].name)){
				btn="right_in";
			}
			let temp_arr=[arr[i].description, btn, arr[i].name ];
			new_arr.push(temp_arr);
		}
		control.write_arr(new_arr, arrs.right_list_format, place, 'right_list');
		links.group.table_buttons_two.dataset.display=1;
		links.click.send_two.dataset.many="role_write";
		//ставим флаги там где есть
		//изменения сохраняем в темп после отправки
		//каждая роль сохраняется отправкой
		//чтение роли после ее выбора и распаковка  (если нет в темпе), показываем шаблон с флагами
		//отдельная функции сборки и разборки
	},	
	price_list_send(){
		temp.date=temp.date.split("-").join('.');
		temp.times=[];
		for(let i=0; i<links.price.length; i++){
			temp.times[i]={perk:links.price[i][0], time:links.price[i][1], cost:links.price[i][2]};
		}
		//control.check_comand('cost_add');
		control.check_comand('cost_dell');
	},
	detail(link){	
		console.log('detail');
		control.on_on(['service_menu', 'main_menu', 'buttons_line', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.service.dataset.choose=1;
		temp={};
		control.write_arr(arrs.detail, arrs.detail_format, links.table.centre, 'detail', 0);
		links.click.send.dataset.many='detail_write';
		temp.name_file="detail_file.json";
		control.check_comand('read_file');
    },
	detail_write(link){	
		console.log('detail_write');
		abonent.detail = temp;
		temp.name_file="detail_file.json";
		temp.txt_file=JSON.stringify(abonent.detail);
		comm.write_ls('abonent', abonent);
		control.check_comand('write_file');
    },
	settings_calc_write(link){	 //  это не нужно!!!!!
		console.log('settings_calc_write');
		abonent.detail = temp;
		temp.name_file="detail_file.json";
		temp.txt_file=JSON.stringify(abonent.detail);
		comm.write_ls('abonent', abonent);
		control.check_comand('write_file');
    },
	
    check_in(link){
		let list=link.parentNode.parentNode.parentNode.querySelectorAll('div[data-click=check_in]');
		//links.group.send.dataset.display=0;
		links.group.send_dell.dataset.display=0;
		for(let i=0; i<list.length; i++){
			list[i].dataset.click='check_out';
		}
    },
    check_out(link){
		click.check_in(link);
		link.dataset.click='check_in';
		temp.key=link.parentNode.parentNode.children[0].children[0].innerText;
		temp.link=link;
		//links.group.send.dataset.display=1;
		links.group.send_dell.dataset.display=1;	
    },
	right_out(link){
		link.dataset.click='right_in';
		temp.rights=click.read_in(link);
	},
	right_in(link){
		link.dataset.click='right_out';
		temp.rights=click.read_in(link);
	},
	read_in(link){
		let blk=link.parentNode.parentNode.parentNode;
		let list=blk.querySelectorAll('div[data-click="right_in"]');
		let arr=[];
		for (let i=0; i<list.length; i++){
			let tmp=list[i].parentNode.parentNode.children[0].children[0].dataset.name;
			arr.push(tmp);
		}
		let right=[];
		list =arrs.list_right;
		for (let i=0; i<list.length; i++){
			if(arr.includes(list[i].name) ){
				right=right.concat(list[i].right);
			}
		}
		return right;
	},
	delete(link){
		let date;
		if(+links.felds.date.dataset.display){
			date=links.felds.date.value;
		} else{
			date='2020-01-01';
		}
		let arr=links.price;
		arrs.price[date]=control.edit_arr(arr, 'dell', control.take_select(links.table.centre),'');
		arr=arrs.price[date];
		links.price=arr;
		control.write_arr(arr, arrs.price_list_format, links.table.centre, 'count_set', 0);
    },
	insert(link){
		let date;
		if(+links.felds.date.dataset.display){
			date=links.felds.date.value;
		} else{
			date='2020-01-01';
		}
		let arr=[];
		if(!arrs.temp_price.length){
			let item=[0, '17:00:12', '14.55', 'right_out', 'petk', 'time', 'cost' ];
			arr=links.price;
			arrs.price[date]=control.edit_arr(arr, 'insert', control.take_select(links.table.centre), item);
			arr=arrs.price[date];
		}else {
			arr=arrs.temp_price;
			arrs.temp_price=[];
		}
		links.price=arr;
		control.sort_price(arr);
		control.write_arr(arr, arrs.price_list_format, links.table.centre, 'count_set', 0);
		//console.log(arr);
    },
	copy(link){
		arrs.temp_price=control.edit_arr(links.price, 'copy', control.take_select(links.table.centre));
	},
	
    staff_open(link){		//new
		console.log('staff_open');
		let blk=links.table.centre;
		control.on_on(['main_menu','table_centre', 'staff_menu', 'table_list','list_buttons'], link);
		link.dataset.choose=1;
		links.click.stafs.dataset.choose=1;
		control.write_arr(arrs.staff_control, arrs.staff_control_format, blk, 'stafs', 1);
		links.titles.centre.innerText='Управление Персоналом';
		abonent.key=0;
		abonent.count=1000;		
		links.titles.centre_list.innerText='Сотрудники';
		blk=links.table.centre_list;
		if(abonent.staff_list_write){
			let obj=abonent.staff_list_write;
			if(abonent.role_list_all){
				obj=control.inser_role(obj, abonent.role_list_all);
			}
			control.write_arr(obj, arrs.staff_list_format, blk, 'staff_list');
			control.make_list();
		}else{
			blk.innerHTML="";
		}
    },
	add(link){
		if(link.parentNode.parentNode.parentNode.dataset.name=='perks'){
			abonent.perk=link.parentNode.parentNode.children[0].children[0].value;
			control.check_comand('perk_n');
			return;
		}
		abonent.name=link.parentNode.parentNode.children[0].children[0].value;
		abonent.role=link.parentNode.parentNode.children[1].children[0].value;
		control.check_comand('new_passkey');
	},
	
	data_change(link){
		temp.date=link.value;
	},

};

let answer={  //new
	new_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	new_pass_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	recovery_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения 
 		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	in_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	read_seting(e){
		let obj=comm.show_ax(e);
		if(obj.company_name){
			document.querySelector('title').innerText=obj.company_name;
			document.querySelector('.top').innerText=obj.company_name;
			abonent.company_name=obj.company_name;
			if(obj.setting){
				abonent.setting=obj.setting;
			}else{
				abonent.setting={};
			}
			control.apply_setting();
			comm.write_ls('abonent', abonent);
		}
	},
	detail_file(e){
		let obj=comm.show_ax(e);
		if(obj){
			for(let i in arrs.detail){
				arrs.detail[i][1]=obj[arrs.detail[i][2]];
			}
		}
		control.write_arr(arrs.detail, arrs.detail_format, links.table.centre, 'detail', 0);
		
		links.click.send.dataset.many='detail_write';
		control.write_temp_table(links.table.centre);
	},
	settings_calc_read(e){
		let obj=comm.show_ax(e);
		if(obj){
			for(let i=0; i< arrs.count_set.length; i++){
				for(let j=0; j<arrs.count_set[i].length; j++){
					if(obj[arrs.count_set[i][j][2]]!=undefined){
						arrs.count_set[i][j][1]=obj[arrs.count_set[i][j][2]];
					}					
				}
			}
		}
		control.write_arr(arrs.count_set, arrs.count_set_format, links.table.centre, 'count_set', 1);
		links.click.send.dataset.many='settings_calc_edit';
		control.write_temp_table(links.table.centre);
	},

	cost_read(e){
		console.log('cost_read');
		let obj=comm.show_ax(e);
		if(obj){
			//изменить массив  			[0, '14:00:12', '14.55','right_out', 'perk', 'time', 'cost' ],
			for(let i=0; i<obj.length; i++){
				obj[i].splice(3, 1, 'right_out', 'perk', 'time', 'cost');
			}
			arrs.price[temp.date]=obj;
			control.write_arr(obj, arrs.price_list_format, links.table.centre, 'count_set', 0);
			control.write_temp_table(links.table.centre);
			temp.date=temp.date.split("-").join('.');
			temp.times=[];
			links.price=[];
			for(let i=0; i<obj.length; i++){
				links.price.push(obj[i]);
				temp.times[i]={perk:obj[i][0], time:obj[i][1], cost:obj[i][2]};
			}
		}
	},
	cost_dell(e){
		console.log('cost_dell');
		//let obj=comm.show_ax(e);
		//if(obj){
		control.check_comand('cost_add');
		//}
	},
	cost_add(e){
		console.log('cost_add');
		//let obj=comm.show_ax(e);
		//if(obj){
		control.check_comand('cost_read');
		//}
	},


	staff_list_read(e){
		let obj=comm.show_ax(e);
		if(Array.isArray(obj)){
			if(obj.length){
				//let asd=[];
				for(let i=0; i<obj.length; i++){
					obj[i].push("check_out");
				}
				blk=links.table.centre_list;
				abonent.staff_list_write=obj;
				if(abonent.role_list_all){
					obj=control.inser_role(obj, abonent.role_list_all);
				}
				control.write_arr(obj, arrs.staff_list_format, blk, 'staff_list');
			} else{
				links.tables.centre_list.innerHTML='';
			}
		}
		comm.write_ls('abonent', abonent);		
	},

	role_list_read(e){
		let obj=comm.show_ax(e);
		if(Array.isArray(obj)){
			if(obj.length){
				abonent.role_list_all=obj;
				abonent.role_list=[];
				for(let i=0; i<obj.length; i++){
					abonent.role_list[i]=[];
					abonent.role_list[i].push(obj[i].name);
					abonent.role_list[i].push("check_out");
					if(obj[i].id==abonent.role){
						abonent.my_role_name=obj[i].name;
						abonent.my_role_list=obj[i].list;
					}
				}
				blk=links.table.centre_one;
				control.write_arr(abonent.role_list, arrs.role_list_format, blk, 'role_list');
			} else{
				links.tables.centre_one.innerHTML='';
			}
		}
		comm.write_ls('abonent', abonent);				
	},
	
	role_write(e){
		let obj=comm.show_ax(e);
		if(obj.title){
			//abonent.key=0;
			//abonent.count=1000;
			control.check_comand('role_list_read');
		} 
	},
	new_passkey(e){		//new
		let obj=comm.show_ax(e);
		if(obj){
			links.table.centre.children[0].children[2].innerText=obj.passkey;
		}
		abonent.key=0;
		abonent.count=1000;
		control.check_comand('staff_list_read');
	},
	perk_list_read(e){		//new
		let obj=comm.show_ax(e);
		console.log('perk list read');
		let blk=links.table.centre;
		blk=links.table.centre_list;
		abonent.setting.perk_list=[];
		for(let i=0; i<obj.length;i++){
			abonent.setting.perk_list.push([obj[i].id, obj[i].perk]);
		}
		control.write_arr(abonent.setting.perk_list, arrs.perk_format, blk, 'perk_list');
		comm.write_setting();
	},
	perk_n(e){
		let obj=comm.show_ax(e);
		console.log('perk_n');
		if(obj){
			blk=links.table.centre_list;
			let perk_arr=[];
			if(!abonent.setting.perk_list){
				abonent.setting.perk_list=[];
			} else{
				control.check_comand('perk_list_read');
			}
		}
	},
	
};

let control={
	write_temp_table_old(table){ //пишем в temp значение всех полей таблицы	
		let list=table.querySelectorAll('input');
		for(let i=0; i<list.length; i++){
			temp[list[i].dataset.name]=list[i].value;
		}
		list=table.querySelectorAll('select');
		for(let i=0; i<list.length; i++){
			temp[list[i].dataset.name]=list[i].value;
		}
	},
	
	write_temp_table(table){ //пишем в temp значение всех полей таблицы		new
		let rows=table.querySelectorAll('tr');
		for(let j=0; j<rows.length; j++){
			temp[j]={};
			let list=rows[j].querySelectorAll('input');
			for(let i=0; i<list.length; i++){
				temp[j][list[i].dataset.name]=list[i].value;
			}
			list=rows[j].querySelectorAll('select');
			for(let i=0; i<list.length; i++){
				temp[j][list[i].dataset.name]=list[i].value;
			}
		}
		if(!rows.length){
			let list=table.querySelectorAll('input');
			for(let i=0; i<list.length; i++){
				temp[list[i].dataset.name]=list[i].value;
			}
			list=table.querySelectorAll('select');
			for(let i=0; i<list.length; i++){
				temp[list[i].dataset.name]=list[i].value;
			}
		}
	},
	
	
	
	fon_move(){  			//new
        let rand_x=Math.floor(Math.random() * 40) +30;
        let rand_y=Math.floor(Math.random() * 40) -20;
        document.documentElement.style.setProperty('--position_fon_x', rand_x+'%');
        document.documentElement.style.setProperty('--position_fon_y', rand_y+'%');
	},
	check_comand(name){  //new
		let obj={};
		let url='../'+name;
		let felds=arrs.commands[name].out;
		if(felds.includes('temp')){
			obj.session=abonent.session;
			obj.name_file=name;
			let asd={};
			for(let i in temp){
				asd[i]=temp[i];
			}
			obj.txt_file=JSON.stringify(asd);
		} else{
			for(let i in felds){
				if(felds[i] in links.felds){//дописываем поля из felds = страница
					obj[felds[i]]=links.felds[felds[i]].value;
				}
				if(felds[i] in abonent){//дописываем поля из abonent
					obj[felds[i]]=abonent[felds[i]];
				}
				if(felds[i] in temp){//дописываем поля из temp
					obj[felds[i]]=temp[felds[i]];
				}
			}
		}
		if(name=="read_file"){
			if(temp[arrs.commands.read_file.out[1]]){
				comm.ax(obj, temp[arrs.commands.read_file.out[1]].slice(0,-5), url);
			}
		} else{
			comm.ax(obj, name, url);
		}
	},	
	write_arr(name_obj, name_format, parent, name, multi=0){  //new
	    //имя массива, формат массива, место вставки, имя ссылки, вложения
	    if(!links.sets){
	        links.sets={};
	    }
	    parent.innerHTML='';
	    parent.dataset.name=name;
	    let fnk=function(obj, format, parent){ 
			let list_flag=0;
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
							list_flag=1;
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
					if(obj[j][format[i][3]]&&format[i][1]=='div'){
					   kol_blk.dataset.name= obj[j][format[i][3]];
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
							if(format[i][3]){
								kol_blk.dataset.name= obj[j][format[i][3]];
							}
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
			if(list_flag==1){
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
	make_list(){
		role_list_option.innerHTML='';
		for (let i=0; i<abonent.role_list.length; i++){
			let op=document.createElement('option');
			op.value=abonent.role_list[i][0];
			role_list_option.append(op);
		}
	},
	answer(obj){			//new
		let table_temp={};
		if(temp.table){
			let list =temp.table.querySelectorAll('div[data-name]');
			for(let i=0; i<list.length; i++){
				table_temp[list[i].dataset]=list[i];
			}
		}
		//перебираем места хранения полей
		for(let i in obj){
			if(i in abonent){
				abonent[i]=obj[i];
			}
			if(i in links.felds){
				links.felds[i]=obj[i];
			}
			if(i in table_temp){
				table_temp[i]=obj[i];
			}
		}
		comm.write_ls('abonent', abonent);
	},

	take_select(obj){		//new
		let rows=[];
		let list=obj.querySelectorAll('div[data-click="right_in"]')
		for(let i=0; i<list.length; i++){
			rows[i]=list[i].parentNode.parentNode.dataset.row;
		}
		return rows;
	},
	
	edit_arr(arr, doing, list, first=''){  //arrs.price_list, 'insert', control.take_select(links.table.centre), [1,2,3]	new
		let new_arr=[];
		if(list.length){
			for(let i=0; i<arr.length; i++){
				if(list.includes(String(i))){
					if(doing=='insert'){
						new_arr.push(arr[i]);
						new_arr.push(arr[i]);
					}
					if(doing=='copy'){
						new_arr.push(arr[i]);
					}
				} else {
					if(doing!='copy'){
						new_arr.push(arr[i]);
					}
				}
			}
		}else{
			for(let i=0; i<arr.length; i++){
				new_arr.push(arr[i]);
			}
			if(first){
				new_arr.push(first);
			}
		}
		return new_arr;
	},
	past(arr){
		let new_arr=[];
		for(let i=0; i<arr.length; i++){
			new_arr.push(arr[i]);
		}
		return new_arr;
	},

	sort_price(arr){
		function cmpr(a, b) {
		  if (a[0] > b[0]) return 1;
		  if (a[0] == b[0]) return 0;
		  if (a[0] < b[0]) return -1;
		}
		function cmpr1(a, b) {
		  if (a[1] > b[1]) return 1;
		  if (a[1] == b[1]) return 0;
		  if (a[1] < b[1]) return -1;
		}
		//arr.sort( (a, b) => a[1] - b[1] );
		arr.sort( cmpr1);
		arr.sort( cmpr);
	},
	
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
    //open - close  block
    stafs(link){
		console.log('stafs');
		control.on_on(['staff_menu', 'manual_staff'], link);
    },
    service(link){
		console.log('service');
		control.on_on(['service_menu', 'manual_service'], link);
    },
    price(link){
		console.log('price');
		control.on_on(['price_menu', 'manual_price'], link);
    },
    manager(link){
		console.log('manager');
		control.on_on(['manager_menu', 'manual_manager'], link);
    },
    clients(link){
		console.log('clients');
		control.on_on(['clients_menu', 'manual_clients'], link);
    },

	role(link){
		console.log('role');
		control.on_on(['staff_menu', 'manual_staff', 'role', 'manual_login', 'manual_role'], link);
		link.dataset.choose=1;
		control.write_select(arrs.roles_list, links.selects.role);
		let blk=links.blocks.role.querySelector('.table');
		control.write_list_right(arrs.roles_list[0].list, blk);
		blk.dataset.select=0;
    },
    role_select(e){		//new
        let link=e.target;
        let blk=links.blocks.role.querySelector('.table');
        control.write_list_right(arrs.roles_list[link.value].list, blk);
        blk.dataset.select=link.value;
    },
	role_groop(rights){
		let arr=arrs.list_right;
		let groop=[];
		let temp_arr;
		let temp_name;
		for(let i=0; i<arr.length; i++){
			temp_arr=arr[i].right;
			temp_name=arr[i].name;
			let k=temp_arr.length;
			let j=0;
			for(; j<temp_arr.length; j++){
				if(!rights.includes(temp_arr[j])){
					break;
				}
			}
			if(k==j){
				groop.push(temp_name);
			}
		}
		return groop;
	},
		
    count_set(link){
		console.log('count_set');
		let blk=links.blocks.count_set.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'count_set', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_count_set(arrs.count_set_list, blk);
    },
    perk_list(link){
		console.log('perk_list');
		let blk=links.blocks.perk_list.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'perk_list', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_perk_list(arrs.perk_list, blk);
    },
    price_list(link){
		console.log('price_list');
		let blk=links.blocks.price_list.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'price_list', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_select_list(arrs.perk_list, links.selects.perk);
		let tate_txt=links.felds.date.value.slice(8,10)+links.felds.date.value.slice(5,7)+links.felds.date.value.slice(0,4);
		if(!arrs.calendar[tate_txt]){
           arrs.calendar[tate_txt]=[];
           arrs.calendar[tate_txt][0]=arrs.calendar['01012020'][0].slice();
        } 
        let obj=arrs.calendar[tate_txt][0];  
		control.write_price_list(obj, blk);
		//заполнить селект и выбрать первоезначение
		//в соответствии со значением и датой заполнить таблицу
		//control.write_perk_list(arrs.perk_list, blk);
    },
    decor(link){
		console.log('decor');
		let blk=links.blocks.decor.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'decor', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.decor_list, arrs.decor_list_format, blk, 'decor', 1);
    },
    balance(){
        link=links.click.balance;
		console.log('balance');
		let blk=links.blocks.balance.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'balance', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.balance_list, arrs.balance_list_format, blk, 'balance');
    },
    detail(link){
		console.log('detail');
		let blk=links.blocks.detail.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'detail', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.detail_list, arrs.detail_list_format, blk, 'detail');
    },



    check_in(link){
        link.dataset.click='check_out';
        if(link.parentNode.dataset.right){
            arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=0;
        }
    },
    check_out(link){
        link.dataset.click='check_in';
        if(link.parentNode.dataset.right){
            arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=1;
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
    write_select_list(obj, parent){
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
    write_list_right(obj, parent){
        parent.innerHTML='';
        for(let i in obj){
            let blk_line=document.createElement('div');
            blk_line.className='line';
            blk_line.dataset.right=i;
            parent.append(blk_line);
            let blk_desc=document.createElement('div');
            blk_desc.className='description';
            blk_desc.innerText=obj[i].description;
            blk_line.append(blk_desc);
            let blk_check=document.createElement('div');
            blk_check.className='description';
            if(obj[i].check==1){
                blk_check.dataset.click='check_in';
            }
            if(obj[i].check==0){
                blk_check.dataset.click='check_out';
            }
            blk_line.append(blk_check);
        }
    },

    make_roles_list(){
        for(let i in arrs.roles){
            arrs.roles_list[i]={};
            arrs.roles_list[i].name=arrs.roles[i].name;
            arrs.roles_list[i].list={};
            for(let j in arrs.list_right){
                arrs.roles_list[i].list[arrs.list_right[j].name]={};
                arrs.roles_list[i].list[arrs.list_right[j].name].description=arrs.list_right[j].description;
                arrs.roles_list[i].list[arrs.list_right[j].name].check=0;
                if(arrs.roles[i].name=='admin'){
                    arrs.roles_list[i].list[arrs.list_right[j].name].check=1;
                }
            }
        }
    },
	staff(link){
		console.log('role');
		control.on_on(['staff_menu', 'manual_staff', 'staff', 'manual_staff', 'manual_role'], link);
		link.dataset.choose=1;
		let parent=links.blocks.staff.querySelector('table');
		control.write_table(arrs.staff, parent);
    },
    write_table(obj, parent){
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol =document.createElement('td');
            kol.innerText=obj[j].name;
            row.append(kol);
            let kol_r =document.createElement('td');
            kol_r.innerText=arrs.roles_list[obj[j].role].name;
            row.append(kol_r);
            let kol_d =document.createElement('td');
            kol_d.innerText=obj[j].registred;
            row.append(kol_d);
            let kol_c =document.createElement('td');
            row.append(kol_c);
            let kol_p =document.createElement('div');
            kol_p.dataset.click='check_out';
            kol_c.append(kol_p);
            row.dataset.key_employee=obj[j].key_employee;
            parent.append(row);
        }
    },
    write_count_set(obj, parent){
        parent.dataset.inputs='count_set_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol =document.createElement('td');
            kol.innerText=obj[j].name;
            row.append(kol);
            let kol_v =document.createElement('td');
            let kol_p =document.createElement('input');
            kol_p.type=obj[j].type;
            kol_p.value=obj[j].value;
            kol_v.append(kol_p);
            row.append(kol_v);
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    write_perk_list(obj, parent){
        parent.dataset.inputs='perk_list_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol_v =document.createElement('td');
            let kol_p =document.createElement('input');
            kol_p.type='text';
            kol_p.value=obj[j];
            kol_v.append(kol_p);
            row.append(kol_v);
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    write_price_list(obj, parent){
        parent.dataset.inputs='price_list_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol_0 =document.createElement('td');
            let kol_0i =document.createElement('input');
            kol_0i.type='time';
            kol_0i.value=obj[j][0];
            kol_0.append(kol_0i);
            row.append(kol_0);
            let kol_1 =document.createElement('td');
            let kol_1i =document.createElement('input');
            kol_1i.type='number';
            kol_1i.value=obj[j][1];
            kol_1.append(kol_1i);
            row.append(kol_1);
            
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    perk_list_chng(link){
        console.log('perk_list_chng');
        arrs.perk_list[link.parentNode.parentNode.dataset.count_set]=link.value;
    },
    count_set_chng(link){
        console.log('count_set_chng');
        arrs.count_set_list[link.parentNode.parentNode.dataset.count_set].value=link.value;
    },
    price_list_chng(link){
        console.log('price_list_chng');
        let date_txt=links.felds.date.value.slice(8,10)+links.felds.date.value.slice(5,7)+links.felds.date.value.slice(0,4);
        let obg_in=arrs.calendar[date_txt][links.selects.perk.value][link.parentNode.parentNode.dataset.count_set];
        let obj_out=link.parentNode.parentNode;
        obg_in[0]=obj_out.children[0].children[0].value;
        obg_in[1]=obj_out.children[1].children[0].value;
    },
	btn(e){
		let btn=e.target.parentNode;
		com.ax("ghj");
	},
	new_user(e){
		abonent.key=12345;
		abonent.session=45678;
		comm.write_ls('abonent',abonent);
		control.on_off_btn({in_user:0, check:1, out_user:1});
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		//control.on_off({login:0, color:1, bill:0, btns:1,story:0});
	},
	recovery(e){//
		abonent.key=65478;
		abonent.session=9876;
		comm.write_ls('abonent',abonent);
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		//control.on_off({login:0, color:1, bill:0, btns:1,story:0});
	},

	on_on(obj, link){  //obj - список имен  блоков которые нужно показать	 new
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
	off_off(link){					//new		
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
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
		control.on_off_btn({in_user:0, check:1, out_user:1});
	},
	out_user(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
		control.on_off_btn({in_user:1, check:0, out_user:0});
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
	},
	
	inser_role(staff_arr, role_arr){  //new
		let temp_arr=[];
		for(let i=0; i<staff_arr.length; i++){
			temp_arr[i]=staff_arr[i];
			let num=staff_arr[i][2];
			for (let j=0; j<role_arr.length; j++){
				if (num==role_arr[j].id){
					temp_arr[i][2]=role_arr[j].name;
				}
			}
		}
		return temp_arr;
	},
	style_to_file(temp){
		for(let i in temp){
			if(i.slice(0,2)=="--"){
				abonent.setting[i]=temp[i];
			}
		}
		let settings={};
		settings.company_name = abonent.company_name;
		settings.setting = abonent.setting;
		temp.name_file="settings.json";
		temp.txt_file=JSON.stringify(settings);
		comm.write_ls('abonent', abonent);
	},
	apply_setting(){
		for(let i in abonent.setting){
			if(i.slice(0,2)=="--"){
				document.documentElement.style.setProperty(i, abonent.setting[i]);
				for(let j=0; j<arrs.decor.length; j++){
					if(arrs.decor[j][0][2]==i){
						arrs.decor[j][0][1]=abonent.setting[i];
					}
				}
			}
		}
	},
};

function start(){
	abonent.domain=document.location.pathname.split("/")[1]; //new
	let list=document.querySelectorAll('div[data-group]');  // new
	for(let i=0; i<list.length; i++){							//new
		links.group[list[i].dataset.group]=list[i];
	}
	
	list=document.querySelectorAll('div[data-click]');
	for(let i=0; i<list.length; i++){
		links.click[list[i].dataset.click]=list[i];
	}
	list=document.querySelectorAll('div[data-title]');  //new
	for(let i=0; i<list.length; i++){
		links.titles[list[i].dataset.title]=list[i];
	}
	list=document.querySelectorAll('table');			//new
	for(let i=0; i<list.length; i++){					//new
		links.table[list[i].dataset.table]=list[i];
	}
	list=document.querySelectorAll('input[data-id]');
	for(let i=0; i<list.length; i++){
		links.felds[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('select[data-id]');
	for(let i=0; i<list.length; i++){
		links.selects[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('div[data-group="main_menu"] div[data-click]');
	for(let i=0; i<list.length; i++){
		links.main_menu[list[i].dataset.click]=list[i];
	}
	
	for(let i in links.group){							//new
		links.group[i].dataset.display=0;	
	}						
	abonent=comm.read_ls('abonent');					//new
	if(abonent.setting){
		control.apply_setting();
	}
	
	if(!(abonent.session)){					//new
		//control.on_on(['table_centre']);	
		//control.write_arr(arrs.new_staff, arrs.new_staff_format, links.table.centre, 'new_staff', multi=1);
		//links.click.send.dataset.many='new_staff';
		abonent.domain=document.location.pathname.split("/")[1];
		abonent.key=0;
		abonent.count=1000;
		abonent.session='';
		abonent.login='';
		abonent.role='';
	}
	comm.ax_get('read_seting', '../settings.json');
	control.on_on(['main_menu']);
	links.felds.date.value=new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
}

start();

link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
link_window_all.addEventListener("change", links.call_func_chng);