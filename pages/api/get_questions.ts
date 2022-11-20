import type { NextApiRequest, NextApiResponse } from "next";
import {
	DependencyCondition,
	DependencyType,
	QuestionDetails,
	Questions,
	QuestionType,
} from "../../data/questions";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Questions>
) {
	// List all the questions for the survey as an array and set the dependencies, conditions, types, etc.
	const questionList: Questions = {
		number: 11,
		questions: [
			{
				categoryId: 0,
				category: "Qui sommes-nous ?",
				details: [
					new QuestionDetails(
						100,
						"IntroWhoAreWe",
						"Avec Creofin PAR - Payez Après Récolte - nous souhaitons donner aux agriculteurs la possibilité d'acheter leur inventaire agricole maintenant directement en ligne (semences, engrais, nutrition animales, matériel agricole, etc.) et de ne payer qu'après la récolte, sans intérêts ni frais. En outre, notre comparateur Creofin COMP vous permettra de rechercher le meilleur prix pour chaque produit disponible en ligne.",
						"",
						"",
						QuestionType.text_description
					),
				],
			},
			{
				categoryId: 1,
				category: "Comment ça marche ?",
				details: [
					new QuestionDetails(
						101,
						"IntroHowDoesItWork1",
						"En nous associant aux plateformes de vente en ligne, Creofin PAR sera intégré aux options de paiement proposées (au même titre que les paiements traditionnels CB/Visa/Chèques). Le service est entièrement gratuit, c'est-à-dire que vous n'aurez qu'à payer votre inventaire qu'une fois que vos revenus seront obtenus (après votre récolte ou après la réception de vos subventions).",
						"",
						"",
						QuestionType.text_description
					),
					new QuestionDetails(
						102,
						"HowDoesItWork2",
						"Notre comparateur Creofin COMP vous donnera accès aux différentes plateformes de vente en ligne afin que vous puissiez trouver le meilleur prix pour votre produit et ainsi augmenter vos marges. Le service est entièrement gratuit et offert aux agriculteurs.",
						"",
						"",
						QuestionType.text_description
					),
				],
			},
			{
				categoryId: 2,
				category: "Pourquoi nous ?",
				details: [
					new QuestionDetails(
						103,
						"IntroWhyUs1",
						"L'achat en ligne de l'inventaire agricole est généralement très compétitif et le choix plus grand que les achats traditionnels. Nous voulons vous aider à acheter aux meilleurs prix et avec une meilleure flexibilité pour optimiser votre trésorerie. Vous n'aurez à payer votre inventaire qu'une fois que vos revenus sont rentrés.",
						"",
						"",
						QuestionType.text_description
					),
					new QuestionDetails(
						104,
						"IntroWhyUs2",
						"Nous vous remercions vivement d'avance pour votre temps et vos réponses! Cela nous aide grandement dans notre projet de startup. ",
						"",
						"",
						QuestionType.text_description
					),
				],
			},
			{
				categoryId: 3,
				category: "Faisons connaissance",
				details: [
					new QuestionDetails(
						0,
						"FarmName",
						"Quel est le nom de votre exploitation ?",
						"Nom de votre entreprise",
						"",
						QuestionType.short_text
					),
					new QuestionDetails(
						33,
						"FarmId",
						"Quel est votre numéro SIREN ? (optionnel)",
						"Numéro SIREN",
						"",
						QuestionType.short_text,
						undefined,
						undefined,
						false,
					),
					new QuestionDetails(
						1,
						"Region",
						"Dans quelle région se situe votre exploitation ?",
						"Sélectionnez votre région",
						"",
						QuestionType.dropdown,
						[
							"France - Auvergne-Rhône-Alpes",
							"France - Bourgogne-Franche-Comté",
							"France - Bretagne",
							"France - Centre-Val de Loire",
							"France - Corse",
							"France - Grand Est",
							"France - Hauts-de-France",
							"France - Île-de-France",
							"France - Normandie",
							"France - Nouvelle-Aquitaine",
							"France - Occitanie",
							"France - Pays de la Loire",
							"France - Provence-Alpes-Côte d'Azur",
							"Belgique - Flandre",
							"Belgique - Wallonie",
						]
					),
					new QuestionDetails(
						2,
						"Age",
						"Quel est votre age ?",
						"Sélectionnez votre interval âge",
						"",
						QuestionType.dropdown,
						[
							"< 20 ans",
							"20 - 30 ans",
							"30 - 40 ans",
							"40 - 50 ans",
							"50 - 60 ans",
							"> 60 ans",
						]
					),
				],
			},
			{
				categoryId: 4,
				category: "Permettez-nous d'en savoir plus sur votre exploitation",
				details: [
					new QuestionDetails(
						3,
						"FarmType",
						"Quelle(s) activité(s) agricole(s) entreprenez-vous ?",
						"Plusieurs réponses possibles",
						"",
						QuestionType.checkbox,
						[
							"Grandes cultures - céréales (blé, orge, maïs, ...)",
							"Grandes cultures - oléagineux (colza, tournesol, soja, ...)",
							"Grandes cultures - protéagineux (lupin, pois, féverole, ...)",
							"Cultures spécialisées (arboriculture, maraîchage, horticulture, ...)",
						]
					),
					new QuestionDetails(
						34,
						"WorkingWithCooperatives",
						"Travaillez-vous avec des coopératives ?",
						"",
						"",
						QuestionType.radio,
						[
							"Oui",
							"Non",
						]
					),
					new QuestionDetails(
						4,
						"PurchasingMonth",
						"Quel mois achetez-vous vos intrants agricoles ?",
						"Sélectionner le mois",
						"",
						QuestionType.dropdown,
						[
							"Janvier",
							"Février",
							"Mars",
							"Avril",
							"Mai",
							"Juin",
							"Juillet",
							"Août",
							"Septembre",
							"Octobre",
							"Novembre",
							"Décembre",
						]
					),
					new QuestionDetails(
						5,
						"LeastExpensiveMonth",
						"Y a-t-il un mois moins cher où il est moins cher d'acheter vos intrants ?",
						"Votre réponse",
						"",
						QuestionType.short_text,
						undefined,
						undefined,
						true,
						" "
					),
					new QuestionDetails(
						6,
						"FarmSize",
						"Quelle est la taille totale de votre surface agricole utilisée",
						"Sélectionnez votre taille",
						"",
						QuestionType.dropdown,
						[
							"< 25 hectares",
							"25 - 49 hectares",
							"50 - 99 hectares",
							"100 - 150 hectares",
							"> 150 hectares",
						]
					),
					new QuestionDetails(
						30,
						"SubsidiesMonth",
						"Quel mois obtenez-vous la plupart de vos revenus ?",
						"Sélectionner le mois",
						"",
						QuestionType.dropdown,
						[
							"Janvier",
							"Février",
							"Mars",
							"Avril",
							"Mai",
							"Juin",
							"Juillet",
							"Août",
							"Septembre",
							"Octobre",
							"Novembre",
							"Décembre",
						]
					),
				],
			},
			{
				categoryId: 5,
				category: "Achat en ligne",
				details: [
					new QuestionDetails(
						7,
						"ThoughtOnlinePurchasing",
						"Avez-vous déjà pensé à acheter votre inventaire et/ou matériel en agricole ligne, (engrais, phytos, semences, équipements/outils, aliments pour les animaux, ...) ?",
						"",
						"",
						QuestionType.radio,
						["Non", "Oui"]
					),
					new QuestionDetails(
						8,
						"WhyNotOnlinePurchasing",
						"Si non, pour quelle(s) raison(s) n'avez vous jamais commandé vos intrants et/ou matériel agricole ?",
						"Plusieurs réponses possibles",
						"",
						QuestionType.checkbox,
						[
							"Je n'y ai jamais pensé",
							"Je préfère le contact humain",
							"Je n'ai pas confiance dans les sites en ligne",
							"Je n'y vois pas d'intérêt - j'ai déjà mes propres marchands",
							"Je n'ai pas le temps de changer mes habitudes",
							"Autre raison",
						],
						{
							questionId: 7,
							type: DependencyType.boolean,
							condition: DependencyCondition.equals,
							values: [0],
						}
					),
					new QuestionDetails(
						9,
						"NotOnlinePurchasingOtherReason",
						"Autre raison",
						"Votre réponse",
						"",
						QuestionType.short_text,
						undefined,
						{
							questionId: 8,
							type: DependencyType.number,
							condition: DependencyCondition.or,
							values: [5],
						}
					),
					new QuestionDetails(
						10,
						"AlreadyDidOnlinePurchasing",
						"Avez-vous déjà effectivement acheté votre inventaire et/ou matériel agricole en ligne ?",
						"Sélectionnez votre réponse",
						"",
						QuestionType.dropdown,
						[
							"Oui, régulièrement",
							"Oui, plusieurs fois",
							"Oui, une fois",
							"Non, pas encore",
						],
						{
							questionId: 7,
							type: DependencyType.boolean,
							condition: DependencyCondition.equals,
							values: [1],
						}
					),
					new QuestionDetails(
						11,
						"OnlinePurchasingSite",
						"Sur quel(s) site(s) avez-vous déjà commandé ?",
						"Site web",
						"",
						QuestionType.short_text,
						undefined,
						{
							questionId: 10,
							type: DependencyType.numberRange,
							condition: DependencyCondition.or,
							values: [0, 1, 2],
						}
					),
					new QuestionDetails(
						12,
						"OnlinePurchasingQuantity",
						"Quelle proportion de votre inventaire agricole achetez-vous en ligne ?",
						"Sélectionnez la proportion",
						"",
						QuestionType.dropdown,
						["0 - 10%", "10 - 25%", "25 - 50%", "50 - 75%", "75 - 100%"],
						{
							questionId: 10,
							type: DependencyType.numberRange,
							condition: DependencyCondition.or,
							values: [0, 1, 2],
						}
					),
					new QuestionDetails(
						31,
						"ReasonsForNotOnlinePurchasing",
						"Si non, pour quelle(s) raison(s) n'avez vous jamais commandé vos intrants et/ou matériel agricole ?",
						"Plusieurs réponses possibles",
						"",
						QuestionType.checkbox,
						[
							"Je préfère le contact humain",
							"Je n'ai pas confiance dans les sites en ligne",
							"Je n'y vois pas d'intérêt - j'ai déjà mes propres marchands",
							"Je n'ai pas le temps de changer mes habitudes",
							"Autre raison",
						],
						{
							questionId: 10,
							type: DependencyType.boolean,
							condition: DependencyCondition.equals,
							values: [3],
						}
					),
					new QuestionDetails(
						32,
						"ReasonsForNotOnlinePurchasingOtherReason",
						"Autre raison",
						"Votre réponse",
						"",
						QuestionType.short_text,
						undefined,
						{
							questionId: 31,
							type: DependencyType.number,
							condition: DependencyCondition.or,
							values: [4],
						}
					),
					new QuestionDetails(
						28,
						"OnlinePurchasingFavoritePaymentMethod",
						"Quelle est votre méthode de paiement préférée pour vos achats en ligne en ce moment ?",
						"Votre méthode favorite",
						"",
						QuestionType.dropdown,
						[
							"Carte de crédit",
							"Virement à la commande",
							"Virement à la livraison",
							"Paypal",
							"Autre",
						],
						{
							questionId: 7,
							type: DependencyType.boolean,
							condition: DependencyCondition.equals,
							values: [1],
						}
					),
					new QuestionDetails(
						29,
						"OnlinePurchasingFavoritePaymentMethodOther",
						"Autre",
						"Votre réponse",
						"",
						QuestionType.short_text,
						undefined,
						{
							questionId: 28,
							type: DependencyType.number,
							condition: DependencyCondition.or,
							values: [4],
						}
					),
				],
			},
			{
				categoryId: 6,
				category: "Notre solution : Creofin Payez Après Récolte",
				details: [
					new QuestionDetails(
						13,
						"OurSolutionPayAfterHarvest1",
						"En Europe il y a de plus en plus des sites e-commerce utilisés par les agriculteurs. Les prix proposés sont généralement plus transparents et très compétitifs, la livraison est effectuée sous quelques jours avec un service client compétent.",
						"",
						"",
						QuestionType.text_description
					),
					new QuestionDetails(
						14,
						"OurSolutionPayAfterHarvest2",
						"Creofin offre un mode de paiement après récolte, sans intérêts, ni frais. nous faisons un contrôle de crédit (instantané) et une fois approuvé Creofin avance votre montant à l’e-commerce et vous pouvez recevoir votre facture totale après votre récolte ou la récéption de vos subventions.",
						"",
						"",
						QuestionType.text_description
					),
				],
			},
			{
				categoryId: 7,
				category: "Votre avis sur notre solution de paiement",
				details: [
					new QuestionDetails(
						15,
						"YourOpinionOnOurSolution1",
						"Si, en plus de prix attractifs, il vous était donné la possibilité de différer le paiement de vos achats en ligne jusqu'à un an totalement gratuitement. Acheteriez-vous en ligne ? (Cela inclut la possibilité d'acheter lorsque les prix sont plus bas)",
						"",
						"",
						QuestionType.radio,
						["Oui", "Non"]
					),
					new QuestionDetails(
						16,
						"ChangeOnlineMarketplace",
						"Si vous achetez en ligne, changeriez-vous de plateforme de vente pour pouvoir utiliser Creofin PAR (Payer Après Récolte), si le produit, le prix et le niveau de service vous semble le même ?",
						"Sélectionner une réponse",
						"",
						QuestionType.dropdown,
						[
							"Oui",
							"Non, je n'ai pas encore acheté en ligne",
							"Non, je veux rester sur ma plateforme",
							"Cela dépend...",
						]
					),
					new QuestionDetails(
						17,
						"ChangeOnlineMarketplaceDepends",
						"Cela dépend",
						"Votre raison",
						"",
						QuestionType.short_text,
						undefined,
						{
							questionId: 16,
							type: DependencyType.number,
							condition: DependencyCondition.equals,
							values: [3],
						}
					),
					new QuestionDetails(
						18,
						"PurchasingAmountWithSolution",
						"Quelle proportion de votre inventaire agricole achèteriez-vous en ligne avec Creofin PAR (Payer Après Récolte) ?",
						"Sélectionnez la proportion",
						"",
						QuestionType.dropdown,
						["0 - 10%", "10 - 25%", "25 - 50%", "50 - 75%", "75 - 100%"],
						{
							questionId: 15,
							type: DependencyType.boolean,
							condition: DependencyCondition.equals,
							values: [0],
						}
					),
					new QuestionDetails(
						35,
						"" +
						"",
						"Voudriez-vous une alternative à vos coopératives ?",
						"",
						"",
						QuestionType.radio,
						["Oui", "Non"]
					),
					new QuestionDetails(
						19,
						"TrustOnlineMarketplaceWithSolution",
						"Avec la solution de paiement différé Creofin PAR, feriez-vous davantage confiance à la plateforme de vente ?",
						"",
						"",
						QuestionType.radio,
						["Oui", "Non"]
					),
					new QuestionDetails(
						20,
						"TrustOnlineMarketplaceWithSolutionReason",
						"Pourquoi ? (optionnel)",
						"Votre raison",
						"",
						QuestionType.short_text,
						undefined,
						undefined,
						false
					),
				],
			},
			{
				categoryId: 8,
				category: "Notre comparateur : Creofin COMP",
				details: [
					new QuestionDetails(
						21,
						"OurComparatorCreofinComp1",
						"Notre comparateur Creofin COMP vous donnera accès aux différentes plateformes de vente en ligne afin que vous puissiez trouver le meilleur prix pour votre produit et ainsi augmenter vos marges. Le service est entièrement gratuit et offert aux agriculteurs. Tous les produits que vous pourrez trouver sur le comparateur pourront être payés avec Creofin Payez Après Récolte et tous les achats sont ajoutés sur votre facture en fin de saison.",
						"",
						"",
						QuestionType.text_description
					),
				],
			},
			{
				categoryId: 9,
				category: "Votre avis sur notre comparateur",
				details: [
					new QuestionDetails(
						22,
						"OnlineComparatorAppType",
						"Je préfèrerais comparer les prix avec le Compateur Creofin COMP de la manière suivante",
						"Plusieurs choix possibles",
						"",
						QuestionType.checkbox,
						[
							"Via un site web sur mon ordinateur",
							"Via une application sur mon téléphone",
						]
					),
					new QuestionDetails(
						23,
						"OnlineComparatorAddToNewsletter",
						"Le Comparateur Creofin COMP m'intéresse et je souhaite être tenu au courant de son lancement",
						"",
						"",
						QuestionType.vertical_radio,
						[
							"Oui, envoyez-moi un courriel lors de son lancement",
							"Oui, cela me semble intéressant mais je n'ai pas besoin d'un courriel",
							"Je ne suis pas intéressé",
						]
					),
				],
			},
			{
				categoryId: 10,
				category:
					"Fin - Nous vous remerçions d'avoir pris le temps de remplir ce sondage",
				details: [
					new QuestionDetails(
						24,
						"Email",
						"Quel est votre email ?",
						"Votre email",
						"",
						QuestionType.short_text,
						undefined,
						undefined,
						true,
						"Nous vous enverrons un email si vous avez été tirés au sort."
					),
					/*new QuestionDetails(
						25,
						"ReceiveMoneyMethod",
						"Comment voudriez-vous recevoir les 5 euros de remerciement ? (Nous vous enverrons l'argent un mois après la fermeture du sondage)",
						"Choisissez votre méthode de réception",
						"",
						QuestionType.vertical_radio,
						[
							"Paypal",
							"Par virement avec vos coordonnées bancaires IBAN (envoyez-moi d'abord un courriel pour demander mes données)",
						]
					),*/
					new QuestionDetails(
						26,
						"InterestedContactMe",
						"Creofin m'intéresse et vous pouvez me contacter si vous avez plus de questions (optionnel)",
						"",
						"",
						QuestionType.checkbox,
						["Oui"],
						undefined,
						false
					),
					new QuestionDetails(
						27,
						"Suggestions",
						"Des suggestions ? Donnez-nous votre avis",
						"Optionnel",
						"",
						QuestionType.short_text,
						undefined,
						undefined,
						false,
						" "
					),
				],
			},
		],
	};

	res.status(200).json(questionList);
}
