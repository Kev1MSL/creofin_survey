import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Badge, Progress } from "@nextui-org/react";
import {
	Answers,
	QuestionItem,
	Questions,
	QuestionType,
} from "../../data/questions";
import axios from "axios";
import QuestionCard from "../../components/survey/QuestionCard";
import { useRouter } from "next/router";
import CreofinNavbar from "../../components/navbar/navbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import requestIp from "request-ip";

const GetReferralCode = (): string => {
	const router = useRouter();
	const { referralCode } = router.query;
	return referralCode?.toString() ?? "";
};

function Start({
	questionList,
	ip,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

	// Set the state of the questions to the first one
	const [currentQuestion, setCurrentQuestion] = useState<QuestionItem>(
		questionList.questions[0]
	);

	// Obtain the referral code from the URL
	questionList.referralCode = GetReferralCode();

	// Create a state for the index of the current question
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

	// Update the question state once retrieved from the server
	useEffect(() => {
		return () => {
			setCurrentQuestion(questionList.questions[currentQuestionIndex]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [questionList]);
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>{currentQuestion.category} | Sondage Creofin</title>
			</Head>
			<CreofinNavbar />
			<div className="tw-mt-7 tw-w-2/3 tw-mx-auto">
				<Progress
					color="success"
					status="success"
					size="md"
					value={currentQuestionIndex}
					max={questionList.number - 1}
				/>
			</div>

			<main className="tw-text-center tw-mt-10 tw-mb-10">
				<Badge color="success" size="lg" variant="flat">
					Sondage Creofin
				</Badge>
				<div className="tw-mt-5 tw-flex tw-justify-center">
					<div className="tw-container tw-flex tw-justify-center">
						<QuestionCard
							categoryId={currentQuestion.categoryId}
							category={currentQuestion.category}
							details={currentQuestion.details}
							index={currentQuestionIndex}
							maxIndex={questionList.number}
							onNextQuestion={() => {
								if (currentQuestionIndex < questionList.number - 1) {
									// Update the current question index
									setCurrentQuestion(
										questionList.questions[currentQuestionIndex + 1]
									);
									setCurrentQuestionIndex(currentQuestionIndex + 1);
								} else {
									let answers: Answers[] = [];
									// Get all the answers from the questions and format them for the server
									answers = returnAnswer(questionList.questions);
									// Send the answers to the server and show the end page
									axios
										.post("/sondage", {
											answers: answers,
											ip: ip,
											referralCode: questionList.referralCode,
										})
										.then((res) => {
											router.push("/end?surveyId=" + res.data);
											//console.log(res);
										});
								}
							}}
							onPreviousQuestion={() => {
								// Update the current question index
								if (currentQuestionIndex > 0) {
									setCurrentQuestion(
										questionList.questions[currentQuestionIndex - 1]
									);
									setCurrentQuestionIndex(currentQuestionIndex - 1);
								} else router.push("/"); // Go back to the home page in case the user tries to go back from the first question
							}}
						/>
					</div>
				</div>
			</main>
		</Layout>
	);

	function returnAnswer(questions: QuestionItem[]): Answers[] {
		let answers: Answers[] = [];
		questions.forEach((question) => {
			question.details.forEach((detail) => {
				// Ignore the question if it is not answered or is a simply an informative text
				if (
					detail.type !== QuestionType.text_description &&
					detail.answer !== "" &&
					detail.answer !== undefined
				) {
					answers.push({
						id: detail.id,
						shortId: detail.shortId,
						answer: detail.answer,
					});
				}
			});
		});
		return answers;
	}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	// Get the questions from the Next.js API
	const res = await axios.get("http://localhost:3000/api/get_questions");
	const questionList: Questions = res.data;

	const ip = requestIp.getClientIp(context.req);

	return { props: { questionList, ip } };
};

export default Start;
