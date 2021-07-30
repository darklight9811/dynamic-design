import * as behaviours from "../behaviours";

const composeClient = (client) => {
	const rows = {};

	Object.keys(client).forEach(field => {
		client[field].forEach(type => {
			const [name, ...preargs] = type.split(":");
			const args = preargs.join(":").split(",");
	
			const typeBehaviours = behaviours[name];
	
			if (!typeBehaviours) return;
	
			if (!rows[field]) rows[field] = {};
	
			Object.keys(typeBehaviours).forEach(type => {
				rows[field][type] = typeBehaviours[type](args);
			});
		});
	});

	return rows;
}

export default composeClient;
