import React from "react";

const stringBehaviour = {
	onLabel: (args) => () => {
		if (!args[0]) return;

		return (
			<label htmlFor={args[0]}>
				{args[0]} {args.includes("required") ? "*" : ""}
			</label>
		)
	},
}

export default stringBehaviour;
