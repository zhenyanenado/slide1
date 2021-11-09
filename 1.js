let grids = [];
let blocks = [];
let number = 4;

for (var i = 1; i <=4; i++) {
	grids.push(document.getElementById('grid'+i));
	blocks.push(document.getElementById('block'+(i+4)));

	grids[i-1].addEventListener('touchmove', function(){

		let coords = event.touches[0];
		let cX = coords.clientX;
		
		if(cX >= 350){
			this.style.width = '0px';

			blocks[0].style.opacity = 0;
			blocks[1].style.background = 'white';

			console.log(blocks)
		}
	})
}

