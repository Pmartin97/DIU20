/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Darío Noxus",
				Photo: "man.png",
				Quote: "¡Luchen, sangren, no cedan ante la debilidad",
				Age: 40,
				Occupation: "Abogado",
				Family: "Casado desde hace 15 años y con 1 hijo de 10 años",
				Location: "Granada (Armilla)",
				Character: "Amable, empático, se frustra con facilidad, odia la política y las tecnologías", 
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Ir al gimnasio a ponerse fuerte", "Visitar el mayor número de países del mundo"],
				Frustrations: ["Se lleva mal con la tecnología, odia perder casos de juicios"],
				Bio: "Nació en Armilla, desde siempre quiso ser Abogado, sueño que cumplió al terminar la carrera de Derecho, buscó una casa cerca de la casa de sus padres en Armilla para poder tenerlos cerca. Su mujer actual la conoció en la carrera y tienen un hijo en común de 10 años. Le gusta viajar a distintos países y probar la comida típica de dicho país",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Próximamente tendrá varios días libres, quiere aprovecharlos para viajar a alguna ciudad para visitarla y degustar comida típica",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Anabel Martín",
				Photo: "woman.png",
				Quote: "La única persona que puede vencerme, soy yo misma.",
				Age: 29,
				Occupation: "Fisioterapéutica",
				Family: "Cuatro hermanas.",
				Location: "Villa Esquerosa",
				Character: "Adaptable, calmada y confiable.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Ayudar a todos sus pacientes a curarse", "An experience to be felt."],
				Frustrations: ["La monotonía y la repetitividad del día a día", "Que la tecnología funcione mal"],
				Bio: "Amante de la salud y la condición física, odio los estereotipos físicos. El valor de una persona viene dado por su salud, no por su estética.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
