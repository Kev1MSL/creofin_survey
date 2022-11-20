import { Radio } from "@nextui-org/react";
import React from "react";

function RadioSwitch(props: any) {
	return (
		<div className="tw-flex tw-items-baseline">
			<span className="tw-mr-5">{props.question}</span>
			<div className="tw-flex tw-items-center">
				<Radio.Group
					orientation={props.isHorizontal ? "horizontal" : "vertical"}
					label={props.placeholder}
					onChange={props.onSwitchChanged}
					aria-label={props.question}
					className=""
					defaultValue={props.answer}
				>
					{props.options?.map((option: any, i: any) => {
						return (
							<Radio value={i} key={i}>
								<span className="tw-text-base tw-px-2">{option}</span>
							</Radio>
						);
					}) ?? <></>}
				</Radio.Group>
			</div>
		</div>
	);
}

export default RadioSwitch;
