import JsonP from 'jsonp';
import axios from 'axios';
import {Modal} from 'antd';

export default class Axios{

    static jsonp(options){
        return new Promise((resolve, reject) =>{
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response){
                debugger;
                if(response.status === 'success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "block"
        }

        let baseAPI = "https://easy-mock.com/mock/5b5e5bded041e45d5c3c5241/shared-bikes";
        return new Promise((resolve, reject)=> {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseAPI,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById("ajaxLoading");
                    loading.style.display = "none"
                }
                if(response.status === 200){
                    let res = response.data;
                    console.log("res code:"+ res.code)
                    if(res.code === 0){
                        // console.log(res)
                        resolve(res)
                    }else{
                        Modal.info({
                            title: "Prompt",
                            content: "Error"
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        })
    }
}