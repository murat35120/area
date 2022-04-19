let answer={ //new
	read_seting(e){
		let obj=comm.show_ax(e);
		if(obj.company_name){
			document.querySelector('title').innerText=obj.company_name;
			document.querySelector('.page_name').innerText=obj.company_name;
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
}