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
	
	new_user(e){
	    let asd=comm.show_ax(e);
		if(asd){
			abonent.session=asd.session;
			control.write_color_block(asd);
		}
	},
	check(e){
	    let asd=comm.show_ax(e);
		if(asd){
			control.write_color_block(asd);
		}
	},
	in_user(e){
	    let asd=comm.show_ax(e);
		if(asd){
			abonent.session=asd.session;
			control.write_color_block(asd);
		}
	},
	out(e){
	    let asd=comm.show_ax(e);
		if(asd){
			control.write_color_block(asd);
		}
	},
	recovery(e){
	    let asd=comm.show_ax(e);
		if(asd){
			abonent.session=asd.session;
			control.write_color_block(asd);
		}
	},
	
	read(e){
	    let asd=comm.show_ax(e);
		if (asd && typeof asd === "object") {
			abonent.session=asd.session;
			abonent.color=asd.color;
			links.blocks.color.style.backgroundColor=asd.color;
			abonent.colorName=asd.colorName;
			links.writes.color_name.innerText=asd.colorName;
			links.writes.color_name.style.color=control.check_color(asd.color);
			abonent.code=asd.code;
			links.writes.code.innerText=asd.code;
			links.writes.code.style.color=control.check_color(asd.color);
			control.on_on(['color', 'buttons', 'read']);
			comm.write_ls('abonent', abonent);
		} else{
			if(asd=='wait'){
				links.blocks.color.style.backgroundColor=abonent.color;
				links.writes.color_name.innerText=abonent.colorName;
				links.writes.color_name.style.color=control.check_color(abonent.color);
				links.writes.code.style.color=control.check_color(abonent.color);
				control.on_on(['color', 'buttons', 'read', 'login']);
			} else{
				//if(asd=='out'){
					control.on_on(['status', 'buttons', 'check', 'in_user', 'out', 'story', 'bill', 'login'] );	
				//}else{
				//	control.on_on(['status', 'buttons', 'check', 'out', 'story', 'bill', 'login'] );
				//}
				links.writes.status.innerText=asd;
				links.writes.time.innerText=new Date().toLocaleTimeString('en-GB');				
			}
		}
	},	
}