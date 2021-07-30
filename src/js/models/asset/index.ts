import composeClient from "../../utils/composeClient";

const userClient = composeClient({
	id			: ["id"],
	label		: ["string", "label:Name"],
	description	: ["string", "label:Description"]
});

export default userClient;
