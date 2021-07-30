import React from "react";
import formAssembler from "../../assemblers/form";
import userClient from "../../models/user";

const UserUpdate = () => {
	return (
		<div>
			<h1>Update user</h1>

			{formAssembler(userClient)}
		</div>
	)
}

export default UserUpdate;