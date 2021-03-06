app.controller('clashPlayer', ['$scope', 'getPlayers', '$route', '$timeout', function ($scope, getPlayers, $route, $timeout) {

  //load data for route
  getPlayers.getData(true);

  //update data when route has changed
  $scope.$watch('$routeChangeSuccess', function() {
    getPlayers.getData(true);
  });

  $timeout(function() {
  $scope.townData = getPlayers.returnedData;

  // PLAYER ROLE
  if ($scope.townData.role === 'leader') { $scope.playerRole = 'Lider'; }
  else if ($scope.townData.role === 'coLeader') { $scope.playerRole = 'Colider'; }
  else if ($scope.townData.role === 'admin') { $scope.playerRole = 'Veterano'; }
  else if ($scope.townData.role === 'member') { $scope.playerRole = 'Miembro'; }
  else { $scope.playerRole = ''; }

  // LEAGUE ICON
  if(!$scope.townData.league) {
    $scope.leagueIcon = 'images/leagues/UnrankedLeague.png';
    $scope.leagueName = 'Unranked';
  } else {
    $scope.leagueName = $scope.townData.league.name;
    if ($scope.leagueName === 'Bronze League III' || $scope.leagueName === 'Bronze League II' || $scope.leagueName === 'Bronze League I') {
      $scope.leagueIcon = 'images/leagues/BronzeLeague.png';
    } else if($scope.leagueName === 'Silver League III' || $scope.leagueName === 'Silver League II' || $scope.leagueName === 'Silver League I') {
      $scope.leagueIcon = 'images/leagues/SilverLeague.png';
    } else if($scope.leagueName === 'Gold League III' || $scope.leagueName=== 'Gold League II' || $scope.leagueName === 'Gold League I') {
      $scope.leagueIcon = 'images/leagues/GoldLeague.png';
    } else if($scope.leagueName === 'Crystal League III' || $scope.leagueName === 'Crystal League II' || $scope.leagueName === 'Crystal League I') {
      $scope.leagueIcon = 'images/leagues/CrystalLeague.png';
    } else if($scope.leagueName === 'Master League III' || $scope.leagueName === 'Master League II' || $scope.leagueName === 'Master League I') {
      $scope.leagueIcon = 'images/leagues/MasterLeague.png';
    } else if($scope.leagueName === 'Champion League III' || $scope.leagueName === 'Champion League II' || $scope.leagueName === 'Champion League I') {
      $scope.leagueIcon = 'images/leagues/ChampionLeague.png';
	} else if($scope.leagueName === 'Titan League III' || $scope.leagueName === 'Titan League II' || $scope.leagueName === 'Titan League I') {
      $scope.leagueIcon = 'images/leagues/TitanLeague.png';
	} else if($scope.leagueName === 'Legend League') { 
	$scope.leagueIcon = 'images/leagues/LegendLeague.png';
    } else { $scope.leagueIcon = 'images/leagues/UnrankedLeague.png'; };
  };

  // ALL TIME BEST ICON
  if($scope.townData.bestTrophies === '185') { $scope.bestIcon = 'images/leagues/UnrankedLeague.png'; }
  else if ($scope.townData.bestTrophies >= 400 && $scope.townData.bestTrophies < 500) { $scope.bestIcon = 'images/leagues/BronzeLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 500 && $scope.townData.bestTrophies < 600) { $scope.bestIcon = 'images/leagues/BronzeLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 600 && $scope.townData.bestTrophies < 800) { $scope.bestIcon = 'images/leagues/BronzeLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 800 && $scope.townData.bestTrophies < 1000) { $scope.bestIcon = 'images/leagues/SilverLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 1000 && $scope.townData.bestTrophies < 1200) { $scope.bestIcon = 'images/leagues/SilverLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 1200 && $scope.townData.bestTrophies < 1400) { $scope.bestIcon = 'images/leagues/SilverLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 1400 && $scope.townData.bestTrophies < 1600) { $scope.bestIcon = 'images/leagues/GoldLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 1600 && $scope.townData.bestTrophies < 1800) { $scope.bestIcon = 'images/leagues/GoldLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 1800 && $scope.townData.bestTrophies < 2000) { $scope.bestIcon = 'images/leagues/GoldLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 2000 && $scope.townData.bestTrophies < 2200) { $scope.bestIcon = 'images/leagues/CrystalLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 2200 && $scope.townData.bestTrophies < 2400) { $scope.bestIcon = 'images/leagues/CrystalLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 2400 && $scope.townData.bestTrophies < 2600) { $scope.bestIcon = 'images/leagues/CrystalLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 2600 && $scope.townData.bestTrophies < 2800) { $scope.bestIcon = 'images/leagues/MasterLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 2800 && $scope.townData.bestTrophies < 3000) { $scope.bestIcon = 'images/leagues/MasterLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 3000 && $scope.townData.bestTrophies < 3200) { $scope.bestIcon = 'images/leagues/MasterLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 3200 && $scope.townData.bestTrophies < 3500) { $scope.bestIcon = 'images/leagues/ChampionLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 3500 && $scope.townData.bestTrophies < 3800) { $scope.bestIcon = 'images/leagues/ChampionLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 3800 && $scope.townData.bestTrophies < 4100) { $scope.bestIcon = 'images/leagues/ChampionLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 4100 && $scope.townData.bestTrophies < 4400) { $scope.bestIcon = 'images/leagues/TitanLeagueIII.png'; }
  else if ($scope.townData.bestTrophies >= 4400 && $scope.townData.bestTrophies < 4700) { $scope.bestIcon = 'images/leagues/TitanLeagueII.png'; }
  else if ($scope.townData.bestTrophies >= 4700 && $scope.townData.bestTrophies < 5000) { $scope.bestIcon = 'images/leagues/TitanLeagueI.png'; }
  else if ($scope.townData.bestTrophies >= 5000) { $scope.bestIcon = 'images/leagues/LegendLeague.png'; }
  else { $scope.bestIcon = 'images/leagues/UnrankedLeague.png'; };


  // TOWNHALL ICON
  $scope.townHall = $scope.townData.townHallLevel;
  if($scope.townHall === 1) { $scope.townH = 'images/townhall/Town_Hall_1.png'; }
  else if($scope.townHall === 2) { $scope.townH = 'images/townhall/Town_Hall_2.png'; }
  else if($scope.townHall === 3) { $scope.townH = 'images/townhall/Town_Hall_3.png'; }
  else if($scope.townHall === 4) { $scope.townH = 'images/townhall/Town_Hall_4.png'; }
  else if($scope.townHall === 5) { $scope.townH = 'images/townhall/Town_Hall_5.png'; }
  else if($scope.townHall === 6) { $scope.townH = 'images/townhall/Town_Hall_6.png'; }
  else if($scope.townHall === 7) { $scope.townH = 'images/townhall/Town_Hall_7.png'; }
  else if($scope.townHall === 8) { $scope.townH = 'images/townhall/Town_Hall_8.png'; }
  else if($scope.townHall === 9) { $scope.townH = 'images/townhall/Town_Hall_9.png'; }
  else if($scope.townHall === 10) { $scope.townH = 'images/townhall/Town_Hall_10.png'; }
  else if($scope.townHall === 11) { $scope.townH = 'images/townhall/Town_Hall_11.png'; }
  else if($scope.townHall === 12) { $scope.townH = 'images/townhall/Town_Hall_12.png'; }
  else if($scope.townHall === 13) { $scope.townH = 'images/townhall/Town_Hall_13.png'; }
  else if($scope.townHall === 14) { $scope.townH = 'images/townhall/Town_Hall_14.png'; }
  else { $scope.townH = 'images/townhall/Town_Hall_1.png'; };

  // TROOPS ARRAY
  $scope.compareTroops = [
    { name: 'Barbarian', village: 'home', order: 1, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Archer', village: 'home', order: 2, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Giant', village: 'home', order: 3, level: 0, maxLevel: 0, endLevel: 10 },
	{ name: 'Goblin', village: 'home', order: 4, level: 0, maxLevel: 0, endLevel: 8 },
    { name: 'Wall Breaker', village: 'home', order: 5, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Balloon', village: 'home', order: 6, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Wizard', village: 'home', order: 7, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Healer', village: 'home', order: 8, level: 0, maxLevel: 0, endLevel: 7 },
    { name: 'Dragon', village: 'home', order: 9, level: 0, maxLevel: 0, endLevel: 8 },
    { name: 'P.E.K.K.A', village: 'home', order: 10, level: 0, maxLevel: 0, endLevel: 9 },
    { name: 'Baby Dragon', village: 'home', order: 11, level: 0, maxLevel: 0, endLevel: 8 },
    { name: 'Miner', village: 'home', order: 12, level: 0, maxLevel: 0, endLevel: 7 },
	{ name: 'Electro Dragon', village: 'home', order: 13, level: 0, maxLevel: 0, endLevel: 5 },
	{ name: 'Yeti', village: 'home', order: 14, level: 0, maxLevel: 0, endLevel: 3 },
	{ name: 'Dragon Rider', village: 'home', order: 15, level: 0, maxLevel: 0, endLevel: 3 },
    { name: 'Minion', village: 'home', order: 16, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Hog Rider', village: 'home', order: 17, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Valkyrie', village: 'home', order: 18, level: 0, maxLevel: 0, endLevel: 9 },
    { name: 'Golem', village: 'home', order: 19, level: 0, maxLevel: 0, endLevel: 10 },
    { name: 'Witch', village: 'home', order: 20, level: 0, maxLevel: 0, endLevel: 5 },
    { name: 'Lava Hound', village: 'home', order: 21, level: 0, maxLevel: 0, endLevel: 6 },
    { name: 'Bowler', village: 'home', order: 22, level: 0, maxLevel: 0, endLevel: 5 },
	{ name: 'Ice Golem', village: 'home', order: 23, level: 0, maxLevel: 0, endLevel: 6 },
	{ name: 'Headhunter', village: 'home', order: 24, level: 0, maxLevel: 0, endLevel: 3 },	
	
	
	
  ];
  
  // TROOPS ARRAY2
  $scope.compareTroops2 = [
    { name: 'Wall Wrecker', village: 'home', order: 1, level: 0, maxLevel: 0, endLevel: 4 },
    { name: 'Battle Blimp', village: 'home', order: 2, level: 0, maxLevel: 0, endLevel: 4 },
	{ name: 'Siege Barracks', village: 'home', order: 3, level: 0, maxLevel: 0, endLevel: 4 },
	{ name: 'Stone Slammer', village: 'home', order: 4, level: 0, maxLevel: 0, endLevel: 4 },
	{ name: 'Log Launcher', village: 'home', order: 5, level: 0, maxLevel: 0, endLevel: 4 }
	
  ];
  
  // MASCOTAS
  $scope.compareTroops3 = [
    { name: 'L.A.S.S.I', village: 'home', order: 24, level: 0, maxLevel: 0, endLevel: 10 },
	{ name: 'Mighty Yak', village: 'home', order: 25, level: 0, maxLevel: 0, endLevel: 10 },
	{ name: 'Electro Owl', village: 'home', order: 26, level: 0, maxLevel: 0, endLevel: 10 },
	{ name: 'Unicorn', village: 'home', order: 27, level: 0, maxLevel: 0, endLevel: 10 }
	
  ];

  // SPELLS ARRAY
  $scope.compareSpells = [
    { name: 'Lightning Spell' , level: 0, maxLevel: 0, village: 'home', order: 1, endLevel: 9 },
    { name: 'Healing Spell' , level: 0, maxLevel: 0, village: 'home', order: 2, endLevel: 8 },
    { name: 'Rage Spell' , level: 0, maxLevel: 0, village: 'home', order: 3, endLevel: 6 },
    { name: 'Jump Spell' , level: 0, maxLevel: 0, village: 'home', order: 4, endLevel: 4 },
    { name: 'Freeze Spell' , level: 0, maxLevel: 0, village: 'home', order: 5, endLevel: 7 },
    { name: 'Clone Spell' , level: 0, maxLevel: 0, village: 'home', order: 6, endLevel: 7 },
	{ name: 'Invisibility Spell' , level: 0, maxLevel: 0, village: 'home', order: 7, endLevel: 4 },
    { name: 'Poison Spell' , level: 0, maxLevel: 0, village: 'home', order: 8, endLevel: 8 },
    { name: 'Earthquake Spell' , level: 0, maxLevel: 0, village: 'home', order: 9, endLevel: 5 },
    { name: 'Haste Spell' , level: 0, maxLevel: 0, village: 'home', order: 10, endLevel: 5 },
    { name: 'Skeleton Spell' , level: 0, maxLevel: 0, village: 'home', order: 11, endLevel: 7 },
	{ name: 'Bat Spell' , level: 0, maxLevel: 0, village: 'home', order: 12, endLevel: 5 }
  ];

  // HEROES ARRAY //Royal Champion
  $scope.compareHeroes = [
    { name: 'Barbarian King', level: 0, maxLevel: 0, village: 'home', endLevel: 80 },
    { name: 'Archer Queen', level: 0, maxLevel: 0, village: 'home', endLevel: 80 },
    { name: 'Grand Warden', level: 0, maxLevel: 0, village: 'home', endLevel: 55 },
	{ name: 'Royal Champion', level: 0, maxLevel: 0, village: 'home', endLevel: 30 }
	
  ];

  // TROOPS COMPARE
  var fullList = $scope.compareTroops;
  var actualList = $scope.townData.troops;

  angular.forEach(fullList, function(filter, key) {
    angular.forEach(actualList, function(compare) {
      if (compare.name === filter.name && compare.village === 'home') {
        filter.level = compare.level || 0;
        filter.maxLevel = compare.maxLevel || 0;
      }
    });
  });

  $scope.fullTroops = fullList;
  
  // TROOPS COMPARE 2
  var fullList = $scope.compareTroops2;
  var actualList = $scope.townData.troops;

  angular.forEach(fullList, function(filter, key) {
    angular.forEach(actualList, function(compare) {
      if (compare.name === filter.name && compare.village === 'home') {
        filter.level = compare.level || 0;
        filter.maxLevel = compare.maxLevel || 0;
      }
    });
  });

  $scope.fullTroops2 = fullList;
  
  // MASCOTAS
  var fullList = $scope.compareTroops3;
  var actualList = $scope.townData.troops;

  angular.forEach(fullList, function(filter, key) {
    angular.forEach(actualList, function(compare) {
      if (compare.name === filter.name && compare.village === 'home') {
        filter.level = compare.level || 0;
        filter.maxLevel = compare.maxLevel || 0;
      }
    });
  });

  $scope.fullTroops3 = fullList;

  // SPELLS COMPARE
  var fullList = $scope.compareSpells;
  var actualList = $scope.townData.spells;

  angular.forEach(fullList, function(filter, key) {
    angular.forEach(actualList, function(compare) {
      if (compare.name === filter.name && compare.village === 'home') {
        filter.level = compare.level || 0;
        filter.maxLevel = compare.maxLevel || 0;
      }
    });
  });

  $scope.fullSpells = fullList;

  // HEROES COMPARE
  var fullList = $scope.compareHeroes;
  var actualList = $scope.townData.heroes;

  angular.forEach(fullList, function(filter, key) {
    angular.forEach(actualList, function(compare) {
      if (compare.name === filter.name && compare.village === 'home') {
        filter.level = compare.level || 0;
        filter.maxLevel = compare.maxLevel || 0;
      }
    });
  });

  $scope.fullHeroes = fullList;

}, 700);

}]);
