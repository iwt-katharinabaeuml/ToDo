//const content = 'Some content!';
/**
 * this function is here to write and read to files initial constructor is the {content} which needs to be a string;
 */
 class fileFunction {
    constructor(
      key= "TempSaveStorage",
    ){}
    writesessionStorage(content){
      try{
      sessionStorage.setItem(key,content)
      }
      catch(error){
        console.error(error);

      }
      };

    readFile()
    {
        var Anderertest = sessionStorage.getItem(key)
        return Anderertest;
    }
  }
