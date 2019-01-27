<?php
$arr = array();

$product = array();
$product["id"] = 1;
$product["name"] = "water gun";
$product["description"] = "water gun desc";
$product["points"] = "5";
$product["image_url"] = "https://i.stack.imgur.com/FImru.png?s=128&g=1";
$product["source_url"] = "http://chase.ph/product/123.aspx";
$product["price"] = "200";

$arr[] = $product;
echo json_encode($arr);
die;