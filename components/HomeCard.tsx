import { Button, Card, Grid, Input, Loading } from "@nextui-org/react";
import { IoEnterOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

function HomeCard(props: any) {
	const router = useRouter();
	// Loading spinner state for the starting survey button
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Card className="tw-mt-20 2xl:tw-w-1/2 xl:tw-w-1/2 md:tw-w-1/2 sm:tw-w-2/3 tw-w-4/5 tw-p-5">
			<Card.Body>
				<span className="tw-text-gray-600 tw-text-center">
					Bonjour ! Nous sommes Floren et Kevin, cofondateurs de
					Creofin, une <b>startup fintech </b>
					(technologie financière) française et belge dont l&apos;objectif est
					de soutenir les agriculteurs indépendants. Afin de
					valider notre proposition, nous avons besoin de votre aide. Le
					questionnaire ci-dessous ne devrait <b>prendre que 5 minutes.</b>{" "}
					Notre but est de comprendre comment vous achetez actuellement votre
					inventaire pour votre activité agricole et votre intérêt dans
					l&apos;achat en ligne et le paiement différé.
				</span>
			</Card.Body>
			<Card.Divider />
			<Card.Footer className="tw-py-8">
				<div className="tw-m-auto">
					<Button
						className=""
						icon={
							!isLoading ? (
								<IoEnterOutline size="1.5em" />
							) : (
								<Loading color="currentColor" size="sm" />
							)
						}
						onPress={() => {
							setIsLoading(true);
							router
								.push(
									props.referralCode
										? "/start?referralCode=" + props.referralCode
										: "/start"
								)
								.then(() => setIsLoading(false));
						}}
					>
						<span className="tw-font-semibold">Commencer</span>
					</Button>
				</div>
			</Card.Footer>
		</Card>
	);
}

export default HomeCard;
