$(document).ready(function(){
   setTable();

   //取得選取的日期
   $("#inputDate").change(function(){
        let date=$(this).val(); //yyyy-mm-dd
        let Arr=date.split("-");
        console.log(Arr);
        setMonthAndDay(Arr[1],Arr[2]); //Arr[0]=Year,Arr[1]=Month,Arr[2]=Day
        setTable();
   });

});

function setTable(){
    $("#courseTable").empty(); //jquery元件清空
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th><tr>"
    );

    //反覆產生資料列
    let topicCount=topicsArray.length;

    //計算一天有多少毫秒
    let oneDayMilliseconds=24*60*60*1000;

    for(let x=0;x<topicCount;x++){
        let thisDate=new Date(startDate.getTime()+7*x*oneDayMilliseconds); //用milliseconds推算是哪一天
        let trSpecial="<tr class='changecolor'>";
        
        if(topicsArray[x]=="不上課"){
            trSpecial="<tr style='background-color:Cornsilk' class='changecolor'>";
        }
        $("#courseTable").append(
            trSpecial+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.toLocaleDateString().slice(5)+"</td>"+
            "<td>"+topicsArray[x]+"</td>"+
            "</tr>"
        ); //每一列有場次、預計日期、主題
    }
}