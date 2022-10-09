        var imglist=document.querySelector('.header-cartoon-imglist');
        var aup=document.querySelector('.header-cartoon-up');
        var adown=document.querySelector('.header-cartoon-down');
        var ali=document.querySelectorAll('.header-cartoon-lilist li');
        var li=document.querySelector('.header-cartoon-lilist');
        var  left=0;
        var timer;
        var n;
        run();
       function run(){
       if(left<=-4576){
        left=0;
       }
       if(left%1144==0)
       {
        n=1200;
       }
       else{
        n=8;
       }
      
       var x=Math.floor(-left/1144);
       lilocat(x);
        imglist.style.marginLeft=left + 'px';
         left=left-8;
        timer=setTimeout(run,n);
       }
       function locat(x)
       {
        let a=-(x*1144);
        imglist.style.marginLeft=a + 'px';
        left=a;
        console.log(left);
       }
       aup.onclick=function()
       {
        // alert("1");
            let gotoup=Math.floor(-left/1144)-1;
            if(gotoup==-1)
            {
                gotoup=3;
            }
            locat(gotoup);
       } 
       adown.onclick=function()
       {
        // alert('2');
            let gotodown=Math.floor(-left/1144)+1;
            if(gotodown==4)
            {
                gotodown=0;
            }
            locat(gotodown);
        } 
        function lilocat(x)
        {
            for(let i=0;i<ali.length;i++)
            {
            ali[i].style.backgroundColor='';
            } 
            if(x<ali.length)
            {
                ali[x].style.backgroundColor='white';
            } 
        }
        li.onclick=function(){
            var tar=event.srcElement;
            // var tar=event.target;
            // var round=tar.innerHTML-1;
            var round=tar.value-1;
            lilocat(round);
            locat(round);
        }
        imglist.onmouseout=function(){
           run();
        }
        imglist.onmouseover=function(){
            clearTimeout(timer);
        }