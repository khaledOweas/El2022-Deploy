export const environment = {

    // ---------------------- DONT CHANGE THESE TWO LINE ANYWAY ----------------

    fileServer: 'https://up.elhamylabs.com',
    updatedDesktopVersion: 'https://up.elhamylabs.com/app.rar',
    generator: 'http://localhost:5043/',

    // ---------------------- DONT CHANGE THESE TWO LINE ANYWAY ---------------- 

    // production: true,
    // testMode: true,
    // apiUrl: 'https://atest.elhamylabs.com',
    // chatHubUrl: 'https://atest.elhamylabs.com/chatHub',
    // authHub: 'https://atest.elhamylabs.com/authHub',
    // labSecretId: 'el01CoreTest'

    production: true,
    testMode: false,
    apiUrl: 'https://a.elhamylabs.com',
    chatHubUrl: 'https://a.elhamylabs.com/chatHub',
    authHub: 'https://a.elhamylabs.com/authHub',
    labSecretId: 'el01Core'

    // production: true,
    // testMode: false,
    // apiUrl: 'http://100.100.100.112',
    // chatHubUrl: 'http://100.100.100.112/chatHub',
    // authHub: 'http://100.100.100.112/authHub',
    // labSecretId: 'el01LocalCore' // 'el01CoreTest'  //'el01Core' 


    // production: false,
    // testMode: false,
    // apiUrl: 'https://localhost:7108',
    // chatHubUrl: 'https://localhost:7108/chatHub',
    // authHub: 'https://localhost:7108/authHub',
    // labSecretId: 'el01CoreTest' // 'el01CoreTest'  //'el01Core' 

};

// labSecretId: 'el01CoreTest' //'el01Core'

// windows :
// ng build --output-path='D:\Khaled\Data\Projects\EL2022-Deploy' --delete-output-path false
// ng build --output-path='D:\Khaled\Data\Projects\EL2022-Test-Deploy' --delete-output-path false

// mac :
// ng build --output-path='/Users/khaledoweas/Khaled/Programming/El2022-Deploy/ekoweb-ui'
// dotnet publish -c Release -r win10-x64