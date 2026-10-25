# Lab « Cellule de crise CentreCall » (BTS SIO · U.7 séance 3 · 4 h)

Lab de cybersécurité 100 % navigateur : aucune installation, aucun serveur, aucune donnée envoyée.
Cas fictif : CentreCall, ComPlus, noms, comptes et IBAN sont inventés.

## Contenu
| Fichier | Rôle |
|---|---|
| `index.html` | Le lab pour les étudiants (9 missions, terminal simulé, score automatique sur 45, note sur 20) |
| `verif.html` | Page formateur : vérifie qu'un compte rendu n'a pas été modifié |
| `.nojekyll` | Évite le traitement Jekyll de GitHub Pages |

## Missions (240 min)
M0 Terminal (15) · M1 Empreintes (20) · M2 Mots de passe (25) · M3 Hameçonnage (25) · pause (10) · M4 Chaîne d'attaque (25) · M5 Profils (20) · M6 Risques (25) · M7 Plan sous budget (25) · M8 Crise (30) · débrief (15) · brief (5).

## Déployer sur GitHub Pages
1. Créez un dépôt (public) et déposez ces fichiers à la racine (« Add file » puis « Upload files »).
2. `Settings` → `Pages` → `Build and deployment` → Source : `Deploy from a branch` → branche `main`, dossier `/ (root)` → `Save`.
3. Après une minute, le lab est sur `https://<votre-compte>.github.io/<depot>/`. Donnez ce lien aux étudiants (Moodle).
4. Dépôt privé : GitHub Pages sur dépôt privé demande une offre payante ; sinon, gardez le dépôt public (aucune donnée sensible dedans).

## Récupérer les résultats
Chaque binôme clique sur « Générer le compte rendu » (fin de page), copie le texte et le dépose sur Moodle.
Le compte rendu contient les noms, le score par mission, la note sur 20, la date et un **code de contrôle**.
Collez-le dans `verif.html` : la page recalcule le code et affiche « Code valide » ou « Code invalide ».

## Limite à connaître
GitHub Pages est statique : la correction se fait dans le navigateur de l'étudiant. Le code de contrôle détecte
une modification du texte du compte rendu, mais un étudiant très motivé pourrait lire le code source de la page.
Pour une note officielle, croisez avec la note de synthèse et un oral court.

## Terminal simulé (lecture seule)
Commandes : `ls`, `cat`, `head`, `tail`, `wc`, `grep`, `sort`, `uniq`, `cut`, `awk '{print $N}'`, `sha256sum`, `diff`,
`echo`, `pwscore`, `history`, `clear`, avec tubes `|`. Redirections et commandes d'écriture désactivées.

## Personnaliser
Les données (CSV, journaux, scénarios, barème) sont en tête du script de `index.html`.
Pour changer le sel du code de contrôle, modifiez `SALT` dans `verif.html` et la chaîne `CC2026-U7S3-` dans `index.html`.
