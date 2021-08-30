<?php
  ####################################################################
  # EDIT CLASH OF CLANS TOKEN
  # ------------------------------------------------------------------
  # Get your API key from the following website.
  # https://developer.clashofclans.com/
  ####################################################################
  
  $token = 'key'; 

  ####################################################################
  # DO NOT MODIFY ANYTHING BELOW THIS COMMENT
  ####################################################################
  $playertag = $_GET['player'];
  header('Content-Type: text/html; charset=UTF-8');

  

  if ($playertag) {
    $url = "https://api.clashofclans.com/v1/players/" . urlencode($playertag);
  } else {
  $mitag = "#GYRVR89R";
  $urljugador = "https://api.clashofclans.com/v1/players/" . urlencode($mitag);
  $mich = curl_init($urljugador);

  $headr1 = array();
  $headr1[] = "Accept: application/json";
  $headr1[] = "authorization: Bearer ".$token;

  curl_setopt($mich, CURLOPT_HTTPHEADER, $headr1);
  curl_setopt($mich, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($mich, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($mich, CURLOPT_RETURNTRANSFER, 1);
  
  $resultado = curl_exec($mich);
  curl_close($mich);
  $data = json_decode($resultado, true);  
  $clantag = $data["clan"]["tag"];
    $url = "https://api.clashofclans.com/v1/clans/" . urlencode($clantag);
  }

  $ch = curl_init($url);

  $headr = array();
  $headr[] = "Accept: application/json";
  $headr[] = "authorization: Bearer ".$token;

  curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  $res = curl_exec($ch);
  // $res1 = str_replace("Bigger Coffers","cofres",$res);
  $trans = array("Bigger Coffers" => "Almacenes más grandes", 
  "Upgrade a Gold Storage to level 10" => "Mejora un almacen de oro al nivel 10",
  "Get those Goblins!" => "A por esos Duendes!",
  "Get those other Goblins!" => "A por esos Duendes!",
  "Win 150 Stars on the Campaign Map" => "Gana 150 estrellas en el modo un jugador",
  "Bigger & Better" => "Más grande y mejor",
  "Upgrade Town Hall to level 8" => "Mejora el ayuntamiento a nivel 8",
  "Nice and Tidy" => "Aldea bonita y despejada",
  "Remove 500 obstacles (trees, rocks, bushes)" => "Elimina 500 obstáculos(árboles, rocas, arbustos...)",
  "Release the Beasts" => "Libera las bestias",
  "Unlock Dragon in the Barracks" => "Desbloquea esta unidad en el cuartel: Dragón",
  "Gold Grab" => "Ladrón de oro",
  "Steal 100000000 gold" => "Roba 100.000.000 de oro",
  "Elixir Escapade" => "Ladrón de elixir",
  "Steal 100000000 elixir" => "Roba 100.000.000 de elixir",
  "Sweet Victory!" => "Dulce Victoria!",
  "Achieve a total of 1250 trophies in Multiplayer battles" => "Consigue un total de 1250 trofeos en batallas multijugador",
  "Empire Builder" => "Levantador de imperios",
  "Upgrade Clan Castle to level" => "Mejora el castillo del clan a nivel",
  "Wall Buster" => "Revientamuros",
  "Destroy 2000 Walls in Multiplayer battles" => "Destruye 2000 muros en batallas multiplayer",
  "Humiliator" => "Humillador",
  "Destroy 2000 Town Halls in Multiplayer battles" => "Destruye 2000 ayuntamientos en batallas multiplayer",
  "Union Buster" => "Antigremios",
  "Destroy 2500 Builder's Huts in Multiplayer battles" => "Destruye 2500 chozas de constructor en batallas multijugador",
  "Conqueror" => "Conquistador",
  "Win 5000 Multiplayer battles" => "Gana 5000 batallas multiplayer",
  "Unbreakable" => "Invencible",
  "Successfully defend against 5000 attacks" => "Defiéndete con éxito de 5000 ataques",
  "Friend in Need" => "Amigos en apuros",
  "Donate 25000 Clan Castle capacity worth of reinforcements" => "Dona 25000 tropas de refuerzo a tus aliados a traves del castillo del clan",
  "Mortar Mauler" => "Machacamorteros",
  "Destroy 5000 Mortars in Multiplayer battles" => "Destruye 5000 morteros en batallas multijugador",
  "Heroic Heist" => "Asalto Heroico",
  "Steal 1000000 Dark Elixir" => "Roba 1000000 de elixir oscuro",
  "League All-Star" => "Liga de las estrellas",
  "Become a Champion!" => "Entra en liga de campeones",
  "X-Bow Exterminator" => "Exterminador de ballestas",
  "Destroy 2500 X-Bows in Multiplayer battles" => "Destruye 2500 ballestas en batallas multijugador",
  "Firefighter" => "Tumbatorres",
  "Destroy 5000 Inferno Towers in Multiplayer battles" => "Destruye 5000 torres infernales en batallas multijugador",
  "War Hero" => "Héroe de guerra",
  "Score 1000 Stars for your clan in Clan War battles" => "Obtén 1000 estrellas para tu clan en batallas de guerras de clanes",
  "Treasurer" => "Tesorero",
  "Collect 100000000 gold from the Treasury" => "Recoge 100.000.000 de oro de la tesorería",
  "Anti-Artillery" => "Antiartillería",
  "Destroy 2000 Eagle Artilleries in Multiplayer battles" => "Destruye 2000 aguilas de artillería en batallas multiplayer",
  "Sharing is caring" => "Compartir es vivir",
  "Donate 10000 spell storage capacity worth of spells" => "Dona 10000 capacidad de almacenaje de hechizos",
  "Keep your village safe" => "Mantén a salvo tu aldea",
  "Connect your account to a social network for safe keeping." => "Conectar con Google Play",
  "Games Champion" => "Campeón de los juegos",
  "Earn 50000 points in Clan Games" => "Gana 50000 puntos en los juegos del clan",
  "Master Engineering" => "Ingeniería experta",
  "Upgrade Builder Hall to level 8" => "Mejora el taller del constructor a nivel 8",
  "Next Generation Model" => "Último modelo",
  "Unlock Super P.E.K.K.A in the Builder Barracks" => "Desbloquea Pekka en cuartel del constructor",
  "Un-Build It" => "Deconstrucción",
  "Destroy 2000 Builder Halls in Versus battles" => "Destruye 2000 talleres de constructores en enfrentamientos",
  "Champion Builder" => "Campeón de constructores",
  "Achieve a total of 3000 trophies in Versus battles" => "Consigue un total de 3000 trofeos en enfrentamientos",
  "High Gear" => "Perfección",
  "Gear Up 3 buildings using the Master Builder" => "Perfecciona 3 edificios usando al constructor maestro",
  "Hidden Treasures" => "Tesoros ocultos",
  "Rebuild Battle Machine" => "Reconstruye tu maquina bélica",
  "Highest Gold Storage level" => "Nivel mas alto de almacen de oro",
  "Stars in Campaign Map" => "Estrellas en el modo un jugador",
  "Current Town Hall level" => "Nivel de ayuntamiento actual",
  "Total obstacles removed" => "Obstáculos eliminados",
  "Total Gold looted" => "Oro robado",
  "Total Elixir looted" => "Elixir robado",
  "Trophy record" => "Record trofeos",
  "Current Clan Castle level" => "Nivel actual del castillo del clan",
  "Total walls destroyed" => "Muros destruidos",
  "Total Town Halls destroyed" => "Ayuntamientos destruidos",
  "Total Builder's Huts destroyed" => "Chozas constructor destruidas",
  "Total multiplayer battles won" => "Batallas multiplayer ganadas",
  "Total capacity donated" => "Tropas donadas",
  "Total Mortars destroyed" => "Morteros destruidos",
  "Total Dark Elixir looted" => "Elixir oscuro robado",
  "Total X-Bows destroyed" => "Ballestas destruidas",
  "Total gold collected in Clan War bonuses" => "Oro recogido en bonus de guerra",
  "Completed!" => "Conseguido",
  "Current Builder Hall level" => "Nivel del taller de constructor",
  "Versus Trophy record" => "Record de trofeos en enfrentamientos",
  "Total buildings geared up" => "Edificios perfeccionados",
  "Dragon Slayer" => "Matadragones",
  "Slay the Giant Dragon" => "Acaba con el dragón gigante",
  "War League Legend" => "Leyenda de la liga de guerra",
  "Score 250 Stars for your clan in War League battles	" => "Obtén 250 estrellas para tu clan",
  "Connect your account to Supercell ID for safe keeping" => "Conecta tu cuenta con Supercell ID",
  "Well Seasoned" => "Actitud desafiante",
  "Earn 50000 points in Season Challenges" => "Gana 5000 puntos en los desafios de temporada",
  "Shattered and Scattered" => "Catapulta a la victoria",
  "Destroy 4000 Scattershots in Multiplayer battles" => "Destruye 400 catapultas",
  "Total Eagle Artilleries destroyed" => "Alguilas de artillería destruidas",
  "Total spell capacity donated" => "Hechizos donados", 
  "Total Inferno Towers destroyed" => "Torres Inferno destruidas", 
  "Earn 100000 points in Clan Games" => "Obtén 100000 puntos en juegos del clan", 
  "Total Clan Games points" => "Puntos en juegos del clan", 
  "Score 250 Stars for your clan in War League battles" => "Obtén 250 estrellas para tu clan en ligas de clanes", 
  "Total Stars scored for clan in War League battles" => "Estrellas de liga de clanes", 
  "Total Stars scored for clan in Clan War battles" => "Estrellas de guerras de clanes",
  "Always" => "Siempre",
  "moreThanOncePerWeek" => "Más de una vez por semana");
  $res = strtr($res,$trans); 
  echo json_encode(json_decode($res, true), JSON_PRETTY_PRINT);
  curl_close($ch);

?>
