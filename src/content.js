chrome.runtime.onMessage.addListener(function (request) {
    if (!request) return;

    if (request.command === 'FormatText') {
        formatReleaseNotes();
    }
});

function formatReleaseNotes() {
    var $releaseNotesTextArea = $('#editcopy'),
        releaseNotesText;

    if ($releaseNotesTextArea.length > 0) {
        releaseNotesText = $releaseNotesTextArea.val();
        $releaseNotesTextArea.val(removeUnneededSymbols(releaseNotesText));
    } else {
        alert('Release Notes haven\'t been found');
    }
}

function removeUnneededSymbols(text) {
    text = text.replace(/<li>\[<a href='/gi, '')
               .replace(/<\/li>/gi, '')
               .replace(/'>.*?<\/a>\]/gi, '')
               .replace(/<h2>/gi, '\n')
               .replace(/<\/h2>/gi, '')
               .replace(/<ul>\n/gi, '')
               .replace(/<\/ul>/gi, '')
               .replace(/  /gi, '')
               .replace(/\n\n/gi, '\n')
               .replace(/&#39;t/gi, '\'')
               .replace(/&amp;/gi, '&')
               .replace(/&quot;/gi, '"');

    text = text.replace(/\n/i, '');

    return text;
}