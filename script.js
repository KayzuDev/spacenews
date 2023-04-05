function stars()
        {
            let count = 20;
            let scene = document.querySelector('.scene');
            let i = 0;
            while(i < count)
            {
                let star = document.createElement('i');
                star.classList.add("star");
                let x = Math.floor(Math.random() * window.innerWidth);

                let duration = Math.random() * 1;
                let h = Math.random() * 100;
                
                star.style.left = x + 'px';
                star.style.width = 1 + 'px';
                star.style.height = 50 + h + 'px';
                star.style.animationDuration = duration + 's';
                scene.appendChild(star);
                i++;
            }
        }
        // stars();
        
        function scrollSlowly() {
			var currentPosition = window.pageYOffset;
			var targetPosition = currentPosition + 3100;
			var distance = 3100;
            console.log(distance)
			var step = distance / 100;
			var counter = 0;
			var intervalId = setInterval(function() {
				counter++;
				window.scrollTo(0, currentPosition + step * counter);
                
				if (counter == 100) {
					clearInterval(intervalId);
				}
			}, 20);
            return new Promise(resolve => {
      const scrollHandler = () => {
        if (window.pageYOffset === targetPosition) {
          window.removeEventListener('scroll', scrollHandler)
          resolve()
        }
      }
      window.addEventListener('scroll', scrollHandler)
    })
		}

        let rocket = document.querySelector('.rocket');
        rocket.addEventListener('click', function(){
            rocket.style.animation = "animate 0.2s ease infinite";
            stars();
            rocket.style.setProperty('--afterBack', 'block');
            rocket.style.setProperty('--beforeBack', 'block');
            scrollSlowly().then(() => {
                
                const items = document.querySelectorAll(".star");
                for (let item of items) {
                    item.remove();
                }
                rocket.style.animation = "";
                rocket.style.setProperty('--afterBack', 'none');
                rocket.style.setProperty('--beforeBack', 'none');
        })
            
        })