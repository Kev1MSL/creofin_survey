import { Checkbox } from "@nextui-org/react";

function CheckboxGroup(props: any) {
	return (
		<div className="tw-flex">
			<span className="tw-mr-5">{props.question}</span>
			<Checkbox.Group
				label={props.placeholder}
				value={props.selectedCheckboxes}
				onChange={props.setSelectedCheckboxes}
			>
				{props.options?.map((option: any, i: any) => {
					return (
						<Checkbox key={option} value={i}>
							<span className="tw-text-base">{option}</span>
						</Checkbox>
					);
				}) ?? <></>}
			</Checkbox.Group>
		</div>
	);
}

export default CheckboxGroup;
