let scrollCount = 0;

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
          let paragraphs = document.getElementsByClassName("balise");
          let offsetArr = [];
          for(let i = 0; i < paragraphs.length; i++)
          {
            offsetArr.push(paragraphs[i].offsetTop);
          }
			var currentPosition = window.pageYOffset;
      var closest = offsetArr.reduce(function(prev, curr) {
        return (Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev);
      });
      if(closest <= currentPosition)
      {
        closest = offsetArr[offsetArr.indexOf(closest) + 1]
      }
			var targetPosition = paragraphs[offsetArr.indexOf(closest)].offsetTop;
      
			var distance = paragraphs[offsetArr.indexOf(closest)].offsetTop - currentPosition;
        
			var step = distance / 100;
			var counter = 0;
			var intervalId = setInterval(function() {
				counter++;
				window.scrollTo(0, currentPosition + step * counter);
                
				if (counter == 100) {
					clearInterval(intervalId);
				}
			}, 20);
      // if(scrollCount < 1)
      // {
      // scrollCount += 1
      // }
      // else
      // {
      //   scrollCount = 0
      // }
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