function dontSpillTheBeans(secret){
    return {
        getSecret(){
            return secret;
        },
        setSecret(newSecret){
            secret = newSecret;
            return secret;
        }
    };
}