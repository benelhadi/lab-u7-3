// Google Apps Script : reçoit les comptes rendus du lab et les range dans une feuille Google Sheets.
// Mise en place : voir README.md (section « Recevoir les réponses automatiquement »).
const SALT = 'CC2026-U7S3-';   // doit être identique à SALT dans verif.html et à la chaîne dans index.html
const SHEET_NAME = 'Réponses';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const t = String(data.report || '');
    const g = re => ((t.match(re) || [])[1] || '').trim();
    const names = g(/Binôme : (.*)/), when = g(/Date : (.*)/), code = g(/Code de contrôle : ([0-9A-F]{12})/);
    const note20 = g(/Note sur 20 : (.*)/), total = g(/Score : ([\d.,]+) \/ 45/);
    const sl = (t.match(/Score : .*\((.*?) ;/) || [])[1] || '';
    const sc = [...sl.matchAll(/M(\d) ([\d.,]+)/g)].map(m => String(parseFloat(m[2].replace(',', '.'))));
    const canon = names + '|' + sc.join(',') + '|' + when;
    const expected = sha256Hex(SALT + canon).slice(0, 12).toUpperCase();
    const valid = sc.length === 9 && expected === code ? 'oui' : 'NON';
    const budget = g(/Budget engagé \(M7\) : (.*)/);
    const synth = ((t.match(/NOTE DE SYNTHÈSE : ([\s\S]*?)\n\nIncident/) || [])[1] || '').trim();

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(['Reçu le', 'Binôme', 'Total / 45', 'Note / 20', 'M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8',
                    'Budget M7', 'Code valide', 'Date (poste)', 'Code', 'Note de synthèse', 'Compte rendu complet']);
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), names, total, note20, ...sc.map(Number), budget, valid, when, code, synth, t]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('erreur : ' + err);
  }
}

function sha256Hex(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8)
    .map(b => ('0' + (b < 0 ? b + 256 : b).toString(16)).slice(-2)).join('');
}
