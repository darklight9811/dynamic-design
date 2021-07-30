import React from "react";

const fileBehaviour = {
	onInput: (args) => ({ name }) => {
		return (
			<input name={name} type="file" required={args.includes("required")} />
		)
	},
}

export default fileBehaviour;
