import React from "react";

const Layout = (props: any) => {
	return (
		<div className="tw-box-border tw-relative tw-overflow-visible tw-z-10">
			{props.children}
		</div>
	);
};

export default Layout;
