import axios from "axios"
import IDataList from "../model/IDataList"


const getDataFromServer = () => {
   return  axios.get<IDataList[]>('http://localhost:3000/items')
   .then(res => res.data)

}

const pushDataToServer = (newExepense :Omit<IDataList,'id'>) => {
   return axios.post<IDataList[]>(
    'http://localhost:3000/items',
    newExepense,
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
   ).then (res =>res.data)
};

export{
    getDataFromServer,pushDataToServer
}