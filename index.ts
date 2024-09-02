import { APIGatewayProxyEventV2, Handler, APIGatewayProxyResultV2 } from 'aws-lambda';
// import * as _ from 'lodash'

export const handler: Handler = async (event: APIGatewayProxyEventV2):Promise<APIGatewayProxyResultV2> => {
    const max = 10;
    // const val = _.random(max);

    const resposne = {
        statusCode: 200,
        body: `the random value ${max}`
    }

    return resposne
};