window.addEventListener('DOMContentLoaded', (event)=>{

	let c = console.log;
	let inp1 = document.getElementById('inp1');

		window.addEventListener('touchstart', (event)=>{

			let pos = event.target;
			let value = inp1.value;

			let posX = event.touches[0].clientX;

				if(posX >= 740){
					value = "";	
				}

				if(pos == inp1){
					inp1.style.backgroundPosition = '-20%';
				}

				else {
					inp1.value = "";
				}

		})

		let addItem = document.getElementsByClassName('change');

			for(let i = 0; i<=3; i++){

				addItem[i].addEventListener('touchstart', function(e){

					if(this == addItem[0]){

						let newObj1 = document.createElement('div');
							document.getElementById('item2').append(newObj1)
							newObj1.id = 'newMenu1'

					}

				})
			}



})