import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Cabinet } from '../Interfaces/Cabinet';

@Injectable({
  providedIn: 'root'
})
export class ReqService {
  apiUrl = environment.apiKey
  constructor(private http: HttpClient) { }

  inscription(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'/api/users', data);
  }

  infoUser(): Observable<any> {
    return this.http.get(this.apiUrl+'/api/infoUser')
  }

  detailCabinet(id: number): Observable<any> {
    return this.http.get(this.apiUrl+'/api/cabinet_medicals/'+id);
  }

  listCabinet(page: number, region: string, departement: string, domaine: string, cabinet: string): Observable<any> {
    let queryParams = new HttpParams()
    queryParams = queryParams.append("page",page)
    queryParams = queryParams.append("region",region)
    queryParams = queryParams.append("departement",departement)
    queryParams = queryParams.append("domaine",domaine)
    queryParams = queryParams.append("cabinet",cabinet)
    return this.http.get(this.apiUrl+'/api/sec/cabinets',{params:queryParams})
  }

  getRegions(): Observable<any>{
    return this.http.get(this.apiUrl+'/api/regions')
  }

  getDepartements(region: number): Observable<any>{
    return this.http.get(this.apiUrl+'/api/departements?region='+region)
  }

  comboCabinet(dep: any): Observable<any> {
    let filtre = dep != "" ? "?departement="+dep : ""
    return this.http.get(this.apiUrl+'/api/cabinet_medicals'+dep)
  }

  getDomainesMedicals(): Observable<any>{
    return this.http.get(this.apiUrl+'/api/domaine_medicals')
  }

  getDomainesOfCabinet(id:any): Observable<any>{
    return this.http.get(this.apiUrl+'/api/sec/cabinets/domaines/'+id)
  }

  sendRv(data: any): Observable<any>{
    return this.http.post(this.apiUrl+'/api/sec/rendezvous/demande', data)
  }

  mesRv(page: any): Observable<any>{
    return this.http.get(this.apiUrl+'/api/sec/rendezvous?page='+page)
  }

}
