import FundationModel from "../model/FundationModel";

export default class FundationRestApiServices {
    static restApiUrl = 'https://my-json-server.typicode.com/bstolarski/Oddam-w-dobre-rece';

    static getFundation(callback, errCallback) {
        fetch(`${this.restApiUrl}/Fundation`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Connection error');
                }
            })
            .then(fundations => {
                const data = fundations.map(fundation =>
                    new FundationModel(
                        fundation.id,
                        fundation.name,
                        fundation.mission,
                        fundation.stuff,
                        fundation.page
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