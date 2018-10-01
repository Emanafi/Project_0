$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('#navbar').offset().top;
		   	console.log(stickyNavTop);
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         // console.log(scrollTop);
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('#navbar').addClass('sticky');
			    } else {
			        $('#navbar').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});


			//TESTIMONIALS
			var counter = 0;
			var testimonial = document.getElementById("dynamic-text");
			var testimonials =['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac lacus sem. Curabitur interdum velit sit amet nibh tincidunt posuere. Nam vehicula ultricies nulla quis accumsan. Ut hendrerit turpis ut dapibus ultricies. Sed quis est justo. Curabitur mattis nulla et nulla mollis, sollicitudin eleifend ipsum varius. Etiam pulvinar quam et sapien aliquet, eu mollis erat laoreet. Donec id tincidunt eros, quis dignissim odio. Cras cursus commodo quam, a eleifend nulla pretium a. Nam ornare tempor maximus. Integer in placerat dui. Nunc leo nulla, fermentum nec ipsum vel, fermentum pellentesque nulla. Etiam varius nec augue vel faucibus.', 
								'Sed egestas molestie sagittis. Nam ut magna eleifend, commodo nisl in, tincidunt lectus. Duis rutrum mi sed dui bibendum blandit. Maecenas quis hendrerit nibh. Aliquam tellus lectus, molestie sit amet ligula non, finibus viverra urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque interdum ligula id ligula pharetra, a vulputate ante pellentesque. Mauris nisl nunc, feugiat vitae augue sit amet, lacinia pulvinar felis. Mauris ac laoreet purus, quis porta augue. Aliquam eu neque vulputate, iaculis est et, imperdiet nisl. Morbi quis elit vestibulum nulla vehicula lacinia. Quisque suscipit molestie augue, quis tempus ligula laoreet at. Curabitur consectetur, justo vestibulum laoreet suscipit, dui eros elementum tellus, sit amet auctor nunc tortor mollis urna. Ut suscipit ante eget felis faucibus, at ullamcorper velit consequat.',
								'Praesent non gravida quam, ut porttitor massa. Ut porta turpis quis tincidunt iaculis. Phasellus bibendum felis eget erat lobortis imperdiet. Donec leo purus, porta a mollis id, iaculis non libero. Morbi sit amet mi quis lorem vestibulum pretium a vitae nisl. Aliquam quis ligula et erat vestibulum placerat. Nullam facilisis, metus id pretium luctus, magna tortor ultrices enim, eu pretium tellus justo at metus. Duis posuere at sem non molestie. Morbi bibendum felis sem, ut interdum massa placerat et. Integer ac diam facilisis, pharetra nulla eget, euismod ante. Morbi hendrerit at urna et tincidunt. Morbi sit amet pulvinar lacus.']; 

			var inst = setInterval(updateTestimonials, 5000);

			function updateTestimonials() {
			  testimonial.innerHTML = testimonials[counter];
			  counter++;
			  if (counter >= testimonials.length) {
			    counter = 0;
			  }
			}

		});