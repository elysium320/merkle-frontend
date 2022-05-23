import * as Papa from 'papaparse';

export const getCSVData = async () => {
    const obj = {}
    try {
        let responseText = await fetch('data.csv')
        responseText = await responseText.text()
        var data = Papa.parse(responseText);
        const csv_data = data.data.slice(1, data.data.length);
        console.log(csv_data);
        csv_data.map(data => obj[data[0]] = data[1])
        Object.keys(obj).forEach(key => {
            if (obj[key] === undefined) {
                delete obj[key];
            }
        });
        console.log(obj);
        return obj;
    } catch (err) {
        console.log(err)
        return obj;
    }
}