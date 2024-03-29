# neoCV
New WebSite
Single Page Application

## Ajouter une slide

- Créer un fichier HTML
- Dans `index.html` ajouter une section avec un id choisi arbitrairement
- Dans `loadAllSection.js` ajouter une ligne avec l'id de la section ainsi que le chemin du fichier
- Dans `loadAscensor.js` :
    - Ajouter dans `ascensorFloorName` le nom de la section créée (ce nom peut être différent de l'id)
    - Ajouter dans `direction` la position de la section :
    
    SCHEMA (Provisoire) DU SITE :
```
| HOME => [0,0]  | FORMATION => [0,1] | EXP => [0,2]         | COMP => [0,3]  | LANG => [0,4]     | HOBBY => [0,5] | CONTACT => [0,6] |
|----------------|--------------------|----------------------|----------------|-------------------|----------------|------------------|
| ABOUT => [1,0] | ECV => [1,1]       | BForBank => [1,2]    | DEV => [1,3]   | FR - ENG => [1,4] | HOBBY => [1,5] |                  |
|                | EEMI => [2,1]      | MindMatcher => [2,2] | DESIGN =>[2,3] |                   |                |                  |
|                | EPITECH => [3,1]   | microDON => [3,2]    |                |                   |                |                  |
|                | BAC => [4,1]       | Aragon => [4,2]      |                |                   |                |                  |
```    

Liste des Technos :
- HTML 5
- CSS 3
- MaterializeCSS
- JQuery 3.4
- Ascensor.js
- Python3
- Flask
- Single Page App

Run Flask on Raspberry NAS as server
Initialize Python venv :

$ python3 -m venv venv
// Le second venv est un nom d'environnement arbitraire

$ Run the venv :
. venv/bin/activate

Quit the venv :
$ deactive

Run project on Server :
$ sudo nohup python3 app.py > log.txt 2>&1 &

---

En cas de problème : Vérifier les éléments dans l'ordre :

La commande `sudo nohup python3 app.py > log.txt 2>&1 &` necessite le mot de passe root
Lancer dans un premier temps la commande à blanc `sudo python3 app.py`

- OVH : 
Vérifier que les DynHost pointent sur la même cible

- Box internet :
NAT/PATérifier que les NAT/PAT sont toujours OK

- App.py :
Vérifier L'ip et le Port dans le fichier : 0.0.0.0:8800

cv.vguilbaud.fr => OVH => Box => NAS => App.py
