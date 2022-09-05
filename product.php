<!DOCTYPE html>
<html>
    <head>
        <h1>LOGITECH G Product</h1>
    </head>
    <body>
        
        <?php
           $product = [
            [
            "id" => 1, "name"=> "Logitech-G502 X Lightspeed", "price"=> 4290,
            "img"=> "pic50/1-g502x-lightspeed-gallery-1-black.webp"
            ],
           [
            "id"=> 2, "name"=> "Logitech-G502 X PLUS", "price"=> 5290,
            "img"=> "pic50/2-g502x-plus-gallery-1-black.webp"
           ],
           [
            "id"=> 3, "name"=> "Logitech-G502 X", "price"=> 2390,
            "img"=> "pic50/3-g502x-corded-gallery-1-black.webp"
           ],
           [
            "id"=> 4, "name"=> "Logitech-G705", "price"=> 3290,
            "img"=> "pic50/4-g705-gallery-1.webp"
           ],
           [
            "id"=> 5, "name"=> "Logitech-G303 Should Edition", "price"=> 4290,
            "img"=> "pic50/5-shroud-g303-gallery-1.webp"
           ],
           [
            "id"=> 6, "name"=> "Logitech-G303", "price"=> 4290,
            "img"=> "pic50/6-shroud-g303-gallery-1.webp"
           ],
           [
            "id"=> 7, "name"=> "Logitech-GPRO League of Legend Edition", "price"=> 3990,
            "img"=> "pic50/7-league-of-legends-pro-wireless-gaming-mouse-gallery-1.webp"
           ],
           [
            "id"=> 8, "name"=> "Logitech-GPRO X Superlight", "price"=> 5290,
            "img"=> "pic50/8-pro-x-superlight-black-gallery-1.webp"
           ],
           [
            "id"=> 9, "name"=> "Logitech-G102", "price"=> 690,
            "img"=> "pic50/9-g203-black-gallery-1.webp"
           ],
           [
            "id"=> 10, "name"=> "Logitech-G604 Lightspeed", "price"=> 2590,
            "img"=> "pic50/10-g604-gallery-1.webp"
           ],
        ];
        ?>

        <table width=1000, border=1><tr align=center bgcolor=#F4F4F4>
                <th><h1>ID</h1></th>
                <th><h1>Name</h1></th>
                <th><h1>Price</h1></th>
                <th><h1>Image</h1></th>
                </tr>

        <?php foreach($product as $value){
             $r = rand(0,256);
             $g = rand(0,256);
             $b = rand(0,256);
             $Style = " style='color:rgb($r,$g,$b)' ";
            ?>
            <tr align=center bgcolor=#F4F4F4>  
                <td <?=$Style?>><?=$value['id']?></td>
                <td <?=$Style?>><?=$value['name']?></td>
                <td <?=$Style?>><?=$value['price']?></td>
                <td <?=$Style?>><img width=400 height=400 src = <?=$value['img']?> ></td>
                </tr>
        <?php } ?>

        
    </body>
    
</html> 