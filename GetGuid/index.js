module.exports = async function (context, req) {
    // Generate a new GUID
    //context.log('JavaScript HTTP trigger function processed a request.');
    const guid = generateGuid();
    const result = '{AZURE:' + guid + '}'

    // Return the GUID as a string
    context.res = {
        body: result
    };
};

function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}