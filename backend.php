<!-- <?php


// if(isset($_POST['ad']) && isset($_POST['eposta'])){
//             $ad = $_POST['ad'];
//             $email = $_POST['eposta'];

    
//         $data = "Ad: " . $ad . "\n" . "Email: " . $email . "\n";

//         $file = fopen("userinfo.txt", "a");
//         if ($file) {
//             fwrite($file, $data);
//             fclose($file);
//             echo "Dosyaya yazma başarılı: " . $data;
//         } else {
//             echo "Dosyaya yazma başarısız";
//         }
// }else{
//     echo "hata var";
//     echo $_POST["ad"];
//     echo $_POST["eposta"];
// }


?> -->


<?php
if(isset($_POST['ad']) && isset($_POST['eposta'])){
    $ad = $_POST['ad'];
    $email = $_POST['eposta'];

    if(!empty($ad) && !empty($email)){
        $data = "Ad: " . $ad . "\n" . "Email: " . $email . "\n";

        $file = fopen("userinfo.txt", "a");
        if ($file) {
            fwrite($file, $data);
            fclose($file);
            echo "Dosyaya yazma başarılı: " . $data;
        } else {
            echo "Dosyaya yazma başarısız";
        }
    } else {
        echo "Form verileri eksik veya geçersiz!";
    }
} else {
    echo "Form verileri eksik!";
}
?>

