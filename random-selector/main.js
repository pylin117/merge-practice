/*
window.onload=function(){
    //this.document.write("Hello JavaScript!");
};*/

//$ jquery識別符號
$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem=$("#choices li").length;
        let randomChildNumber=Math.floor(Math.random()*numberOfListItem); //Math.floor向下整數
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        //$("#img").attr("src","img"+randomChildNumber+".jpg"); //更改圖片
        $("#random-pic").attr("src",pictures[randomChildNumber]);
    });
});