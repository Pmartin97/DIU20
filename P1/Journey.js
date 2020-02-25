/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Darío Noxus",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Como amante gastronómico, desea descubrir nuevos platos junto a alguien",
                touch1: "Agenda",
                feel1: "3",
                con1: "Como conductor de camiones, tiene pocos das libres, debe comprobar cuántos tiene ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Hay pocas fechas que puede elegir y los precios son algo elevados",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide comer en un restaurante japonés en Granada",
                touch3: "Ordenador",
                feel3: "2",
                con3: "En el centro de la ciudad es muy complicado aparcar y hay mucho tráfico",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan párkings a bajo coste cerca del establecimiento",
                touch4: "Ordenador",
                feel4: "5",
                con4: "Preocupa el tráfico y que el párking no esté lleno al llegar",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Los domingos a mediodía no hay tanto tráfico y puede aparcar fácil",
                touch5: "móvil (google maps)",
                feel5: "4",
                con5: "Debe reservar rápido antes de que se agoten las plazas",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar mesa, qué ganas de comer sushi!",
                touch6: "Ordenador",
                feel6: "5",
                con6: "En caso de cancelación y reembolso, debe hacerse 24h antes de la cena.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Anabel Martín",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar una comida especial junto a su pareja para el día de los enamorados",
                touch1: "Agenda",
                feel1: "5",
                con1: "Tiene que ser para el día 14 de febrero.",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet una página de cenas especiales",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Tiene que escoger de un montón de sitios recomendados por el buscador.",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Entra al sitio web 'eatwith' para buscar una experiencia culinaria nueva.",
                touch3: "Ordenador",
                feel3: "2",
                con3: "La página responde muy lento.",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "No encuentra ninguna oferta libre",
                touch4: "Ordenador (webapp)",
                feel4: "2",
                con4: "Piensa que ha perdido el tiempo",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Busca otro sitio web donde realizar la reserva.",
                touch5: "Ordenador (webapp)",
                feel5: "3",
                con5: "En varios sitios no quedan reservas disponibles",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar pero no para la que esperaba.",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que conformarse por haber encontrado una reserva.",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



