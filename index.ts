import {APIGatewayProxyEvent,Handler, APIGatewayProxyResultV2} from 'aws-lambda';
import * as _ from 'lodash'

export const handler:Handler = async (event:APIGatewayProxyEvent)=>{
    const max = 10;
    const val = _.random(max);

    const resposne={
     statusCode : 200,
     body: `the random value ${val}`
    }

    return resposne
};