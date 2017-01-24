import "babel-polyfill";
import * as actionTypes from "../constants/actionTypes";
import jts from "jsontableschema";
const Datapackage = require('datapackage-test').Datapackage;

export function receiveDatapackage(dp) {
	return {
		type: actionTypes.RECEIVE_DATAPACKAGE,
		dp
	};
}

export function receiveResource(resources) {
	return {
		type: actionTypes.RECEIVE_RESOURCE,
		resources
	};
}

export function getDataPackage(descriptor) {
	return async dispatch => {
		const basePath = descriptor.replace('datapackage.json', '');
		const dp = await new Datapackage(descriptor, 'base', false, false, null);
		let dataset = [];
		debugger;
		for (let i = 0; i < dp.resources.length; i++) {
			const source = basePath + dp.resources[i].descriptor.path;
			const table = await getResourceTable(dp, i, source);
			const headers = await table.schema.headers;
			let data = await table.read();
			data.unshift(headers);
			dataset.push(data);
		}
		dispatch(receiveDatapackage(dp.descriptor));
		dispatch(receiveResource(dataset));
	};
}

async function getResourceTable(dp, idx, source) {
	return await new jts.Table(dp.resources[idx].descriptor.schema, source);
}
