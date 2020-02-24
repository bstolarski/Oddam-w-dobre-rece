import FundationModel from "../model/FundationModel";

export default class OrganizationRestApiServices {
    static restApiUrl = 'https://my-json-server.typicode.com/bstolarski/Oddam-w-dobre-rece';

    static getOrganization(callback, errCallback) {
        fetch(`${this.restApiUrl}/Organization`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Connection error');
                }
            })
            .then(organizations => {
                const data = organizations.map(organization =>
                    new FundationModel(
                        organization.id,
                        organization.name,
                        organization.mission,
                        organization.stuff,
                        organization.page
                    )
                );

                if (typeof callback === 'function') {
                    callback(data);
                }
            })
            .catch(err => {
                if (typeof errCallback === 'function') {
                    errCallback(err);
                }
            })
    }
}