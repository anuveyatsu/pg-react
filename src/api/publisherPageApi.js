import axios from 'axios';

axios.defaults.baseURL = 'https://staging.datapackaged.com';


class PublisherPageApi {
	static getAllPackages(publisher){
		return axios.get('/api/package/'+publisher);
	}
}

export default PublisherPageApi;
