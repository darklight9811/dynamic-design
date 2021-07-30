import composeClient from "../../utils/composeClient";

const userClient = composeClient({
	id			: ["id"],
	name		: ["string", "label:Name"],
	email		: ["string", "label:Email"],
	description	: ["string", "label:Description"],
	avatar		: ["file", "label:Avatar"],
});

export default userClient;
