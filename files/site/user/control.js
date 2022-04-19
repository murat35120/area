
let control={
	fon_move(){
        let rand_x=Math.floor(Math.random() * 40) +30;
        let rand_y=Math.floor(Math.random() * 40) -20;
        document.documentElement.style.setProperty('--position_fon_x', rand_x+'%');
        document.documentElement.style.setProperty('--position_fon_y', rand_y+'%');
	},
	on_on(obj){  //obj - список имен  блоков которые нужно показать
	    control.off_off(); // link -то на что нажали - выделяем, соседи - снимаем выделение
		for(let i in obj){
			links.blocks[obj[i]].dataset.display=1;	
		}
	},
	off_off(){					//new		
		for(let i in links.blocks){
			links.blocks[i].dataset.display=0;	
		}
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
	check_comand(name){  //new
		let obj={};
		let url='../'+name;
		let felds=commands[name].out;
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
			}
		}
		if(name=="read_file"){
			if(temp[commands.read_file.out[1]]){
				comm.ax(obj, temp[commands.read_file.out[1]].slice(0,-5), url);
			}
		} else{
			comm.ax(obj, name, url);
		}
	},
};
