/**
 * ESHC Api's
 * ESHC APIs exposed from a Java EE back-end to an Angular front-end
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ActionPoint } from '../model/actionPoint';
import { PageActionPoint } from '../model/pageActionPoint';
import { WorkingGroup } from '../model/workingGroup';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class WorkingGroupEndpointService {

    protected basePath = 'https://localhost:8090';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add an Action Point to a Working Group
     * 
     * @param workingId workingId
     * @param actionId actionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addActionPointUsingPOST(workingId: number, actionId: number, observe?: 'body', reportProgress?: boolean): Observable<ActionPoint>;
    public addActionPointUsingPOST(workingId: number, actionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ActionPoint>>;
    public addActionPointUsingPOST(workingId: number, actionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ActionPoint>>;
    public addActionPointUsingPOST(workingId: number, actionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (workingId === null || workingId === undefined) {
            throw new Error('Required parameter workingId was null or undefined when calling addActionPointUsingPOST.');
        }
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling addActionPointUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<ActionPoint>(`${this.basePath}/api/working/${encodeURIComponent(String(workingId))}/actionId`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a Working Group
     * 
     * @param workingGroup workingGroup
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createWorkingGroupUsingPOST(workingGroup: WorkingGroup, observe?: 'body', reportProgress?: boolean): Observable<WorkingGroup>;
    public createWorkingGroupUsingPOST(workingGroup: WorkingGroup, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkingGroup>>;
    public createWorkingGroupUsingPOST(workingGroup: WorkingGroup, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkingGroup>>;
    public createWorkingGroupUsingPOST(workingGroup: WorkingGroup, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (workingGroup === null || workingGroup === undefined) {
            throw new Error('Required parameter workingGroup was null or undefined when calling createWorkingGroupUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<WorkingGroup>(`${this.basePath}/api/working`,
            workingGroup,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a Working Group given an Id
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteWorkingGroupUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteWorkingGroupUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteWorkingGroupUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteWorkingGroupUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteWorkingGroupUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/working/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all Action Points for a working group
     * 
     * @param id id
     * @param page Page no
     * @param size Size of each page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getActionPointsUsingGET1(id: number, page?: string, size?: string, observe?: 'body', reportProgress?: boolean): Observable<PageActionPoint>;
    public getActionPointsUsingGET1(id: number, page?: string, size?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageActionPoint>>;
    public getActionPointsUsingGET1(id: number, page?: string, size?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageActionPoint>>;
    public getActionPointsUsingGET1(id: number, page?: string, size?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActionPointsUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<PageActionPoint>(`${this.basePath}/api/working/${encodeURIComponent(String(id))}/actions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return a Working Group given an Id
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWorkingGroupUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<WorkingGroup>;
    public getWorkingGroupUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkingGroup>>;
    public getWorkingGroupUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkingGroup>>;
    public getWorkingGroupUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getWorkingGroupUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WorkingGroup>(`${this.basePath}/api/working/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a working Group
     * 
     * @param id id
     * @param workingGroup workingGroup
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWorkingGroupUsingPUT(id: number, workingGroup: WorkingGroup, observe?: 'body', reportProgress?: boolean): Observable<WorkingGroup>;
    public updateWorkingGroupUsingPUT(id: number, workingGroup: WorkingGroup, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkingGroup>>;
    public updateWorkingGroupUsingPUT(id: number, workingGroup: WorkingGroup, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkingGroup>>;
    public updateWorkingGroupUsingPUT(id: number, workingGroup: WorkingGroup, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateWorkingGroupUsingPUT.');
        }
        if (workingGroup === null || workingGroup === undefined) {
            throw new Error('Required parameter workingGroup was null or undefined when calling updateWorkingGroupUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<WorkingGroup>(`${this.basePath}/api/working/${encodeURIComponent(String(id))}`,
            workingGroup,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
