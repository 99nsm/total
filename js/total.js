


$(document).ready(function(){

    const txtWrap = document.querySelector('.typing');
    const txtString = 'Welcome NaSangMin \n Portfolio';
    const txtSpeed = 100;
    let txtIndex = 0;
    let typeCotrol = true;
    
    function typingEvent(){
      if(typeCotrol === true){
        let txtNow = txtString[txtIndex++];
        txtWrap.innerHTML += txtNow === "\n" ? "<br>": txtNow;
        console.log(txtIndex)
        if(txtIndex >= txtString.length){
          txtIndex = 0;
          typeCotrol = false;
        }
      }else{
        clearInterval(setTyping);
      }
    }
    let setTyping = setInterval(typingEvent, txtSpeed);

    // $('.sec').on('mousewheel DOMMouseScroll', function(){
    //     let dir = event.wheelDelta // 음수면 아래, 양수면 위
    //     let o_top;
    //     //스크롤 막기
        
    //     setTimeout(function(){
            
    //     }, 700)

    //     // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
    //     if(dir < 0) { 
    //         if($(this).next().length > 0) { 
    //             o_top = $(this).next().offset().top
    //         }
    //     }
    //     else if(dir > 0) { 
    //         if($(this).prev().length > 0) {
    //             o_top = $(this).prev().offset().top
    //         }
    //     }
        
    //     $('html, body').stop(true).animate({
    //         scrollTop: o_top
    //     }, 700)
    // });

    let sec_length = $('.sec').length
    $(window).scroll(function(){
        for(let i=1; i<=sec_length; i++){
            if($(window).scrollTop()>=$(`.sec${i}`).offset().top-10){
                $('.nav_menu').removeClass('nav_active')
                $(`.nav_menu${i}`).addClass('nav_active')
            }
        }
    })

    $(window).scroll(function(){
        for(let i=2; i<=sec_length; i++){
            if($(window).scrollTop()>=$(`.sec${i-1}`).offset().top){
                $(`.sec${i}`).css({
                    transform: 'translateY(0)',
                    opacity: '1'
                })
            }
        }
    })

    for(let i=1 ; i<=sec_length; i++)
        $(`.nav_menu${i}`).click(function(){
        $('html, body').animate({
            scrollTop: `${$(`.sec${i}`).offset().top}`
        },1000)
        })
    
        
        $(window).scroll(function(){
                if($(window).scrollTop()>=$(`.sec3`).offset().top-200){
                    $('.gauge1').css({
                        width:'80%'
                    })
                    $('.gauge2').css({
                        width:'90%'
                    })
                    $('.gauge3').css({
                        width:'90%'
                    })
                    $('.gauge4').css({
                        width:'90%'
                    })
                    $('.gauge5').css({
                        width:'90%'
                    })
                    $('.gauge6').css({
                        width:'90%'
                    })
                    $('.gauge7').css({
                        width:'90%'
                    })
                    $('.gauge8').css({
                        width:'80%'
                    })
                    $('.gauge9').css({
                        width:'90%'
                    })
                    $('.gauge10').css({
                        width:'80%'
                    })
                }
        })


})