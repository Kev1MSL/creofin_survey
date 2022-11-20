import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
} from "react";
import {
	DependencyCondition,
	DependencyType,
	QuestionDetails,
	QuestionType,
} from "../../data/questions";
import { Button, Card } from "@nextui-org/react";
import InputSelector from "./InputSelector";
import { IoChevronForward, IoSend } from "react-icons/io5";

// eslint-disable-next-line react/display-name
const QuestionDetailsComponent = forwardRef((props: any, ref: any) => {

	// State for the current displayed questions (used for dependencies) i.e. when the user answers a question,
	// the next question, that have a dependency on it, is displayed
	const [isDisplayed, setIsDisplayed] = React.useState<boolean[]>([false]);

	// Every time the user answers a question, the state is updated and goes through the dependency checker
	useEffect(() => {
		setIsDisplayed(
			props.questionsDetails.map(
				(q: QuestionDetails) =>
					q.dependency === undefined ||
					dependencyChecker(q, props.questionsDetails)
			)
		);
	}, [props.questionsDetails]);

	// This function is used to check if the form is complete, by going through all the questions and checking if they
	// have an answer and/or are required.
	// Use of imperative handle to call this function from the child component
	useImperativeHandle(ref, () => ({
		isFormComplete() {
			return props.questionsDetails.every((q: QuestionDetails, i: number) => {
				if (
					isDisplayed[i] &&
					q.isRequired &&
					q.type !== QuestionType.text_description
				) {
					if (typeof q.answer === "object") {
						return q.answer.length > 0;
					}
					return q.answer !== undefined && q.answer !== "";
				}
				return true;
			});
		},
	}));

	// Form incomplete if isDiplayed is true, answer is undefined or "" and isRequired is true
	return (
		<div className="tw-p-3">
			{props.questionsDetails.map((q: QuestionDetails, i: number) => {
				return isDisplayed[i] ? (
					<div className="tw-mx-5 tw-my-10" key={q.id}>
						<InputSelector
							{...q}
							setAnswer={(answer) => {
								props.clearError();
								q.answer = answer;
								if (q.type !== QuestionType.short_text) {
									let newDisplayed = isDisplayed;
									for (let j = 0; j < newDisplayed.length; j++) {
										// Go through all the questions and check if they have satisfied the dependency in
										// order to be displayed
										newDisplayed[j] = dependencyChecker(
											props.questionsDetails[j],
											props.questionsDetails
										);

										// If the question is not displayed, we clear the answer, this saves plenty of
										// bugs
										if (
											props.questionsDetails[j].dependency !== undefined &&
											props.questionsDetails[j].dependency?.questionId ===
												q.id &&
											!newDisplayed[j]
										) {
											props.questionsDetails[j].answer = undefined;
										}
									}
									// Update the state of the displayed questions
									setIsDisplayed([...newDisplayed]);
								}
							}}
						/>
					</div>
				) : null;
			})}
		</div>
	);
});

// This function is used to check if the question has to displayed or not, by checking if the dependency is satisfied
function dependencyChecker(
	question: QuestionDetails,
	questions: QuestionDetails[]
) {
	// If there is no dependency, the question is displayed
	if (question.dependency === undefined) {
		return true;
	}

	// Otherwise we find the question that is a dependency to the current one
	const dependencyQuestion = questions.find(
		(q) => q.id === question.dependency?.questionId
	);

	// If the dependency question is not found, we display the question
	if (dependencyQuestion === undefined) {
		return true;
	}

	// If the dependency question is not answered, we don't display the question
	if (dependencyQuestion.answer !== 0 && !dependencyQuestion.answer) {
		return false;
	}

	// Otherwise we check if the dependency is satisfied depending on the type of dependency and the condition
	switch (question.dependency?.condition) {
		case DependencyCondition.equals: {
			switch (question.dependency?.type) {
				case DependencyType.number:
					return +dependencyQuestion.answer === question.dependency.values[0]; // + is used to convert the answer to a number
				case DependencyType.numberRange:
					return dependencyQuestion.answer === question.dependency.values;
				case DependencyType.boolean:
					return +dependencyQuestion.answer === question.dependency.values[0];
				default:
					return false;
			}
		}
		case DependencyCondition.notEquals: {
			switch (question.dependency?.type) {
				case DependencyType.number:
					return dependencyQuestion.answer !== question.dependency.values[0];
				case DependencyType.numberRange:
					return dependencyQuestion.answer !== question.dependency.values;
				case DependencyType.boolean:
					return dependencyQuestion.answer !== question.dependency.values[0];
				default:
					return false;
			}
		}
		case DependencyCondition.or:
			return question.dependency.values.some((value: any) =>
				dependencyQuestion.answer.includes(value)
			);
		case DependencyCondition.and:
			return question.dependency.values.every(
				(value: any) => dependencyQuestion.answer === value
			);
		default:
			return false;
	}
}

function QuestionCard(props: any) {
	const childRef = useRef<any>();
	const [isFormComplete, setIsFormComplete] = React.useState<boolean>(true);
	return (
		<Card className="tw-w-4/5">
			<Card.Header>
				<h4 className="tw-w-full tw-text-center">{props.category}</h4>
			</Card.Header>
			<Card.Divider />
			<Card.Body>
				<QuestionDetailsComponent
					questionsDetails={props.details}
					ref={childRef}
					clearError={() => setIsFormComplete(true)}
				/>
			</Card.Body>
			<Card.Footer className="tw-block">
				{!isFormComplete && (
					<div className="tw-w-full tw-mb-7">
						<span className="tw-text-red-700">
							Veuillez remplir tous les champs du formulaire
						</span>
					</div>
				)}
				<div className="tw-flex tw-justify-center tw-w-full">
					<Button
						bordered
						auto
						onPress={() => {
							setIsFormComplete(true);
							props.onPreviousQuestion();
						}}
					>
						<span className="tw-font-semibold">Précédent</span>
					</Button>
					<Button
						className="tw-ml-5"
						auto
						iconRight={
							props.index < props.maxIndex - 1 ? (
								<IoChevronForward />
							) : (
								<IoSend />
							)
						}
						onPress={() => {
							const isComplete: boolean = childRef.current.isFormComplete();
							setIsFormComplete(isComplete);
							if (isComplete) {
								props.onNextQuestion();
							}
						}}
					>
						<span className="tw-font-semibold">
							{props.index < props.maxIndex - 1 ? "Suivant" : "Soumettre"}
						</span>
					</Button>
				</div>
			</Card.Footer>
		</Card>
	);
}

export default QuestionCard;
