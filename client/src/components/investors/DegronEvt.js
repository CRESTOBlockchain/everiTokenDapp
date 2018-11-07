

    var apiUser = null;
    var apiOwner = null;
    var userExist = null;
    var version = 3;
    var versionCheck = null;
    
  

    export async function userExists(){

        //check databse if user exists
        //for demonstration purposes
        if (userExist){
            //retrieve their wallet from database
            //maybe just scan the qr code of the seller by phone and pay
    
        }
        else{
            //create wallet
           // let newUserPrivatekey = await EVT.EvtKey.randomPrivateKey();
           // let newUserPublicKey = EVT.EvtKey.privateToPublic(key);
           //store in database or on user's phone
        }
    
    }
    
    export async function investEVT(){
        
            document.getElementById("investClear").innerHTML = "Investing.. (Please be patient, may take up to 10 seconds)";

            //NOT SECURE WAY, just for demonstration purposes
            let ownerKeyPublic = "EVT6QpgkCXNRMoe53dzTfZDs8ipwDq5esXA6KyEF6jRFpWLBA1ppk";
            let ownerKeyPrivate = "5Jk1tWkYXMSWcnwBG3aRNvfCNaGfizX6axF7rpfmzuMmtFzJhXo"
            let userKeyPublic = "EVT7mo5QXe86bd3J27Gn4cQpf7VVntcZeF86Kw3baNgGFsMLK9atg";

            //get apiOwner to transfer Degron token to apiUser
            const network = {
            host: 'testnet1.everitoken.io', 
            port: 8888,                     
            protocol: 'http'               
            };
    
            // get apiUser instance
            apiOwner = await window.EVT({
            endpoint: network,
            keyProvider: [ ownerKeyPrivate ] 
            });


            //invest user defined amount;
            let userEVT = document.getElementById("sendEVT").value;
            
            let ownerBalanceBefore = await apiOwner.getFungibleBalance(ownerKeyPublic, 1);
            
            
            let userTRX = await apiUser.pushTransaction(
            { maxCharge: 100000 },   // limit of the transaction fee
            new window.EVT.EvtAction("transferft", {
                from: userKeyPublic, // sender
                to: ownerKeyPublic, // receiver
                number: userEVT + ".00000 S#1", // S#1 means the No 1 fungible token (EVT token)
                memo: "Investor" // Comment or extra data
            })
        );

        let ownerBalanceAfter = await apiOwner.getFungibleBalance(ownerKeyPublic, 1);

        //make sure owner balance is increased after transfer or else return
        if(ownerBalanceAfter <= ownerBalanceBefore)
        return;

        //transfer evt to owner
        //check transfer is complete
        //transfer degron to user     
            
        let ownerTRX = await apiOwner.pushTransaction(
        { maxCharge: 100000 },   // limit of the transaction fee
        new window.EVT.EvtAction("transferft", {
            from: ownerKeyPublic, // sender
            to: userKeyPublic, // receiver
            number: userEVT + ".00000 S#567", // S#1 means the No 1 fungible token (EVT token)
            memo: "Customer" // Comment or extra data
        })
        );
        //alert("Transfer complete");
        document.getElementById("investClear").innerHTML = "Invested!";
        document.getElementById("sendEVT").value = '';
        document.getElementById("deg").value = "loading degron";
        let deg = await apiUser.getFungibleBalance(userKeyPublic, 567);   
        document.getElementById("deg").value = deg;
       }


    export async function importWallet(){
        
        //alert("okay");
        let userKeyPrivate = "5K9esKA7AKFQ7JpCRPvCMPRozTynhdahHYVo64v2CWXQjLgrNto";
        let userKeyPublic = "EVT7mo5QXe86bd3J27Gn4cQpf7VVntcZeF86Kw3baNgGFsMLK9atg";

        const network = {
        host: 'testnet1.everitoken.io', 
        port: 8888,                     
        protocol: 'http'               
        };

        // get apiUser instance
        apiUser = await window.EVT({
        endpoint: network,
        keyProvider: [ userKeyPrivate ] 
        });

        try{
            if(apiUser != null){
                document.getElementById("status").value = "Connected";
                var version = 3;
                let info = await apiUser.getInfo();
                let apiVersion = info.evt_api_version.split(".")[0];
                document.getElementById("version").value = info.evt_api_version;

                //version check
                if(apiVersion == version)
                    versionCheck = true;

                //if invalid version prevent code from running
                else {
                    versionCheck = false;
                    return;
                }
                    
                
             }
             else{
                 alert("EveriToken api is not ready, be patient");
             }
            }
            catch(e){
                console.log(e.message);
            }

        try{
            
            document.getElementById("evt").value = "loading evt";
            let evt = await apiUser.getFungibleBalance(userKeyPublic, 1);
            document.getElementById("evt").value = evt;
            document.getElementById("deg").value = "loading degron";
            let deg = await apiUser.getFungibleBalance(userKeyPublic, 567);   
            document.getElementById("deg").value = deg;
        }
        catch(e)
        {
            document.getElementById("evt").value = e.message;
            document.getElementById("deg").value = e.message;
        }
    }