import { Input } from "@nextui-org/react";
import React from "react";

function ShortText(props: any) {
	return (
		<div className="tw-flex tw-items-center">
			<span className="tw-mr-5">{props.question}</span>
			<Input
				className={props.subText && "tw-w-[25rem]"}
				bordered
				color={"primary"}
				labelPlaceholder={props.placeholder}
				clearable
				onChange={props.onTextEntered}
				initialValue={props.answer}
				helperText={props.subText}
				maxLength={props.maxLength}
			/>
		</div>
	);
}

export default ShortText;
