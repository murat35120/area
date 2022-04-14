let commands={
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
};