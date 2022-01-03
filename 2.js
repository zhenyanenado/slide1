window.addEventListener('DOMContentLoaded', (event)=>{

	let c = console.log;
	let inp1 = document.getElementById('inp1');


		window.addEventListener('touchstart', (event)=>{

			let pos = event.target;
			let value = inp1.value;

			let posX = event.touches[0].clientX;



				if(posX >= 740){

					value = "";
					c(posX)

				}

				if(pos == inp1){
					inp1.style.backgroundPosition = '95%';
				}

				else {

					inp1.value = "";

				}



		})




})