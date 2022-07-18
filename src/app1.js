import './app1.css'
import $ from 'jquery'

const $button1=$('#add1') 
const $button2=$('#minus1') 
const $button3=$('#mul2') 
const $button4=$('#divide2') 
const $number=$('#number')
const n=localStorage.getItem("n")
$number.text(n||100)

$button1.on('click',()=>{
    let n=parseInt($number.text());
    /*text() 方法设置或返回被选元素的文本内容。
当该方法用于返回内容时，则返回所有匹配元素的文本内容（会删除 HTML 标记）。
当该方法用于设置内容时，则重写所有匹配元素的内容。*/
    n+=1;
    localStorage.setItem('n',n)
    $number.text(n);
})

$button2.on('click',()=>{
    let n=parseInt($number.text());
    n-=1;
    localStorage.setItem('n',n)
    $number.text(n);
})
$button3.on('click',()=>{
    let n=parseInt($number.text());
    n*=2;
    localStorage.setItem('n',n)
    $number.text(n);
})
$button4.on('click',()=>{
    let n=parseInt($number.text());
    n/=2;
    localStorage.setItem('n',n)
    $number.text(n);
})