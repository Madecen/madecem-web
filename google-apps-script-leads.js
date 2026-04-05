function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
      sheet.appendRow([
        'timestamp',
        'formType',
        'sourcePage',
        'name',
        'email',
        'company',
        'phone',
        'message',
        'privacyAccepted',
        'marketingAccepted',
        'userAgent'
      ]);
    }

    var data = e && e.parameter ? e.parameter : {};

    if (data.website) {
      return jsonResponse({ ok: true, spam: true });
    }

    sheet.appendRow([
      new Date(),
      data.formType || '',
      data.sourcePage || '',
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.message || '',
      data.privacyAccepted || '',
      data.marketingAccepted || '',
      data.userAgent || ''
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
