
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
