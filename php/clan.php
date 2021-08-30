<?php
  ####################################################################
  # EDIT CLASH OF CLANS TOKEN
  # ------------------------------------------------------------------
  # Get your API key from the following website.
  # https://developer.clashofclans.com/
  ####################################################################
  include "../config/variables";
//  $token = Global $apisc;
  $token = 'key';

  ####################################################################
  # EDIT CLASH OF CLANS CLAN TAG
  # ------------------------------------------------------------------
  # Input your Clan tag #, don't forget the # sign.
  ####################################################################
  $mitag = "#GYRVR89R";
  $urljugador = "https://api.clashofclans.com/v1/players/" . urlencode($mitag);
  $mich = curl_init($urljugador);

  $headr = array();
  $headr[] = "Accept: application/json";
  $headr[] = "authorization: Bearer ".$token;

  curl_setopt($mich, CURLOPT_HTTPHEADER, $headr);
  curl_setopt($mich, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($mich, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($mich, CURLOPT_RETURNTRANSFER, 1);

  $resultado = curl_exec($mich);
  $data = json_decode($resultado, true);
  
  $clantag = $data["clan"]["tag"];


  ####################################################################
  # DO NOT MODIFY ANYTHING BELOW THIS COMMENT
  ####################################################################


  header('Content-Type: text/html; charset=UTF-8');

    $url = "https://api.clashofclans.com/v1/clans/" . urlencode($clantag);

  $ch = curl_init($url);

  $headr = array();
  $headr[] = "Accept: application/json";
  $headr[] = "authorization: Bearer ".$token;

  curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  $res = curl_exec($ch);
  echo json_encode(json_decode($res, true), JSON_PRETTY_PRINT);
  curl_close($ch);