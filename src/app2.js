import './app2.css'
import $ from "jQuery"

const $tabBar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    const $li=$(e.currentTarget);
    $li
     .addClass("selected")
     .siblings()
     .removeClass("selected")
    const index=$li.index()
     $tabContent
     .children()
     .eq(index)
     .addClass('active')/*样式与行为分离,不直接用css,
     通过添加一个类来进行css样式的添加*/
     .siblings().
     removeClass('active')
    //通过监听子元素的点击事件来监听父元素
});
$tabBar.children().eq(0).trigger('click')