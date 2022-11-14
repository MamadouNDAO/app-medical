import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public errorMessage = {
    nom: [
      {type: 'required', message: 'Ce champ est obligatoire.'},
    ],
    prenom: [
      {type: 'required', message: 'Ce champ est obligatoire.'},
    ],
    password: [
      {type: 'required', message: 'Mot de passe obligatoire.'}
    ],
    telephone: [
      {type: 'required', message: 'Ce champ est obligatoire.'},
      {type: 'pattern', message: 'Numéro de téléphone invalide.'},
      {type: 'maxlength', message: 'Le numéro doit contenir 9 chiffres'},
      {type: 'minlength', message: 'Le numéro doit contenir 9 chiffres'}
    ],
    cni: [
      {type: 'required', message: 'Ce champ est obligatoire.'},
      {type: 'pattern', message: 'CNI invalide.'},
      {type: 'maxlength', message: 'Le numéro de la CDI doit contenir 13 chiffre'},
      {type: 'minlength', message: 'Le numéro de la CDI doit contenir 13 chiffre'}
    ],
    email: [
      {type: 'required', message: 'Ce champ est obligatoire.'},
      {type: 'pattern', message: 'Email obligatoire'},
    ]
  };
}
