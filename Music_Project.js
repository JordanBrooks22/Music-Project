"use strict";

$(document).ready(musicRequest)

function musicRequest() {
     $.ajax({
            url: "http://www.devcodecampmusiclibrary.com/api/music", 
            type: "GET",
            dataType: "json",
             success: function(result){
                 dataDisplay(result);
      
        }});
}
musicRequest();

function dataDisplay(data){
    console.log(data);
    for(let i = 0; i < data.length; i++){
        console.log(data[i].title)
        $("#musicBody").append(
           " <tr> " +
                   " <td>"+data[i].title+"</td>" + 
                   " <td>"+data[i].album+"</td>" + 
                   " <td>"+data[i].artist+"</td>" +
                   " <td>"+data[i].genre+"</td>" + 
                   " <td>"+data[i].releaseDate+"</td>" + 
                " </tr>"
        );
    }
}



