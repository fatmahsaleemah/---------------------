
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
      var slides = document.getElementsByClassName("mySlides");
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

    
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });


/* --------------------------------------------------------------- */
		function Delete(e){
			let items = [];
			JSON.parse(localStorage.getItem('items')).map(data=>{
				if(data.id != e.parentElement.parentElement.children[0].textContent){
					
					items.push(data);

				}
			});
			localStorage.setItem('items',JSON.stringify(items));
			window.location.reload();
		};

/* --------------------------------------------------------------- */
 
    window.onload = function(){
      const iconShopping = document.querySelector('.iconShopping');
      const cartCloseBtn = document.querySelector('.fa-close');
      const cartBox = document.querySelector('.cartBox');
      iconShopping.addEventListener("click",function(){
        cartBox.classList.add('active');
      });
      cartCloseBtn.addEventListener("click",function(){
        cartBox.classList.remove('active');
      });
    
    
      const attToCartBtn = document.getElementsByClassName('attToCart');
      let items = [];
      for(let i=0; i<attToCartBtn.length; i++){
        attToCartBtn[i].addEventListener("click",function(e){
          if(typeof(Storage) !== 'undefined'){
            let item = {
                id:i+1,
                name:e.target.parentElement.children[0].textContent,
                price:e.target.parentElement.children[1].children[0].textContent,
                no:1
              };
            if(JSON.parse(localStorage.getItem('items')) === null){
              items.push(item);
              localStorage.setItem("items",JSON.stringify(items));
              window.location.reload();
            }else{
              const localItems = JSON.parse(localStorage.getItem("items"));
              localItems.map(data=>{
                if(item.id == data.id){
                  item.no = data.no + 1;
                }else{
                  items.push(data);
                }
              });
              items.push(item);
              localStorage.setItem('items',JSON.stringify(items));
              window.location.reload();
            }
          }else{
            alert('local storage is not working on your browser');
          }
        });
      }

      const iconShoppingP = document.querySelector('.iconShopping p');
      let no = 0;
      JSON.parse(localStorage.getItem('items')).map(data=>{
        no = no+data.no
    ;	});
      iconShoppingP.innerHTML = no;
    
    
      const cardBoxTable = cartBox.querySelector('table');
      let tableData = '';
      tableData += '<tr><th></th><th></th><th></th><th></th><th></th></tr>';
      if(JSON.parse(localStorage.getItem('items'))[0] === null){
        tableData += '<tr><td colspan="5">No items found</td></tr>'
      }else{
        JSON.parse(localStorage.getItem('items')).map(data=>{
          tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
        });
      }
      cardBoxTable.innerHTML = tableData;
    }