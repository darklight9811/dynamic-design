import React from "react";

// Interfaces
import ClientInterface from "../../types/clientInterface";

const formAssembler = (client: ClientInterface) => {
	return Object
		.keys(client)
		.filter(field => client[field].onInput)
		.map(field => {
			const behaviours = client[field];

			return (
				<div>
					{
						behaviours.onLabel &&
						behaviours.onLabel({ name: field, model: client })
					}
					{
						behaviours.onInput({ name: field, model: client })
					}
				</div>
			);
		});
}

export default formAssembler;