import {EndpointParameter} from '../contract/model/endpoint-parameter';
import {HttpResponse} from './model/http-response';

export interface HttpClient {
    get(apiPath: string, params: EndpointParameter[]): Promise<HttpResponse>;
}