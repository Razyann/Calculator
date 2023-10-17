let num_7 = document.querySelector('.line2_btn_1')
let num_8 = document.querySelector('.line2_btn_2')
let num_9 = document.querySelector('.line2_btn_3')
let num_4 = document.querySelector('.line3_btn_1')
let num_5 = document.querySelector('.line3_btn_2')
let num_6 = document.querySelector('.line3_btn_3')
let num_1 = document.querySelector('.line4_btn_1')
let num_2 = document.querySelector('.line4_btn_2')
let num_3 = document.querySelector('.line4_btn_3')
let num_0 = document.querySelector('.line5_btn_1')
let num_dot = document.querySelector('.line5_btn_3')
let AC = document.querySelector('.line1_btn_1')
let plusMinus = document.querySelector('.line1_btn_2')
let delete1 = document.querySelector('.line1_btn_3')
let operant_baj = document.querySelector('.line1_btn_4')
let operant_x = document.querySelector('.line2_btn_4')
let operant_min = document.querySelector('.line3_btn_4')
let operant_plus = document.querySelector('.line4_btn_4')
let operant_havasar = document.querySelector('.line5_btn_4')
let text = document.querySelector('.text')
let sumBox = document.querySelector('.sum')

let arr = []
num_7.onclick = () =>{
    function n7(arr){
        arr.push('7')
        return sumBox.innerText = arr.join('')
    }
    console.log(n7(arr))
    num_7.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_7.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_7.style.backgroundColor = '#333333'; }, 180)
}

num_8.onclick = () =>{
    function n8(arr){
        arr.push('8')
        return sumBox.innerText = arr.join('')
    }
    console.log(n8(arr))
    num_8.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_8.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_8.style.backgroundColor = '#333333'; }, 180);
}
num_9.onclick = () =>{
    function n9(arr){
        arr.push('9')
        return sumBox.innerText = arr.join('')
    }
    console.log(n9(arr))
    num_9.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_9.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_9.style.backgroundColor = '#333333'; }, 180);
}
num_4.onclick = () =>{
    function n4(arr){
        arr.push('4')
        return sumBox.innerText = arr.join('')
    }
    console.log(n4(arr))
    num_4.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_4.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_4.style.backgroundColor = '#333333'; }, 180);
}
num_5.onclick = () =>{
    function n5(arr){
        arr.push('5')
        return sumBox.innerText = arr.join('')
    }
    console.log(n5(arr))
    num_5.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_5.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_5.style.backgroundColor = '#333333'; }, 180);
}
num_6.onclick = () =>{
    function n6(arr){
        arr.push('6')
        return sumBox.innerText = arr.join('')
    }
    console.log(n6(arr))
    num_6.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_6.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_6.style.backgroundColor = '#333333'; }, 180);
}
num_1.onclick = () =>{
    function n1(arr){
        arr.push('1')
        return sumBox.innerText = arr.join('')
    }
    console.log(n1(arr))
    num_1.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_1.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_1.style.backgroundColor = '#333333'; }, 180);
}
num_2.onclick = () =>{
    function n2(arr){
        arr.push('2')
        return sumBox.innerText = arr.join('')
    }
    console.log(n2(arr))
    num_2.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_2.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_2.style.backgroundColor = '#333333'; }, 180);
}
num_3.onclick = () =>{
    function n3(arr){
        arr.push('3')
        return sumBox.innerText = arr.join('')
    }
    console.log(n3(arr))
    num_3.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_3.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_3.style.backgroundColor = '#333333'; }, 180);
}
num_0.onclick = () =>{
    function n0(arr){
        arr.push('0')
        return sumBox.innerText = arr.join('')
    }
    console.log(n0(arr))
    num_0.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_0.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_0.style.backgroundColor = '#333333'; }, 180);
}
num_dot.onclick = () =>{
    function nDot(arr){
        arr.push('.')
        return sumBox.innerText = arr.join('')
    }
    console.log(nDot(arr))
    num_dot.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => num_dot.style.backgroundColor = '#656166', 0);
    setTimeout(() => { clearInterval(timerId); num_dot.style.backgroundColor = '#333333'; }, 180);
}
AC.onclick = () =>{
    function clearAC(arr){
        return sumBox.innerText = arr.length = 0
    }
    clearAC(arr)
    AC.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => AC.style.backgroundColor = '#F9F9F9', 0);
    setTimeout(() => { clearInterval(timerId); AC.style.backgroundColor = '#A5A5A5'; }, 180);
}
let h = 0;
plusMinus.onclick = () =>{
    let l  =+ h++
    function plusMin(arr){
        if(l % 2 == 0 && arr[0] !== '-'){
            arr.unshift('-')
            return sumBox.innerText = arr.join('')
        }else if(l % 2 !== 0 && arr[0] == '-'){
            arr.shift()
            return sumBox.innerText = arr.join('')
        }
        
    }
    console.log(plusMin(arr))
    plusMinus.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => plusMinus.style.backgroundColor = '#F9F9F9', 0);
    setTimeout(() => { clearInterval(timerId); plusMinus.style.backgroundColor = '#A5A5A5'; }, 180);
}
delete1.onclick = () =>{
    function clearC(arr){
        if(arr.length !== 0){
            arr.pop()
            return sumBox.innerText = arr.join('')
        }else if(arr.length == 0){
            return sumBox.innerText = arr.length = 0
        }
    }
    console.log(clearC(arr))
    delete1.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => delete1.style.backgroundColor = '#F9F9F9', 0);
    setTimeout(() => { clearInterval(timerId); delete1.style.backgroundColor = '#A5A5A5'; }, 180);
}
operant_baj.onclick = () =>{
    function opBaj(arr){
        if(arr == ''){
            false
        }else if( arr !== '' && arr.includes('/') < 1 && arr.includes('+') < 1 && arr.includes('*') < 1 && arr.includes('-') < 1){
            arr.push('/')
            return sumBox.innerText = arr.join('')
        }
    }
    console.log(opBaj(arr))
    operant_baj.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => operant_baj.style.backgroundColor = '#FEE1BB', 0);
    setTimeout(() => { clearInterval(timerId); operant_baj.style.backgroundColor = '#FD9D22'; }, 180);
}
operant_x.onclick = () =>{
    function opX(arr){
        if(arr == ''){
            false
        }else if(arr !== '' && arr.includes('*') < 1 && arr.includes('+') < 1 && arr.includes('-') < 1 && arr.includes('/') < 1){
            arr.push('*')
        return sumBox.innerText = arr.join('')
        }
    }
    console.log(opX(arr))
    operant_x.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => operant_x.style.backgroundColor = '#FEE1BB', 0);
    setTimeout(() => { clearInterval(timerId); operant_x.style.backgroundColor = '#FD9D22'; }, 180);
}
operant_min.onclick = () =>{
    function opMin(arr){
        if(arr == ''){
            false
        }else if(arr !== '' && arr.includes('-') < 1 && arr.includes('+') < 1 && arr.includes('*') < 1 && arr.includes('/') < 1){
            arr.push('-')
            return sumBox.innerText = arr.join('')
        }
    }
    console.log(opMin(arr))
    operant_min.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => operant_min.style.backgroundColor = '#FEE1BB', 0);
    setTimeout(() => { clearInterval(timerId); operant_min.style.backgroundColor = '#FD9D22'; }, 180);
}
operant_plus.onclick = () =>{
    function opPlus(arr){
        if(arr == '' ){
            false
        }else if(arr !== '' && arr.includes('+') < 1 && arr.includes('-') < 1 && arr.includes('*') < 1 && arr.includes('/') < 1){
            arr.push('+')
            return sumBox.innerText = arr.join('')
        }
    }
    console.log(opPlus(arr))
    operant_plus.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => operant_plus.style.backgroundColor = '#FEE1BB', 0);
    setTimeout(() => { clearInterval(timerId); operant_plus.style.backgroundColor = '#FD9D22'; }, 180);
}
operant_havasar.onclick = () =>{
    function havasar(arr){
        let newArr = []
        let num1 = parseFloat(arr.join(''))
        let x = arr.reverse()
        for(let i = 0; i < arr.length; i++){
            newArr.push(x[i])
            if(x[i] == '+' || x[i] =='-' ||x[i] == '/' ||x [i] == '*'){
                break
            }
        }
        newArr.pop()
        let num2 = parseFloat(newArr.reverse().join(''))
        if(arr.includes('+')){
            return sumBox.innerText = `${num1 + num2}`
        }else if(arr.includes('-')){
            return sumBox.innerText = `${num1 - num2}`
        }else if(arr.includes('*')){
            return sumBox.innerText = `${num1 * num2}`
        }else if(arr.includes('/')){
            return sumBox.innerText = `${Math.round(num1 / num2)}`
        }
    }
    console.log(havasar(arr))
    operant_havasar.style.transitionDuration = '0.5s'
    let timerId = setInterval(() => operant_havasar.style.backgroundColor = '#FEE1BB', 0);
    setTimeout(() => { clearInterval(timerId); operant_havasar.style.backgroundColor = '#FD9D22'; }, 180);
}

