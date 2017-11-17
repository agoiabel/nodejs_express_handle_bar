		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}
		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("item-image");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1} 
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none"; 
		  }
		  for (i = 0; i < dots.length; i++) {
		      dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block"; 
		  dots[slideIndex-1].className += " active";
		}


		/** calculation */
		function substraction () {
			var value = parseInt(document.getElementById("value").innerHTML);
			if (value == 1) {
				return;
			}
			var new_value = value - 1;
			document.getElementById("value").innerHTML = new_value;
			console.dir(value);
		}

		function addition () {
			var value = parseInt(document.getElementById("value").innerHTML);
			var new_value = value + 1;
			document.getElementById("value").innerHTML = new_value;
			console.dir(value);
		}

		function displayModal() {
			var modal = document.getElementById('myModal');
		    modal.style.display = "block";
		}

		function closeModal () {
			var modal = document.getElementById('myModal');
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		function closeModal(event) {
			var modal = document.getElementById('myModal');			
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}