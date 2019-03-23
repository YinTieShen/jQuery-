var ul = $('.wrapUl');
var ulH = parseInt(ul.css('height'));
var ulW = parseInt(ul.css('width'));
var liH = ulH/5;
var liW = ulW/4

createDom();
function createDom(){
    for(var i=0;i<5;i++){
        for(var j=0;j<4;j++){
           $('<li><div class="box" ><img src="" alt=""></div></li>')
               .css({
                   'width':liW+'px',
                   'height':liH+'px', 
                   'left':liW*j,
                   'top':liH*i,
                   'transform':'scale(0.9)'      
                //    +'rotate('+(Math.random()*40-20)+'deg)' 消除注释增加图片旋转效果,

               })
               .find('img').attr('src','img/pic'+(4*i+j)+'.jpg')
               .end()
               .appendTo(ul);
           
       }
   }
   bindEvent();
}
function bindEvent(){
    var flag = true;
    $('li').on('click',function(){
        console.log("asd");
        if(flag){
            var bgImg = $(this).find('img').attr('src');
            var bgLeft = 0;
            var bgTop = 0;
            $('li').each(function(index){
                var $this = $(this);
                $this.delay(10*index).animate({'opacity':0},200,function(){
                    $this.css('transform','scale(1)')
                    $this.find(".box").css({
                        'transform':'scale(1)'
                    })
                    $this.find('img').attr('src',bgImg)
                        .css({
                            'position':'absolute',
                            'width':ulW+'px',
                            'height':ulH+'px',
                            'left':-bgLeft,
                            'top':-bgTop
                        })
                    bgLeft += liW;
                    if(bgLeft >= ulW){
                        bgTop += liH;
                        bgLeft = 0;
                    } 
                    $(this).animate({'opacity':1},200);   
                })

            })
            flag = false;
        }else{
            flag = true;
            $('li').each(function(index){
                var $this = $(this);
                var j = index % 5;
                var i = Math.floor(index/5);
                $this.delay(10*index).animate({'opacity':0},200,function(){
                    $this.find('img').attr('src','img/pic'+index+'.jpg')
                        .css({
                            'position':'absolute',
                            'width':'100%',
                            'height':'100%',
                            'left':0,
                            'top':0
                        });
                    $this.css('transform','scale(0.9)')
                    $this.find(".box").css({
                        'transform':'scale(0.9)'
                    })
                })
                $(this).animate({'opacity':1},200);       
            })  
        }
    })
    
}