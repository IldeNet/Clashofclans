<?php
  ####################################################################
  # EDIT CLASH OF CLANS TOKEN
  # ------------------------------------------------------------------
  # Get your API key from the following website.
  # https://developer.clashofclans.com/
  ####################################################################
  include "../config/variables";
//  $token = Global $apisc;
  $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmNGY2OWFjLWE5YWMtNDVhOS1hNzRiLWI4NWM1MzczZjU3MSIsImlhdCI6MTYzMDM0MDc3Niwic3ViIjoiZGV2ZWxvcGVyLzQ5NzIyODY1LWEwMGMtYjU2ZC04NjhhLWZhYjUzZGMyNjgwNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4NS4xOTkuMTA5LjE1MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.QWN7FqJJS2Z3NWSWD5WE2NNwtnRgqbN7Zhv2el5aup6M2priO5Sux5yQilc9waUnI2hAOA-Ryc-INKrgl1egTA';

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