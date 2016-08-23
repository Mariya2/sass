<?php
session_start();
$errors = [];
$data = [];
if(isset($_GET['key'])) {
	$key = $_GET['key'];
	if (!empty($_SESSION['$purchases']['key'])) {
		$data = $_SESSION['$purchases']['key'];
	}
}
if(!empty($_GET)) {
	$name = isset($_GET['purchase-name']) ? $_GET['purchase-name']: '';
	$quantity = isset($_GET['p-quantity']) ? $_GET['p-quantity']: '';
	$price = isset($_GET['p-price']) ? $_GET['p-price']: '';
}
if (empty($name) || empty($quantity) || empty($price)) {
	$errors[] = 'All fields are mandatory.';
}
if(!is_numeric($price)|| !is_numeric($quantity)){
	$errors []= 'Price and quantity must Be numeric.'; 
}
if(!$errors) {
	if(isset($_SESSION['purchases']['key'])){
		$_SESSION['purchases']['key'] = [
				'name' => $name,
				'quantity' => $quantity,
				'price' => $price
		];
	} else {
		$_SESSION['purchases'][] = [
				'name' => $name,
				'quantity' => $quantity,
				'price' => $price
		];
	}
	header('Location:index.php');
	die;
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit items</title>
<!-- <link href="assets/css/reset.css" rel="stylesheet"/>
<link href="assets/css/style.css" rel="stylesheet"/>
<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/jQuery-1.js"></script> -->
</head>
<body>
<div id="edit">
		<h1>Add purchase</h1>
		<?php foreach ($errors as $error):?>
		<p style="color: red;"><?= $error?></p>
		<?php endforeach;?>
		<form action="" method="GET">
		<div><label for="purchase-name">Name</label>
		<input type="text" id="purchase-name" name="purchase-name" 
		value="<?=htmlentities(empty($data['name'])? '': $data['name']);?>"/>
		</div>
		<div><label for="p-quantity">Quantity</label>
		<input type="text" id="p-quantity" name="p-quantity"
		value="<?=htmlentities(empty($data['quantity'])? '': $data['quantity']);?>"/>
		</div>
		<div><label for="p-price">Prise</label>
		<input type="text" id="p-price" name="p-price"
		value="<?=htmlentities(empty($data['price'])? '': $data['price']);?>"/>
		</div>
		<div><button type="submit">OK</button></div>
		</form>
	</div>
</body>
</html>
