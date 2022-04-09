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
