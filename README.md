# Lab « Cellule de crise CentreCall » (BTS SIO · U.7 séance 3 · 4 h)

Lab de cybersécurité 100 % navigateur : aucune installation, aucun serveur, aucune donnée envoyée.
Cas fictif : CentreCall, ComPlus, noms, comptes et IBAN sont inventés.

## Contenu
| Fichier | Rôle |
|---|---|
| `index.html` | Le lab pour les étudiants (9 missions, terminal simulé, score automatique sur 45, note sur 20) |
| `verif.html` | Page formateur : vérifie qu'un compte rendu n'a pas été modifié |
| `apps-script.gs` | Script Google à coller pour recevoir les réponses dans une feuille (option B) |
| `.nojekyll` | Évite le traitement Jekyll de GitHub Pages |

## Missions (240 min)
M0 Terminal (15) · M1 Empreintes (20) · M2 Mots de passe (25) · M3 Hameçonnage (25) · pause (10) · M4 Chaîne d'attaque (25) · M5 Profils (20) · M6 Risques (25) · M7 Plan sous budget (25) · M8 Crise (30) · débrief (15) · brief (5).

## Déployer sur GitHub Pages
1. Créez un dépôt (public) et déposez ces fichiers à la racine (« Add file » puis « Upload files »).
2. `Settings` → `Pages` → `Build and deployment` → Source : `Deploy from a branch` → branche `main`, dossier `/ (root)` → `Save`.
3. Après une minute, le lab est sur `https://<votre-compte>.github.io/<depot>/`. Donnez ce lien aux étudiants (Moodle).
4. Dépôt privé : GitHub Pages sur dépôt privé demande une offre payante ; sinon, gardez le dépôt public (aucune donnée sensible dedans).

## Récupérer les résultats
### Option A : dépôt Moodle
Chaque binôme clique sur « Générer le compte rendu » (fin de page), copie le texte et le dépose sur Moodle.
Le compte rendu contient les noms, le score par mission, la note sur 20, la date et un **code de contrôle**.
Collez-le dans `verif.html` : la page recalcule le code et affiche « Code valide » ou « Code invalide ».

### Option B : recevoir les réponses automatiquement (Google Sheets)
Chaque binôme clique sur « Envoyer au formateur » : son compte rendu arrive dans une feuille Google Sheets, une ligne par binôme
(noms, total, note sur 20, score de M0 à M8, budget, note de synthèse, **code valide : oui/NON**). Mise en place, 5 minutes :
1. Créez une feuille Google Sheets vide (nom libre).
2. `Extensions` → `Apps Script`. Supprimez le code existant, collez le contenu de `apps-script.gs`, enregistrez.
3. `Déployer` → `Nouveau déploiement` → type `Application Web` → Exécuter en tant que : **Moi** → Qui a accès : **Tout le monde** → `Déployer`. Autorisez l'accès à votre feuille.
4. Copiez l'URL de l'application Web (elle se termine par `/exec`).
5. Dans `index.html`, trouvez la ligne `const ENDPOINT = "";` et collez l'URL entre les guillemets. Poussez le fichier sur GitHub.
6. Testez avec un faux binôme : une ligne doit apparaître dans l'onglet « Réponses ». Si vous modifiez le script plus tard, refaites `Déployer` → `Gérer les déploiements` → nouvelle version.

Tant que `ENDPOINT` est vide, le bouton d'envoi reste caché et seul le dépôt Moodle fonctionne (option A).
Le navigateur ne peut pas lire la réponse du script : l'étudiant voit « Envoyé » même si l'envoi a échoué. Vérifiez la feuille en fin de séance
et gardez le dépôt Moodle comme secours. L'URL du script est visible dans le code de la page : une personne mal intentionnée pourrait y envoyer de fausses lignes ;
la colonne « Code valide » les repère.

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
