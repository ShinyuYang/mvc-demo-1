import $ from "jQuery"
import './app3.css'

const $square =$('#app3 .square')
const localKey='app3.active'
const active=localStorage.getItem(localKey)==='yes'//把字符串变成布尔值

if(active){//这里两个active要区分
    $square.addClass('active')
}else{
    $square.removeClass('active')
}
//可以换成$square.toggleClass('active',active)

$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem(localKey,'no')//setItem只支持字符串
    }else{
        $square.addClass('active')
        localStorage.setItem('app3.active','yes')
    }
    })