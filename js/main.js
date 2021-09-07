$(document).ready(function(){
    var winW=$(window).width();
    if(winW >= 1024){
        // fullpage width>1600 적용
       $('#fullpage').fullpage({
            menu:'#menu',
            anchors:['Intro','Profile','Web','Editable','Contact'],
            navigation:true,
            navigationPosition:'left',
            navigationTooltips:['Intro','Profile','Web','Editable','Contact'],
            showActiveTooltip:true,
            afterLoad:function(anchorLink, index, direction){
                // 2, section nav 색상 변경
                    if(index==2||index==4){
                    $('header nav ul li a').addClass('active');
                }else{
                    $('header nav ul li a').removeClass('active');
                }
                // 각 section에서 자식객체에 active설정
                if(index==1){
                    $('.s1 .svg-txt').addClass('active');
                    $('.s2 .box>div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .bb-custom-grid').removeClass('active');
                    $('.s5 .box form div').removeClass('active');
                }
                if(index==2){
                    $('.s1 .svg-txt').removeClass('active');
                    $('.s2 .box>div').addClass('active');
                    // 1초 기다렸다가 barAnimat 호출, 1번실행
                    setTimeout(barAnimat, 1000);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .bb-custom-grid').removeClass('active');
                    $('.s5 .box form div').removeClass('active');
                }
                if(index==3){
                    $('.s1 .svg-txt').removeClass('active');
                    $('.s2 .box>div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').addClass('active');
                    $('.s4 .box .bb-custom-grid').removeClass('active');
                    $('.s5 .box form div').removeClass('active');
                }
                if(index==4){
                    $('.s1 .svg-txt').removeClass('active');
                    $('.s2 .box>div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .bb-custom-grid').addClass('active');
                    $('.s5 .box form div').removeClass('active');
                }
                if(index==5){
                    $('.s1 .svg-txt').removeClass('active');
                    $('.s2 .box>div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .bb-custom-grid').removeClass('active');
                    $('.s5 .box form div').addClass('active');
                }
                
            }
        })
    }
    // skill bar
    function barAnimat(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },2000)
        });
    }
    // 페이지를 옮겨도 skill bar의 animate효과가 초기화되는 명령어
    function barStop(){
        $('.bar').each(function(){
            $(this).find('.bar-inner').animate({
                width:0
            },2000)
        })
    }
    // swiper
    var swiper = new Swiper(".mySwiper", {
        // spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop:true,
        centeredSlides: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
    //popup gallery
    var imgBtn1=$('.s4 .box .book .book1 .bb-item a');
	var imgBtn2=$('.s4 .box .book .book2 .bb-item a');
    var gallTotal=$('.s4 .box .book1 .bb-item').length;
    var popup=$('.popup');
    var container=$('.popup .container');
    var gallNum=0;
    var bookNum=0;
	
    imgBtn1.click(function(e){
        e.preventDefault();
		bookNum=1;
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        var attr=$(this).attr('href');
        gallNum=$(this).index();
        console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴 
        container.append('<img src="'+attr+'">');
        popup.css('display','block'); 
        buttonfn(bookNum);      
    });
	imgBtn2.click(function(e){
        e.preventDefault();
		bookNum=2;
        var attr=$(this).attr('href');
        gallNum=$(this).index();
        console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴 
        container.append('<img src="'+attr+'">');
        popup.css('display','block');
        buttonfn(bookNum);       
    });
		    
    function buttonfn(bookIndex){
		if(bookIndex==1){
			//popup gallery next btn
			$('.popup .next').click(function(){
				gallNum++;
				if(gallNum >= gallTotal) { gallNum=0;}
                result=gallNum+1;
                console.log(result);
				container.empty();
				container.append('<img src="img/pho'+result+'.jpg">');                
			});
            //popup gallery prev btn
            $('.popup .prev').click(function(){
                gallNum--;
                if(gallNum < 0 ) { gallNum=gallTotal-1;}
                result=gallNum+1;
                console.log(result);
                container.empty();
                container.append('<img src="img/pho'+result+'.jpg">');                    
            });
		}else{
			//popup gallery next btn
			$('.popup .next').click(function(){
				gallNum++;
				if(gallNum >= gallTotal) { gallNum=0;}
                result=gallNum+4;
                console.log(result);
				container.empty();
				container.append('<img src="img/pho'+result+'.jpg">');                
			});
            //popup gallery prev btn
            $('.popup .prev').click(function(){
                gallNum--;
                if(gallNum < 0 ) { gallNum=gallTotal-1;}
                result=gallNum+4;
                console.log(result);
                container.empty();
                container.append('<img src="img/pho'+result+'.jpg">');
               
            });
		}
	}

    //popup gallery close btn
    $('.close').click(function(){
        popup.css('display','none');
        //container안의 내용 비움
        container.empty();
    });

});