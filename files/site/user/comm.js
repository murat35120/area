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
