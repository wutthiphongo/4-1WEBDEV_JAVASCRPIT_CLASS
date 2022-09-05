<!DOCTYPE html>
<html>
<body>
<?php
function hello($name){
    echo "Hello $name";
}
      //this is mycomment
      $name = "Wutthiphong";
      echo "Hello $name<br/>";
      for($i=0;$i<100;$i++){
        $r=rand(0,256);
        $g=rand(0,256);
        $b=rand(0,256);
        echo "<p style='color:rgb($r,$g,$b)'>This is loop$i</p>";
      }
      hello("Wutthiphong Onsri");
?>
</body>
</html>