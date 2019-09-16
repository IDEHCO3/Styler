import axios from 'axios';

export const api = axios.create({ baseURL: 'http://ggt-des.ibge.gov.br/styles/' });

// make a array of objects with {name: "aaa", url: "www.site.com/aaa"} format
export function transformEntryPointInArray(json){
    
    if(!json) return null

    var List = []
    let nameList = Object.keys(json) // create a array of keys
    let urlList = Object.values(json) // create a array of values

    for (let item = 0; item < nameList.length; item++){

        let SingleObject = {
            name: nameList[item], 
            url: urlList[item]
        }

        List.push(SingleObject)
    }
    return List
}