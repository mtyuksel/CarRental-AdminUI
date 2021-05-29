import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { InjectorInstance } from "../layouts/admin-layout/admin-layout.module";
import { ListResponseModel } from "./response_models/listResponseModel";

export class APIConnectionService<T>{
    protected apiURL: string;
    protected httpClient: HttpClient = InjectorInstance.get<HttpClient>(HttpClient);

    constructor(apiPath: string) {
        this.apiURL = environment.api_base_url + apiPath + "/";
    }

    add(entity: T): Observable<any> {
        return this.httpClient.post(this.apiURL + "add", entity);
    }

    getAll(): Observable<ListResponseModel<T>> {
        return this.httpClient.get<ListResponseModel<T>>(this.apiURL + "getall");
    }

    delete(entity: T): Observable<any> {
        return this.httpClient.post(this.apiURL + "delete", entity);
    }
}