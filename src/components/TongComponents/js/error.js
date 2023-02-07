/**
 * 错误捕获
 * @param {function} fn1 try
 * @param {function} fn2 catch
 * @param {function} fn3 finally
 */
export const catchError = async function(fn1,fn2,fn3){
    try{
        fn1 && await fn1()
    }
    catch(err){
        console.log(err)
        fn2 && await fn2()
    }
    finally{
        fn3 && await fn3()
    }
}