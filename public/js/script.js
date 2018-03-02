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


		/**
		 * Handle addition of item
		 * 
		 * @return 
		 */
		function substraction () {
			var value = parseInt(document.getElementById("value").innerHTML);
			if (value == 1) {
				return;
			}
			var new_value = value - 1;
			document.getElementById("value").innerHTML = new_value;
			console.dir(value);
		}

		/**
		 * Handle subtraction of item
		 * 
		 * @return 
		 */
		function addition () {
			var value = parseInt(document.getElementById("value").innerHTML);
			var new_value = value + 1;
			document.getElementById("value").innerHTML = new_value;
		}


		/**
		 * Handle the process of showing and hiding mobile
		 * 
		 * @return 
		 */
		function displayModal() {
			var item_description = document.getElementById('item-description');
			var payment_details = document.getElementById('payment-details');

			item_description.setAttribute("hidden", true);
			payment_details.removeAttribute("hidden");
		}

		function closeModal() {
			var item_description = document.getElementById('item-description');
			var payment_details = document.getElementById('payment-details');

			payment_details.setAttribute("hidden", true);
			item_description.removeAttribute("hidden");			
		}

