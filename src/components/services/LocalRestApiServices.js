import FundationModel from "../model/FundationModel";

export default class LocalRestApiServices {
    static restApiUrl = 'https://my-json-server.typicode.com/bstolarski/Oddam-w-dobre-rece';

    static getLocal(callback, errCallback) {
        fetch(`${this.restApiUrl}/Local`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Connection error');
                }
            })
            .then(locals => {
                const data = locals.map(local =>
                    new FundationModel(
                        local.id,
                        local.name,
                        local.mission,
                        local.stuff,
                        local.page
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