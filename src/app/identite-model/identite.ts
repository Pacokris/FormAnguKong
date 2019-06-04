export class Identite {
  constructor(
    public code_lieu_naissance: number,
    public code_pays_naissance: string,
    public date_naissance: number,
    public num_assure: number,
    public nom_naissance: string,
    public liste_prenoms: string,
    public nom_usage: string,
    public code_sexe: number,
    public libelle_departement: string,
    public libelle_commune: string,
    public libelle_pays: string,
    public libelle_localite: string,
    public nom_marital: string,
    public nom_naissance_pere: string,
    public liste_prenoms_pere: string,
    public nom_naissance_mere: string,
    public liste_prenoms_mere: string,
  ){}
}