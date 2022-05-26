export function nightMode(data) {
    if(data.dt < data.sys.sunrise){
        return 'black'
    }else{
        return 'blue'
    }
}