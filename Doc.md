![img Logo Angular](https://image.noelshack.com/fichiers/2019/23/5/1559895622-angular.png "img Logo Angular")

Angular est un framework Javascript côté client qui permet de réaliser des applications de type "Single Page Application". Il est basé sur le concept de l'architecture MVC (Model View Controller) qui permet de séparer les données, les vues et les différentes actions que l'on peut effectuer.

Le code source d'Angular est écrit en TypeScript. Le TypeScript est une couche supérieur au Javascript développé par Microsoft qui se compile en JavaScript simple. Etant un language typé, il permet de créer des classes, des variables, des signatures de fonction et l'utilisation de modules. L'utilisation du TypeScript est facultative, on peut tout à fait utiliser du JavaScript.

# Architecture

Angular est aujourd'hui basé sur une architecture de composants complètement indépendants les uns des autres. Une fois le composant principal chargé, il analyse ensuite la vue html correspondant à celui-ci et détecte si il comporte des composants imbriqués. Si c'est le cas, Angular va trouver toutes les correspondances et exécuter le code lié a celles-ci. On peut imbriquer autant de composants que l'on souhaite.

Un composant dans Angular sert à générer une partie de code html et fournir des fonctionnalités à celle-ci. C'est pour cela qu'un composant est constitué d'une classe dans laquelle on pourra définir la logique d'application pour ce composant avec des propriétés, des méthodes...etc.

![img architecture Angular](https://image.noelshack.com/fichiers/2019/23/5/1559896030-archiangular.png "img architecture Angular")

## Module racine

![img moduleRacine](https://image.noelshack.com/fichiers/2019/23/5/1559896603-moduleracine.png "img moduleRacine")

Chaque application nécessite un module root (ou racine) qui agit comme point de départ dans une application. Celui-ci sera contenu dans un fichier nommé **app.module.ts** et va permettre d'indiquer à Angular comment assembler l'application. Pour informer Angular que cette classe sera destinée à être un module, on utilisera le décorateur **NgModule**

Ce module racine va contenir différentes propriétés :

    1.Import: on va déclarer ici les autres modules Angular dont ce module aura besoin.

    2.Declaration: pour rendre les composants, les directives accessibles à notre module qui ne proviennent pas d'un autre module.

    3.Bootstrap: permet à Angular de connaitre le composant qui sera le composant de départ de l'application.

Ce composant va s'appeler **AppComponent** et proviendra d'un fichier nommé **app.composant.ts** et sera situé juste à côté du fichier **app.module.ts**

## AppComponent

![img appComponent](https://image.noelshack.com/fichiers/2019/23/5/1559897298-appcomponent.png "img appComponent")

**AppComponent** est notre component principal : tous les autres components de notre application seront emboîtés dans celui-ci.

    1.Selector: cette propriété est utilisée par Angular pour localiser notre balise HTML et ainsi appliquer le composant, ce nom doit être unique

    2.TemplateUrl: le chemin vers le code HTML à injecter

    3.StyleUrls: un array contenant un ou plusieurs chemins vers les feuilles de styles qui concernent ce component

## Composants

### Ajouter un composant

Dans une application Angular, il est possible et même recommandé d'imbriquer un ou plusieurs composants. Pour cela, on va simplement mettre a disposition notre nouveau composant de la même manière que notre AppComponent.

Il est possible ainsi d'imbriquer un nombre illimité de composants dans notre application.

![img imbriquerComponentEx](https://image.noelshack.com/fichiers/2019/23/5/1559900200-appelcomponent.png "img imbriquerComponentEx")

**Exemple de structure** :

![img appComponentEx](https://image.noelshack.com/fichiers/2019/23/5/1559897686-appcomponentimg.png "img appComponentEx")

Pour cette structure, on peut imaginer un composant pour la barre de menu, un autre pour la partie contenue et un dernier pour le menu de droite.

### Afficher des données dans la vue

Une des méthodes les plus courantes pour afficher du contenue dans notre template HTML est l'interpolation. Pour ceci on utilisera la syntaxe des doubles accolades qui rendra un contenu de type string. On pourra ainsi déclarer une variable dans le composant correspondant et afficher sa valeur directement dans la vue.

_Dans le composant_ :

![img interpolationCode](https://image.noelshack.com/fichiers/2019/23/5/1559900889-interpolationcode.png "img interpolationCode")

_La vue_ :

![img interpolationImg](https://image.noelshack.com/fichiers/2019/23/5/1559900917-interpolationimg.png "img interpolationImg")

### Data Binding

Une autre façon de combiner les données dans les modèles avec Angular est le "data binding".

Les éléments HTML possèdent des propriétés du DOM qui suivent l'état des éléments. On peut utiliser la syntaxe de data binding d'Angular pour lier nos propriétés. On pourra faire cela avec une syntaxe spécifique, une paire de crochets autour d'un nom de variable sur un élément, et on definira notre variable suivant les mêmes règles que pour l'interpolation.

_Dans le composant_ :

![img dataBindingCode](https://image.noelshack.com/fichiers/2019/23/5/1559902524-databindingcode.png "img dataBindingCode")

_La vue_ :

![img dataBindingImg](https://image.noelshack.com/fichiers/2019/23/5/1559902528-databindingimg.png "img dataBindingImg")

### Evènements

Pour lier des évènements depuis la template vers le composant, on utilisera la syntaxe d'Angular prévue à cet effet. Par exemple, pour lier un "click" vers notre composant, on va insérer (click)="nomMethode()" dans la balise souhaitée et on déclarera également cette méthode dans notre composant qui contiendra la logique de l'action.

![img dataBindingImg](https://image.noelshack.com/fichiers/2019/23/5/1559906986-venementscode.png "img dataBindingImg")

# Injection de dépendances

![img injectionDependance](https://image.noelshack.com/fichiers/2019/23/5/1559907180-injectiondependance.jpg "img injectionDependance")

Angular a également été concu pour permettre l'injection de dépendances. C'est ce principe qui nous donne la possibilité de créer des composants, des directives, d'une manière modulaire où ils ne sont pas forcés de se connaître mutuellement pour coéxister. Angular va gèrer la création d'instances et les injecter dans les endroits où elles sont nécessaires.

## Les services

Un service est une classe qui contiendra une logique que l'on va pouvoir utiliser un peu partout dans notre application. L'injection de dépendances va nous permettre ainsi d'injecter nos services seulement aux endroits souhaités et eviter de répéter du code logique dans chaque composants.

### Utilisation d'un service

Pour utiliser un service depuis un composant, il faut tout d'abord l'importer dans le fichier app.module.ts et le déclarer dans la section 'providers'. Il faut également importer le service dans le composant dans lequel on souhaite l'utiliser. Nous devons ensuite créer un constructeur afin de pouvoir effectuer une injection de constructeur Angular. Pour ceci on va déclarer le service comme paramètre privé du constructeur en specifiant son type. Et on pourra ainsi utiliser toute la logique du service depuis ce composant.

![img serviceEx](https://image.noelshack.com/fichiers/2019/23/5/1559907589-serviceex.png "img serviceEx")

### Le décorateur @Injectable()

Est un décorateur un peu particulier. Il ne permet pas l’injection à proprement parlé, mais plutôt d’initialiser un contexte détectabilité. Si vous injectez dans un de vos services ( sans ce décorateur) un autre service, le moteur d'injection retournera une erreur. Angular conseille de toujours mettre cette annotation sur un service même si vous n'utilisez pas les injections dans les premiers développements de votre service afin d'éviter de se poser la question plus tard.

# Routes

Angular possède un module appelé Router pour gérer le routage côté client.

![img routesEx](https://image.noelshack.com/fichiers/2019/23/5/1559908316-routesex.png "img routesEx")

_'**' est une "wildcard" qui "match" toutes les urls (sauf celles qui ont "match" les routes précédentes).
Il faut donc faire attention à l'ordre des "routes"._

## Configuration d'une 'Route' avec Paramtères

Le path d'une "route" peut définir des paramètres obligatoires grâce au préfixe :

```javascript
const routes: Routes = [
    ...,
    {
        path: 'identite-form/:identiteId',
        component: IdentiteFormComponent
    },
    ...
];
```

## router-outlet

La configuration du "Routing" permet de définir quel composant afficher en fonction de la route mais cela n'indique pas à Angular **où injecter le composant** dans la page.

Pour **indiquer l'emplacement d'insertion du composant**, il faut utiliser la directive <router-outlet> directement dans le "root component" AppComponent.

_app.component.html_
```javascript
<header>
...
</header>
<router-outlet></router-outlet>
<footer>
...
</footer>
```
En fonction de la "route" visitée, le **composant associé sera alors injecté en dessous du tag router-outlet** (et non à l'intérieur ou à la place du tag contrairement à ce que l'on pourrait supposer).

## RouterLink

En utilisant des liens natifs 
```javascript
<a href="/search"> 
```
le "browser" va produire une requête HTTP GET vers le serveur et **recharger toute l'application**.
Pour éviter ce problème, le module de "Routing" Angular fournit la directive routerLink qui permet d'intercepter l'événement click sur les liens et de changer de "route" sans recharger toute l'application
```javascript
<a routerLink="/search">Search</a> 
```

### Construction Dynamique

La "route" peut être construite dynamiquement et passée à l'Input routerLink.
```javascript
this.route = '/search';
this.routeName = 'Search';

<a [routerLink]="route">{{ routeName }}</a>
```

### Construction avec Paramètres

La "route" /identite/1 peut être construite avec des paramètres :
```javascript
<a [routerLink]="['/identites', identite.id]">{{ routeName }}</a>
```

où identite.id = '1'

Il est également possible de passer des paramètres optionnels par "query string" via l'Input queryParams.

```javascript
<a
    routerLink="'/search"
    [queryParams]="{keywords: 'eXtreme Programming'}">eXtreme Programming Identites
</a>
```

# Réalisation POC Angular / Kong

Avant de commencer, vous pourrez trouver la documentation d’Angular CLI ici : cli.angular.io

## Installation

Avant toute chose, vous devez avoir installé [Node et npm](https://nodejs.org/en/)

Ensuite pour installer angular CLI, il suffit de taper la commande suivante dans votre bash :

```
npm install -g @angular/cli
```

## Démarrage de votre projet

Pour démarrer une nouvelle application, il suffit d’exécuter la commande suivante :

```
ng new FormAnguKong
```
(Bien entendu, vous pouvez remplacer FormAnguKong par votre nom de projet)

On va vous demandez si vous voulez que le projet génère le fichier module routing

Répondez oui

```
? Would you like to add Angular routing? (y/N) 
```

Ensuite on va vous proposez différentes options comme le choix du CSS SCSS...

A vous de voir celon vos besoins, dans cet exemple j'ai chois CSS

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS 
  SCSS   [ http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax ] 
  Sass   [ http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html       ] 
  Less   [ http://lesscss.org                                                 ] 
  Stylus [ http://stylus-lang.com 
```
Voilà ce qui doit s’afficher dans votre console :

```
CREATE FormAnguKong/README.md (1029 bytes)
CREATE FormAnguKong/.editorconfig (246 bytes)
CREATE FormAnguKong/.gitignore (629 bytes)
CREATE FormAnguKong/angular.json (3861 bytes)
CREATE FormAnguKong/package.json (1313 bytes)
CREATE FormAnguKong/tsconfig.json (435 bytes)
CREATE FormAnguKong/tslint.json (1621 bytes)
CREATE FormAnguKong/src/favicon.ico (5430 bytes)
CREATE FormAnguKong/src/index.html (299 bytes)
CREATE FormAnguKong/src/main.ts (372 bytes)
CREATE FormAnguKong/src/polyfills.ts (2841 bytes)
...
...
```

## La structure des dossiers

Après l’installation et la création de votre projet avec angular-cli, nous allons voir la structure des dossiers et fichiers dans l’architecture d’angular-cli.

```
// Tout ce qui va concerner les tests end to end
|- e2e/
  |----- app.e2e-spec.ts
  |----- app.po.ts
  |----- tsconfig.e2e.json

// les dépendances avec npm
|- node_modules/

// l'endroit où les fichiers de build seront mis
|- dist/

// Le dossier où vous allez modifier vos fichiers de code
//Là où va se trouver vos composants, services, etc..
|- src/
  |----- app/
      |----- app.component.css|html|spec.ts|ts
      |----- app.module.ts
  |----- assets/
  |----- environments/
      |----- environment.prod.ts|ts
  |----- favicon.ico
  |----- index.html
  |----- main.ts
  |----- polyfills.ts
  |----- styles.css
  |----- test.ts
  |----- tsconfig.app.json
  |----- tsconfig.spec.json
  |----- typings.d.ts

// la configuration globale de votre application
|- .angular-cli.json  // the main configuration file
|- .editorconfig      // editorconfig which is used in some VS Code setups
|- .gitignore
|- karma.conf.js
|- package.json
|- protractor.conf.js
|- README.md
|- tsconfig.json
|- tslint.json
```

Vous allez quasiment passer tout votre temps dans le dossier **src/app**. Ce dossier contient presque tous les fichiers dont vous avez besoin pour coder votre application. Les fichiers contenus dans ce dossier sont ensuite compilés dans le dossier **dist**.  Vous pouvez aussi installer des dependances avec le gestionnaire de package de node : **npm**. Ces dépendances seront installées dans le dossier **node_modules**.

## Démarrer notre application

il suffit d’executer la commande suivante :

```
ng serve
```
ou pour executer et ouvrir automatique l'application dans votre navigateur
```
ng serve -o
```

Résultat que vous devez avoir dans votre console :

![img ngServe](https://image.noelshack.com/fichiers/2019/23/5/1559913472-ngserve.png "img ngServe")

Et si vous ouvrez votre application dans votre navigateur à http://localhost:4200 vous devriez obtenir cette page :


![img ngServe](https://image.noelshack.com/fichiers/2019/23/5/1559913752-accueilang.png "img ngServe")

(Les 3 liens en bas à gauche sont des petits tutos qui vous permettront de vous familiariser avec Angular)

### Créer un composant avec Angular-CLI

```
ng g c identite-form
```

![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559914425-composantidentiteform.png "img compsantIdentiteForm")

La commande a créé un identite-form, les fichiers associés à ce composant :

    identite-form.component.html (pour le template)
    identite-form.component.css (pour le fichier style)
    identite-form.component.ts (pour le code métier du composant)
    identite-form.component.spec.ts (pour le fichier de test propre au composant)

(Remarque : 

Quand vous utilisez la commande ng g c, pensez au nom de votre composant et pas au nom de la classe.
Par exemple, si vous utilisez la commande ng g c identite-formComponent, vous allez créer un composant identite-formComponent**Component**.)

### Générer autre chose

Il est aussi possible de générer :

    Component : ng g component mycomponent
    Directive : ng g directive mydirective
    Pipe : ng g pipe mypipe
    Service : ng g service myservice
    Class : ng g class myclass
    Guard : ng g guard myguard
    Interface : ng g interface myinterface
    Enum : ng g enum myenum
    Module : ng g module mymodule

## Le modèle

Il contiendra les informations de notre identité.

```
ng g class identite-model/identite
```

![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559916023-identitemodel.png "img compsantIdentiteForm")

```typescript
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
  ) {
  }
}
```
![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559916211-model.png "img compsantIdentiteForm")

## Le component

Interaction avec l'utilisateur, Le component sera composé d'un contrôleur (.ts) ainsi que d'**un formulaire** (.html) muni d'un **champ de texte** et d'un **bouton soumettre**.

Exemple de formulaire à saisir dans identite-form/identite-form.component.html

(composant que nous avons créé plus haut)

```html
<div class="container">
  <div [hidden]="submitted">
    <h1>Identité</h1>
    <form [formGroup]="createIdentite" (ngSubmit)="onSubmit(createIdentite)">
      <div class="form-group">
        <label for="code_lieu_naissance">code_lieu_naissance</label>
        <input formControlName="code_lieu_naissance" type="text" class="form-control" id="code_lieu_naissance" required
               [(ngModel)]="model.code_lieu_naissance"
               [ngClass]="{ 'is-invalid': submitted && f.code_lieu_naissance.errors }"/>
        <div *ngIf="submitted && f.code_lieu_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.code_lieu_naissance.errors.required">code_lieu_naissance is required</div>
        </div>
      </div>

      <div class="form-group">
        <label for="code_pays_naissance">code_pays_naissance</label>
        <input formControlName="code_pays_naissance" type="text" class="form-control" id="code_pays_naissance" required
               [(ngModel)]="model.code_pays_naissance"
               [ngClass]="{ 'is-invalid': submitted && f.code_pays_naissance.errors }"/>
        <div *ngIf="submitted && f.code_pays_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.code_pays_naissance.errors.required">champs requis</div>
          <div *ngIf="f.code_pays_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>


      <div class="form-group">
        <label for="date_naissance">date_naissance</label>
        <input formControlName="date_naissance" type="text" class="form-control" id="date_naissance" required
               [(ngModel)]="model.date_naissance" [ngClass]="{ 'is-invalid': submitted && f.date_naissance.errors }"/>
        <div *ngIf="submitted && f.date_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.date_naissance.errors.required">champs requis</div>
          <div *ngIf="f.date_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="num_assure">num_assure</label>
        <input formControlName="num_assure" type="text" class="form-control" id="num_assure" required
               [(ngModel)]="model.num_assure" [ngClass]="{ 'is-invalid': submitted && f.num_assure.errors }"/>
        <div *ngIf="submitted && f.num_assure.errors" class="invalid-feedback">
          <div *ngIf="f.num_assure.errors.required">champs requis</div>
          <div *ngIf="f.num_assure.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="nom_naissance">nom_naissance</label>
        <input formControlName="nom_naissance" type="text" class="form-control" id="nom_naissance" required
               [(ngModel)]="model.nom_naissance" [ngClass]="{ 'is-invalid': submitted && f.nom_naissance.errors }"/>
        <div *ngIf="submitted && f.nom_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="liste_prenoms">liste_prenoms</label>
        <input formControlName="liste_prenoms" type="text" class="form-control" id="liste_prenoms" required
               [(ngModel)]="model.liste_prenoms" [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="nom_usage">nom_usage</label>
        <input formControlName="nom_usage" type="text" class="form-control" id="nom_usage" required
               [(ngModel)]="model.nom_usage" [ngClass]="{ 'is-invalid': submitted && f.nom_usage.errors }"/>
        <div *ngIf="submitted && f.nom_usage.errors" class="invalid-feedback">
          <div *ngIf="f.nom_usage.errors.required">champs requis</div>
          <div *ngIf="f.nom_usage.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="code_sexe">code_sexe</label>
        <input formControlName="code_sexe" type="text" class="form-control" id="code_sexe" required
               [(ngModel)]="model.code_sexe" [ngClass]="{ 'is-invalid': submitted && f.code_sexe.errors }"/>
        <div *ngIf="submitted && f.code_sexe.errors" class="invalid-feedback">
          <div *ngIf="f.code_sexe.errors.required">champs requis</div>
          <div *ngIf="f.code_sexe.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_departement">libelle_departement</label>
        <input formControlName="libelle_departement" type="text" class="form-control" id="libelle_departement" required
               [(ngModel)]="model.libelle_departement"
               [ngClass]="{ 'is-invalid': submitted && f.libelle_departement.errors }"/>
        <div *ngIf="submitted && f.libelle_departement.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_departement.errors.required">champs requis</div>
          <div *ngIf="f.libelle_departement.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_commune">libelle_commune</label>
        <input formControlName="libelle_commune" type="text" class="form-control" id="libelle_commune" required
               [(ngModel)]="model.libelle_commune" [ngClass]="{ 'is-invalid': submitted && f.libelle_commune.errors }"/>
        <div *ngIf="submitted && f.libelle_commune.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_commune.errors.required">champs requis</div>
          <div *ngIf="f.libelle_commune.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_pays">libelle_pays</label>
        <input formControlName="libelle_pays" type="text" class="form-control" id="libelle_pays" required
               [(ngModel)]="model.libelle_pays" [ngClass]="{ 'is-invalid': submitted && f.libelle_pays.errors }"/>
        <div *ngIf="submitted && f.libelle_pays.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_pays.errors.required">champs requis</div>
          <div *ngIf="f.libelle_pays.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_localite">libelle_localite</label>
        <input formControlName="libelle_localite" type="text" class="form-control" id="libelle_localite" required
               [(ngModel)]="model.libelle_localite"
               [ngClass]="{ 'is-invalid': submitted && f.libelle_localite.errors }"/>
        <div *ngIf="submitted && f.libelle_localite.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_localite.errors.required">champs requis</div>
          <div *ngIf="f.libelle_localite.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_marital">nom_marital</label>
        <input formControlName="nom_marital" type="text" class="form-control" id="nom_marital" required
               [(ngModel)]="model.nom_marital" [ngClass]="{ 'is-invalid': submitted && f.nom_marital.errors }"/>
        <div *ngIf="submitted && f.nom_marital.errors" class="invalid-feedback">
          <div *ngIf="f.nom_marital.errors.required">champs requis</div>
          <div *ngIf="f.nom_marital.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_naissance_pere">nom_naissance_pere</label>
        <input formControlName="nom_naissance_pere" type="text" class="form-control" id="nom_naissance_pere" required
               [(ngModel)]="model.nom_naissance_pere"
               [ngClass]="{ 'is-invalid': submitted && f.nom_naissance_pere.errors }"/>
        <div *ngIf="submitted && f.nom_naissance_pere.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance_pere.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance_pere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="liste_prenoms_pere">liste_prenoms_pere</label>
        <input formControlName="liste_prenoms_pere" type="text" class="form-control" id="liste_prenoms_pere" required
               [(ngModel)]="model.liste_prenoms_pere"
               [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms_pere.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms_pere.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms_pere.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms_pere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_naissance_mere">nom_naissance_mere</label>
        <input formControlName="nom_naissance_mere" type="text" class="form-control" id="nom_naissance_mere" required
               [(ngModel)]="model.nom_naissance_mere"
               [ngClass]="{ 'is-invalid': submitted && f.nom_naissance_mere.errors }"/>
        <div *ngIf="submitted && f.nom_naissance_mere.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance_mere.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance_mere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="liste_prenoms_mere">liste_prenoms_mere</label>
        <input formControlName="liste_prenoms_mere" type="text" class="form-control" id="liste_prenoms_mere" required
               [(ngModel)]="model.liste_prenoms_mere"
               [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms_mere.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms_mere.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms_mere.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms_mere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="button">
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite1')"
                class="btn btn-danger btn-lg btn-block">Localhost
        </button>
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite2')"
                class="btn btn-primary btn-lg btn-block">da058
        </button>
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite3')"
                class="btn btn-warning btn-lg btn-block">Kong
        </button>
      </div>
    </form>
  </div>
</div>
```
### Directives structurelles

Elles permettent de modifier la structure du DOM.

L'une de ces directives les plus utilisées est le **ngIf**

    Si l'expression associée à la directive est "false" alors l'élément et son contenu sont retirés du DOM (ou jamais ajoutés).

_app.component.html_
```html
<button *ngIf="isAvailable">identite</button>
```

_app.component.ts_
```typescript
...
export class AppComponent {
    isAvailable = false;
}
```
La directive structurelle **ngFor** permet de boucler sur un array et d'injecter les éléments dans le DOM.

_app.component.html_
```html
<ul>
    <li *ngFor="let book of bookList">{{ book.name }}</li>
</ul>
```
_app.component.ts_
```typescript
export class AppComponent {
    bookList = [
        {
            name: 'eXtreme Programming Explained'
        },
        {
            name: 'Clean Code'
        }
    ];
}
```

La directive **ngClass** permet d'attribuer à un élément HTML une classe qui peut évoluer dynamiquement. L'attribut ngClass accepte les conditions de 2 manières différentes. Elles doivent, dans tous les cas, retourner true ou false pour que le test soit valide.

La directive **ngStyle** vous permet de définir le style CSS sur un élément HTML de manière conditionnelle. Tout comme nous pourrions utiliser l'attribut de style sur l'élément HTML dans les projets non-Angular, nous pouvons utiliser ng-style dans les styles angular qui sont basés sur des conditions booléennes.

**ngModel** est utilisé pour lier entre eux des éléments HTML qui existent déjà.

**[(ngModel)]="model.body"** Défini un 'two-way data binding' sur l'attribut body du modèle. Cela signifie que si le champ est modifié par l'utilisateur, le modèle sera mis à jour automatiquement et si le code modifie le modèle, le contenu du champ sera mis à jour.

**ngForm**, le module de gestion des formulaires Angular, il faudra l'enregistrer (faire un **import**) à partir du @NgModule (fichier **app.module.ts**).

(ngSubmit): défini la méthode utilisée pour gérer la soumission du formulaire.

### Contrôleur du composent identite-form

```typescript
import {Component, OnInit} from '@angular/core';
import {Identite} from '../identite-model/identite';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IdentiteService} from '../identite-service/identite.service';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Get} from '../identite-model/get';

@Component({
  selector: 'app-identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.css']
})
export class IdentiteFormComponent implements OnInit {

  model = new Identite(69389, 'CDN', 15121999, 1920845625856, 'string', 'string', 'string', 0, 'string', 'string', 'string',
    'string', 'string', 'string', 'string', 'string', 'string');

  createIdentite: FormGroup;
  submitted = false;
  identiteCree = false;

  private get: Get[] = [];
  private getObservable: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private route: ActivatedRoute,
              private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.createIdentite = this.formBuilder.group({
      code_lieu_naissance: [69389, Validators.required],
      code_pays_naissance: ['CDN', Validators.required],
      date_naissance: [15121999, Validators.required],
      num_assure: [1920845625856, Validators.required],
      nom_naissance: ['string', Validators.required],
      liste_prenoms: ['string', Validators.required],
      nom_usage: ['string', Validators.required],
      code_sexe: [0, Validators.required],
      libelle_departement: ['string', Validators.required],
      libelle_commune: ['string', Validators.required],
      libelle_pays: ['string', Validators.required],
      libelle_localite: ['string', Validators.required],
      nom_marital: ['string', Validators.required],
      nom_naissance_pere: ['string', Validators.required],
      liste_prenoms_pere: ['string', Validators.required],
      nom_naissance_mere: ['string', Validators.required],
      liste_prenoms_mere: ['string', Validators.required],
    });
  }

  get f() {
    return this.createIdentite.controls;
  }

  onSubmit(buttonType): void {
    this.submitted = true;

    if (this.createIdentite.invalid) {
      this.router.navigate(['/identite-invalide']);
    }


    const formValue = this.createIdentite.value;
    const identiteTrue = this.identiteCree = true;
    const newIdentite = new Identite(
      formValue.code_lieu_naissance,
      formValue.code_pays_naissance,
      formValue.date_naissance,
      formValue.num_assure,
      formValue.nom_naissance,
      formValue.liste_prenoms,
      formValue.nom_usage,
      formValue.code_sexe,
      formValue.libelle_departement,
      formValue.libelle_commune,
      formValue.libelle_pays,
      formValue.libelle_localite,
      formValue.nom_marital,
      formValue.nom_naissance_pere,
      formValue.liste_prenoms_pere,
      formValue.nom_naissance_mere,
      formValue.liste_prenoms_mere
    );

    if (buttonType === 'createIdentite1') {
      this.identiteService.createIdentite1(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite2') {
      this.identiteService.createIdentite2(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite3') {
      this.identiteService.createIdentite3(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }
  }

  getTest() {
    this.httpClient.get(`http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/da058`).subscribe((res: any[]) => {
      console.log(res);
      this.get = res;
    });
  }
}
```

La méthode subscribe() permet d'écouter le flux d'événements d'un Observable. Cette méthode supporte trois paramètres: next, error et complete. Il est donc possible de lui fournir des fonctions de callback.

## Le service

### Interagir avec l'API REST

La prochaine étape consiste à créer un service qui aura pour mandat de soumettre les données du commentaire grâce à une requête POST envoyée à l'API REST.

La logique sera encapsulée dans la méthode createIdentite(). Cette méthode retournera un objet Observable sur un commentaire. Comme nous l'avons vu préalablement, le Component s'est inscrit à cet observable avec la méthode subscribe() afin d'être informé du flux d'information entre le service et l'API REST. En fait, ce qui nous intéresse, c'est de savoir quand les données du serveur seront disponible chez le client.

Créons le service :

```
$ ng g s identite-service
```
Le code suivant présente la classe identiteService. Notez l'injection de dépendance dans le constructeur. La classe HttpClient est nécessaire afin de communiquer avec le serveur qui héberge l'API REST.

```typescript

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  public identiteConnected;

  private baseUrl= `http://localhost:9091/certification/identities`;
  
  constructor(private httpClient: HttpClient) {}

  public createIdentite(identite: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
    };

    const body = JSON.stringify({identite});

    return this.httpClient.post(`${this.baseUrl}`, body, httpOptions);

  }
```

# Conclusion

On peut dire que ce framework est un outil très performant pour la création d'applications web. L'utilisation de TypeScript permet d'avoir un code plus structuré et permet d'utiliser des décorateurs. Les composants facilitent le développement d'applications à grande échelle tout en conservant la maintenabilité. Ils permettent également d'organiser le code et de le décomposer en un niveau très granulaire. On peut séparer les services / la logique métier des composants et des vues. L'injection de dépendances nous permet d'utiliser des patterns courants dans la plupart des frameworks backend.



