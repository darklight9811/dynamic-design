import React from "react";

const stringBehaviour = {
	onInput: (args) => ({ name }) => {
		return (
			<input name={name} required={args.includes("required")} />
		)
	},
}

export default stringBehaviour;
