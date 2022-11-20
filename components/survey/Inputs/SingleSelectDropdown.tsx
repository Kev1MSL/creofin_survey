import React from "react";
import {Dropdown} from "@nextui-org/react";

function SingleSelectDropdown(props: any){



    const selectedValue =
        React.useMemo(() => Array.from(props.selected).join(", ").replaceAll("_", " "), [props.selected]);


    return (
        <div className="tw-flex tw-items-center">
            <span className="tw-mr-5">{props.question}</span>
            <Dropdown>
                <Dropdown.Button light bordered>
                    <span className="tw-text-black">{selectedValue}</span>
                </Dropdown.Button>
                <Dropdown.Menu
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={props.selected}
                    onSelectionChange={props.setSelected}
                    css={{$$dropdownMenuWidth: "500px"}}
                >
                    {
                        props.options?.map((option: any) => {
                            return <Dropdown.Item key={option}>
                                {option}
                            </Dropdown.Item>
                        }) ?? <></>
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default SingleSelectDropdown;