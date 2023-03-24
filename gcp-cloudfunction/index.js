const functions = require('@google-cloud/functions-framework');

functions.http('oapi', (req, res) => {
  var guid = generateGuid();
  res.send(`GCP: ${guid}`);
});

function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}