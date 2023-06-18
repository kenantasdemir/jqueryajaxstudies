
//GET request
$(document).ready(function(){
    $("button#readdata").click(function(){
        $("div#box").load("demo.txt",function(response,status,xhr){
            if(status==="success"){
                console.log("istek başarılı, gelen veri : " + response)
            }else{
                console.log("işlem başarısız! hata: " + xhr.status + " " + xhr.statusText)
            }
        })
    })
})

//POST request
$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();

        var ad = $("#ad").val();
        var eposta = $("#eposta").val();

        console.log("Ad : " + ad);
        console.log("Email : " + eposta);

        var data = {
            ad: ad,
            eposta: eposta
        };

        $.ajax({
            url: "/backend.php",
            type: "POST",
            data: data,
            success: function(res){
                console.log("Dosyaya yazma başarılı");
            },
            error: function(error){
                console.log("Dosyaya yazma başarısız");
            }
        });
    });
});

//POST request alternatif
$(document).ready(function(){
    $("button#sendbutton").click(function(){
        $.post("backendurl",{
            name:"Kenan",
            age:24
        },function(data){
            console.log(data)
        }).fail(function(error){
            console.log(error)
        })
    })
})

//GET request alternatif
$(document).ready(function(){
    $("button#readdatafromnet").click(function(){
       $.get("https://random-data-api.com/api/v2/users/",function(data){
        $("div#secondbox").text(data.first_name)
       }).fail(function(err){
        console.log(err)
        $("div#secondbox").text(err.status + " not found error")
       })
    })
})

//PUT request
$(document).ready(function(){
    $("button#updatedata").click(function(){
        $.ajax({
            url:"your-api-url",
            type:"PUT",
            data:{
                ad:$("#ad").val(),
                eposta:$("#eposta").val()
            },
            success:function(data){
                console.log(data)
            },
            error:function(error){
                console.log(error)
            }
        })
    })
})

//DELETE request
$(document).ready(function(){
    $("button#delete").click(function(){
        $.ajax({
            url:"/api/users/2",
            type:"DELETE",
            success:function(data){
                console.log("silme işlemi başarılı : " + data)
            },
            error:function(error){
                console.log("silme işlemi başarısız : " + error)
            }
        })
    })
})
