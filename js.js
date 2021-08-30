function start(){
    pageElementClick()
    menuMobile()
    destination()
    scrollHeader()
    slickSlider()
    backtop()
    featuredListingVote()
    exploreCategories_slider()
    loading()
}
start()
// MOBILE MENU
function pageElementClick(){
    var mobileItem = document.querySelectorAll(".mobile-menu-list li")
    var pageElement = mobileItem[2]
    pageElement.onclick = function(){
        var mobileListSmallElement = pageElement.querySelector('.mobile-list_small')
        var pagevalue1 = document.getElementById('page-value1')
        var pagevalue2 = document.getElementById('page-value2');
        if(mobileListSmallElement){
            if(mobileListSmallElement.classList.contains('display')){
                mobileListSmallElement.classList.remove('display')
                pagevalue1.classList.add('display')
                pagevalue2.classList.remove('display')
            }else{
                mobileListSmallElement.classList.add('display')
                pagevalue1.classList.remove('display')
                pagevalue2.classList.add('display')
            }
        }
        
    }
}
function menuMobile(){
    var menuMobileBtn = document.querySelector('.menu-btn')
    menuMobileBtn.onclick = function(){
        var menuMobile = document.querySelector('.mobile-menu-list')
        if(menuMobile){
            if(menuMobile.classList.contains('display')){
                menuMobile.classList.remove('display')
            }else{
                menuMobile.classList.add('display')
            }
        }
    }
}
// DESTINATION
function destination(){
    var selectCategory = document.querySelector('.select-category')
    var categoryList = document.querySelector('.category-list')
    var categoryItems = document.querySelectorAll('.category-list_item')
    var selectCategorySpan = selectCategory.querySelector('span') 
    var selectCity = document.querySelector('.select-city')
    var CityList = document.querySelector('.city-list')
    var cityItems = document.querySelectorAll('.city-list_item')
    var selectCitySpan = selectCity.querySelector('span') 
    selectCategory.onclick = function(){
        if( !selectCategory.classList.contains('active')){
            selectCategory.classList.add('active')
        }else{
            selectCategory.classList.remove('active')
        }
        
        categoryItems.forEach(function(categoryItem){
            categoryItem.onclick = function(){
                categoryItems.forEach(function(item){
                    if(item.classList.contains('selected')){
                        item.classList.remove('selected')
                    }
                })
                this.classList.add('selected')
                selectCategorySpan.textContent = this.textContent
            }
        })
    }
    selectCity.onclick = function(){
        if( !selectCity.classList.contains('active')){
            selectCity.classList.add('active')
        }else{
            selectCity.classList.remove('active')
        }
        
        cityItems.forEach(function(cityitem){
            cityitem.onclick = function(){
                this.parentNode.querySelector('.city-list_item.selected').classList.remove('selected')
                this.classList.add('selected')
                selectCitySpan.textContent = this.textContent
            }
        })
    }

    window.addEventListener('mouseover', function(e){
        if(!categoryList.contains(e.target)){
            categoryItems.forEach(function(categoryItem){
                if(categoryItem.classList.contains('selected')){
                    categoryItem.classList.add('focus')
                }else{
                    categoryItem.classList.remove('focus')
                }
            })
        }else{
            categoryItems.forEach(function(categoryItem){
                if(categoryItem.classList.contains('focus')){
                    categoryItem.classList.remove('focus')
                }
            })
        }
        if(!CityList.contains(e.target)){
            cityItems.forEach(function(cityItem){
                if(cityItem.classList.contains('selected')){
                    cityItem.classList.add('focus')
                }else{
                    cityItem.classList.remove('focus')
                }
            })
        }else{
            cityItems.forEach(function(cityItem){
                if(cityItem.classList.contains('focus')){
                    cityItem.classList.remove('focus')
                }
            })
        }
    })

    window.addEventListener('click', function(e){
        if(!selectCategory.contains(e.target)){
            selectCategory.classList.remove('active')
        }
        if(!selectCity.contains(e.target)){
            selectCity.classList.remove('active')
        }
    })
}
// HEADER FIXED
function scrollHeader(){
    var headerContainer = document.querySelector('.header-container')
    window.addEventListener('scroll', function(){
        if(this.pageYOffset > 300){
            if(!headerContainer.classList.contains('fixed')){
                headerContainer.classList.add('fixed')
            }
        }else{
            headerContainer.classList.remove('fixed')
        }
    })
}
// SLICK SLIDER
function slickSlider(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });
}
// BACKTOP
function backtop(){
    var backtop = document.querySelector('.back-top')
    window.addEventListener('scroll', function(){
        if(this.pageYOffset >= 600 ){
            backtop.classList.add('appear')
        }else{
            if( backtop.classList.contains('appear')){
                backtop.classList.remove('appear')
            }
        }
    })
}
//FEATURE LISTING HEART
function featuredListingVote(){
    var heartElements = document.querySelectorAll('.heart')
    heartElements.forEach(function(heartElement){
        heartElement.onclick = function(){
            if(heartElement.classList.contains('like')){
                heartElement.classList.remove('like')
            }else{
                heartElement.classList.add('like')
            }
        }
    })
}
//EXPLORE CATEGORIES SLIDER
function exploreCategories_slider(){
    $('.exploreCategories_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev_Categories'),
        nextArrow: $('.next_Categories'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });
}
function loading(){
    var loadingElement = document.querySelector('.preloader-active')
    window.addEventListener('load', function(){
        loadingElement.style.display = "none"
    })
}





