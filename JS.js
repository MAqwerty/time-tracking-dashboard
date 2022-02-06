window.onload = function () {

let Monthly = document.getElementById('Monthly')
let Weekly = document.getElementById('Weekly')
let Daily = document.getElementById('Daily')
let floating = document.querySelectorAll('.floating')
let alloption = [Monthly,Weekly,Daily]
let past = document.querySelectorAll('.past')
let Xrand = document.querySelectorAll('.random')


    for (let i=0 ; i<alloption.length ; i++){
            alloption[i].addEventListener('click',function(){
            
                    Monthly.classList.remove('chech')
                    Weekly.classList.remove('chech')
                    Daily.classList.remove('chech')
                    alloption[i].classList.add('chech')
                        

            })
        
    }    

// .................................random num..............................    // 

    let MonthlyTIMEs = [];
    let WeeklyTIMEs = [];
    let DailyTIMEs = [];

    while(MonthlyTIMEs.length < 12){
        let num = Math.floor(Math.random() * 200);
        MonthlyTIMEs.push(num);
    
    }
    console.log(MonthlyTIMEs);
    
    

    while(WeeklyTIMEs.length < 12){
        let num = Math.floor(Math.random() * 45);
        WeeklyTIMEs.push(num);
    
    }
    console.log(WeeklyTIMEs);
    
    
    
    while(DailyTIMEs.length < 12){
        let num = Math.floor(Math.random() * 9);
        DailyTIMEs.push(num);
    
    }
    console.log(DailyTIMEs);
    
// ...............................................................    // 

    function removeMOVE () {
        floating.forEach((index)=>{ 
            index.style.animation = "none"
        })
    }
    setTimeout(removeMOVE,750)

   
    Monthly.addEventListener('click',function(){
        for(let i=0 ; i< past.length ; i++){
        past[i].innerHTML = "Month"
        }
        for(let i=0 ; i<Xrand.length ; i++){
            function animateValue(id, start, end, duration) {
                if (start === end) return;
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() {
                    current += increment;   
                    Xrand[i].innerHTML = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, stepTime);
            }
            animateValue("value", 0, MonthlyTIMEs[i] , 750);
        } 

        floating.forEach((index)=>{ 
        index.style.animation = 'animationCARD ease-in-out 0.9s'
        setTimeout(removeMOVE,750)
        })
    })


    Weekly.addEventListener('click',function(){
            for(let i=0 ; i< past.length ; i++){
            past[i].innerHTML = "Week" 
            }
            for(let i=0 ; i<Xrand.length ; i++){
                function animateValue(id, start, end, duration) {
                    if (start === end) return;
                    var range = end - start;
                    var current = start;
                    var increment = end > start? 1 : -1;
                    var stepTime = Math.abs(Math.floor(duration / range));
                    var obj = document.getElementById(id);
                    var timer = setInterval(function() {
                        current += increment;   
                        Xrand[i].innerHTML = current;
                        if (current == end) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                }
                animateValue("value", 0, WeeklyTIMEs[i] , 750);
            } 
            
            floating.forEach((index)=>{ 
                index.style.animation = 'animationCARD ease-in-out 0.9s'
                setTimeout(removeMOVE,750)
            })
        })


    Daily.addEventListener('click',function(){
        for(let i=0 ; i< past.length ; i++){
            past[i].innerHTML = "Day"     
        }
        for(let i=0 ; i<Xrand.length ; i++){
            function animateValue(id, start, end, duration) {
                if (start === end) return;
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() {
                    current += increment;   
                    Xrand[i].innerHTML = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, stepTime);
            }
            animateValue("value", 0, DailyTIMEs[i] , 750);
        }  
           
            floating.forEach((index)=>{ 
                index.style.animation = 'animationCARD ease-in-out 0.9s'
                setTimeout(removeMOVE,750)
            })
        })


//...................................default......................................//
        for(let i=0 ; i< past.length ; i++){
            past[i].innerHTML = "Day"     
        }
        for(let i=0 ; i<Xrand.length ; i++){
            function animateValue(id, start, end, duration) {
                if (start === end) return;
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() {
                    current += increment;   
                    Xrand[i].innerHTML = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, stepTime);
            }
            animateValue("value", 0, DailyTIMEs[i] , 750);
        }  

            floating.forEach((index)=>{ 
                index.style.animation = 'animationCARD ease-in-out 0.9s'
                setTimeout(removeMOVE,750)
            })

}