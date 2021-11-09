let grids = [];
let blocks = [];
let prevNumber = 0;
let number = 1;

for (var i = 1; i <=4; i++) {
	grids.push(document.getElementById('grid'+i));
	blocks.push(document.getElementById('block'+(i+4)));

	grids[i-1].addEventListener('click', function(){

	if(prevNumber <=3 && number <=3){
			this.style.width = '0px';

			blocks[prevNumber].style.opacity = 0;
			blocks[number].style.background = 'white';

		
				prevNumber++;
				number++;
			}
	
		
	})
}

