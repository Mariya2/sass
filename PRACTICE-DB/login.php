<?php
session_start(); 
const NAME = "mmm";
const PASS = "pass";
$errors=[];
if(!empty($_POST)){
$nameLog = isset($_POST['login']) ? $_POST['login'] : '';
$passLog = isset($_POST['pass']) ? $_POST['pass'] : '';
/* print_r(json_decode($name_log, $pass_log)); */
/* if ( empty($name_log) || empty($pass_log)){
	$errors []= "All fields are mandatory.";
} */
}
if(!$errors){
	if (NAME == $_POST['login'] && PASS == $_POST["pass"]){
		echo json_encode("secsses");
	} else {
	    echo("name or password does not exist.");
	   }
} 
