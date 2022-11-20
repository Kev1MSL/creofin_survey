/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { QuestionDetails, QuestionType } from "../../data/questions";
import { Input } from "@nextui-org/react";
import ShortText from "./Inputs/ShortText";
import SingleSelectDropdown from "./Inputs/SingleSelectDropdown";
import CheckboxGroup from "./Inputs/CheckboxGroup";
import RadioSwitch from "./Inputs/RadioSwitch";

function InputSelector(props: QuestionDetails) {
	// Depending on the question type, a different input is displayed. The input is passed the question details as props
	// and the answer is passed back to the parent component
	switch (props.type) {
		case QuestionType.short_text:
			return (
				<ShortText
					question={props.question}
					placeholder={props.placeholder}
					onTextEntered={onTextEntered}
					answer={props.answer}
					subText={props.subText}
					maxLength={props.id === 33 && 8}
				/>
			);
		case QuestionType.long_text:
			return <></>;
		case QuestionType.dropdown:
			const [selected, setSelected] = React.useState<any>(
				props.answer && props.options
					? new Set([props.options[props.answer]])
					: new Set([props.placeholder])
			);
			return (
				<div>
					<SingleSelectDropdown
						question={props.question}
						options={props.options}
						selected={selected}
						setSelected={(s: any) => {
							setSelected(s);
							props.setAnswer(
								props.options?.indexOf(s.values().next().value) + ""
							);
						}}
					/>
				</div>
			);
		case QuestionType.number:
			return <></>;
		case QuestionType.checkbox:
			const [selectedCheckboxes, setSelectedCheckboxes] = React.useState(
				props.answer ? props.answer : []
			);
			return (
				<CheckboxGroup
					question={props.question}
					placeholder={props.placeholder}
					options={props.options}
					selectedCheckboxes={selectedCheckboxes}
					setSelectedCheckboxes={(e: any) => {
						setSelectedCheckboxes(e);
						props.setAnswer(e);
					}}
				/>
			);
		case QuestionType.radio:
			const [checked, setChecked] = React.useState(
				props.answer || props.answer === 0 ? props.answer : false
			);
			return (
				<RadioSwitch
					question={props.question}
					answer={checked}
					isHorizontal={true}
					options={props.options}
					placeholder={props.placeholder}
					onSwitchChanged={(e: any) => {
						setChecked(e);
						props.setAnswer(e);
					}}
				/>
			);
		case QuestionType.vertical_radio:
			const [verticalChecked, setVerticalChecked] = React.useState(
				props.answer || props.answer === 0 ? props.answer : false
			);
			return (
				<RadioSwitch
					question={props.question}
					answer={verticalChecked}
					isHorizontal={false}
					options={props.options}
					placeholder={props.placeholder}
					onSwitchChanged={(e: any) => {
						setVerticalChecked(e);
						props.setAnswer(e);
					}}
				/>
			);
		case QuestionType.text_description:
			return (
				<span className="tw-text-gray-600 tw-text-center">
					{props.question}
				</span>
			);
		default:
			return (
				<Input
					bordered
					color={"primary"}
					labelPlaceholder={props.question}
					clearable
					value={props.answer}
				/>
			);
	}

	function onTextEntered(e: any) {
		props.setAnswer(e.target.value);
	}
}

export default InputSelector;
