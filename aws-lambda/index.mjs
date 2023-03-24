function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const handler = async(event) => {
    // TODO implement
    
    const guid = generateGuid();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({AWS: guid}),
    };
    return response;
};