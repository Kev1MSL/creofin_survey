import {
	Card,
	Grid,
	Input,
	Button,
	Loading,
	Textarea,
	useInput,
} from "@nextui-org/react";
import axios from "axios";
import router from "next/router";
import { useState } from "react";
import { IoClipboard, IoSend } from "react-icons/io5";

function EndCard(props: any) {
	const { value: suggestion, reset, bindings } = useInput("");
	// Loading spinner state when the user post a suggestion
	const [loading, setLoading] = useState(false);

	// The referral code implementation has been commented out, but can still be used
	return (
		<Card className="tw-mt-20 2xl:tw-w-1/2 xl:tw-w-1/2 md:tw-w-1/2 sm:tw-w-2/3 tw-w-4/5 tw-p-5">
			<Card.Header>
				<h3 className="tw-text-center tw-w-full">
					<span className="tw-mr-2"> 🎉 </span> Merci pour votre participation !
				</h3>
			</Card.Header>
			<Card.Divider />
			<Card.Body>
				<span className="tw-text-gray-600">
					Grâce à vous, Creofin a avancé d&apos;un pas pour améliorer la vie des
					agriculteurs et fermiers.
				</span>
{/*				<span className="tw-text-center tw-my-5">
					Votre code de parrainage :{" "}
					<b className="tw-text-lg">{props.surveyId}</b>
				</span>*/}
				<span className="tw-text-gray-600 tw-mt-4">
					Nous vous serions très reconnaissant si vous pouviez partager votre
					expérience avec vos amis et collègues.
				</span>
				{/*<Input
					readOnly
					className="tw-w-2/3 tw-mx-auto tw-mt-4"
					aria-labelledby="survey-link"
					placeholder={
						"https://sondage.creofin.fr/?referralCode=" + props.surveyId
					}
					initialValue={
						"https://sondage.creofin.fr/?referralCode=" + props.surveyId
					}
				></Input>*/}
			</Card.Body>
			<Card.Divider />
			<Card.Footer className="tw-inline-block tw-mt-4">
				<span>Des suggestions pour améliorer notre sondage ?</span>
				<div className="tw-flex tw-w-full tw-p-5">
					<Textarea
						aria-label="suggestion"
						placeholder="Vos suggestions"
						className="tw-w-[30rem]"
						minRows={2}
						maxRows={5}
						{...bindings}
					/>

					<Button
						className="tw-ml-5 tw-mt-2"
						size={"sm"}
						icon={
							loading ? <Loading color="currentColor" size="sm" /> : <IoSend />
						}
						onPress={() => {
							setLoading(true);
							axios
								.post("/improvesurvey", {
									suggestion: suggestion,
								})
								.then((res) => {
									reset();
								})
								.finally(() => {
									setLoading(false);
								});
							reset();
						}}
					>
						Envoyer
					</Button>
				</div>
			</Card.Footer>
		</Card>
	);
}

export default EndCard;
