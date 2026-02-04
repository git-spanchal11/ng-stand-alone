export interface HttpInterface<T = any> {
    status?: boolean;
    errorCode?: number;
    errorMessage?: string;
    successCode?: number;
    successMessage?: string;
    data: T;
}

export class responseModel {
    public Response: any;

    constructor(Response: any) {
        Response = {
            errorCode: 0,
            status: true,
            successMessage: 'SUCCESS',
            successCode: 200,
            errorMessage: '',
            data: {}
        };
        this.Response = Response;
    }
}
