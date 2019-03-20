const baseUrl = "https://test-op.quixmart.com";
const mobilePattern = /^(0|86|17951)?(12[0-9]|13[0-9]|15[012356789]|16[012356789]|17[123456789]|19[123456789]|18[0-9]|14[57])[0-9]{8}$/;

function ajax(url,option) {
      const that = this;
      if(url && typeof url!="string") return ;
      const promise = new Promise(function(resolve, reject){
      let requestOption = {};
      Object.assign(requestOption,{url:url});   
          if (option && option.header){
              Object.assign(requestOption,option.headers)
          }else{
              Object.assign(requestOption,{header:{
                "Accept": "*/*",
                "Authorization": "Bearer "+that.accessToken,
                "X-Accept-Locale": that.languageType,
              }})
          }
          if (option && option.method){
              Object.assign(requestOption,{method: option.method})
          }else{
              Object.assign(requestOption,{method: 'GET'})
          }
          if (option && option.data){
              Object.assign(requestOption,{data:option.data})
          }
          if (option && option.dataType){
              Object.assign(requestOption,option.dataType)
          }else{
              // Object.assign(requestOption,{dataType: 'json'})
          }
          if (option && option.timeout){
              Object.assign(requestOption,{timeout:option.timeout})
          }
          Object.assign(requestOption,{
              success: (res) => {
                  resolve(res);
              },
              fail: (res) => {
                  reject(res);
              },
              complete: (res) => {
                 // wx.hideLoading();
              }
          });
          $.ajax(requestOption);
      });

      return promise;
  }