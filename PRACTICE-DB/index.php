<?php
session_start();
$purchases = isset($_SESSION['purchases']) ? $_SESSION['purchases'] : [];
foreach($purchases as $k => $f) {
	$purchases[$k]['key'] = $k;
}
/* $purchases = [
		[
		'key' => 0,
		'name' => "molivi",
		'quantity' => "5",
		'price' => "1.05"
				],
		[
		'key' => 1,
		'name' => "ostrilki",
		'quantity' => "50",
		'price' => "0.5"
				],
]; */
$sortFieldName = isset($_GET["sort_field_name"]) ? $_GET['sort_field_name'] : 'name';
if (!in_array($sortFieldName, ['name', 'quantity', 'price'])){
	$sortFieldName = 'name';
}
$sortDirection = isset($_GET['sort_dir']) ? $_GET['sort_dir']: 'asc';
usort($purchases, function ($a, $b) 
		use($sortFieldName, $sortDirection) {
	$result = $sortDirection == "asc" ? 1 : -1;
	if($a[$sortFieldName]==$b[$sortFieldName]) {
		$result = 0;
	}
	if($b[$sortFieldName] > $a[$sortFieldName]) {
		$result = $result*-1;
	}
	return result;
});
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Item table</title>
<!-- <link href="assets/css/reset.css" rel="stylesheet"/>
<link href="assets/css/style.css" rel="stylesheet"/>
<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/jQuery-1.js"></script> -->
</head>
<body>
	<div id="purchases">
		<h1>$</h1>
		<a href="form.php"><button  id="add">Add New Item</button></a>
		<table>
			<thead>
				<tr>
					<th>No</th>
					<th><a href="?sort_fieldName=name&sort_dir=<?=$sortDirection=='asc'?'desc':'asc';?>">Name</a></th>
					<th><a href="?sort_fieldName=quantity&sort_dir=<?= $sortDirection=='asc'?'desc':'asc';?>">Quantity</a></th>
					<th><a href="?sort_fieldName=price&sort_dir=<?= $sortFieldName != 'price' || $sortDirection=='desc'?'asc':'desc';?>">Price</a></th>
					<th><span>Minus4e</span></th>
					<th><span>Moliv4e</span></th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($purchases as $key => $value):?>
				<tr>
				<td><?=$key+1?>.</td>
				<td><a href="form.php?key=<?=$purchases['key']; ?>"><?= $purchases['name']?></a></td>
				<td><?= sprinf('2f', $purchases["quantity"])?></td>
				<td>$<?= sprinf('%05.2f', $purchases["price"])?></td>
				<td></td>
				<td></td>
				</tr>
				<?php endforeach;?>
			</tbody>
		</table>
	</div>
</body>
</html>