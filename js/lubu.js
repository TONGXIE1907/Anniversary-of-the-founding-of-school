
        j=1
        const img=document.querySelector('.qqq ul img')
        const e=document.querySelectorAll('.qqq ol li')
        let n= setInterval(function(){
                j++
            if(j>5){
                j=1
            }
            document.querySelector('.car .active').classList.remove('active')
            document.querySelector(`.car ol li:nth-child(${j})`).classList.add('active')
            img.src=`./images/0${j}.png`

            },1500)
        img.addEventListener('mouseenter',function(){clearInterval(n)})
        img.addEventListener('mouseleave',function(){
            clearInterval(n)
            n= setInterval(function(){
                j++
            if(j>=6){
                j=1
            }
            img.src=`./images/0${j}.png`
            document.querySelector('.car .active').classList.remove('active')
            document.querySelector(`.car ol li:nth-child(${j})`).classList.add('active')
            },1000)
        })
        for (let i=0;i<=e.length;i++){
            e[i].addEventListener('mouseenter',function(){
                document.querySelector('.qqq ol .active').classList.remove('active')
                this.classList.add('active')
                img.src=`./images/0${i+1}.png`
                clearInterval(n)
                j=i
            })
        }
 
