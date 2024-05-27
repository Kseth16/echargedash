// 
// const express= require('express');
import express from 'express';
// const sql = require('mssql');
import sql from 'mssql';

import cors from 'cors';

const app=express();

const port="3000";

// const config = {
//     server: 'echargeup.database.windows.net',
//     //echargeup.database.windows.net
//     database: 'EchargeupCentral',
//     //'EchargeupCentral'
//     user: 'Ecentral',
//     //Ecentral
//     password: 'ISOURSE@123',
//     // ISOURSE@123
//     options: {
//       encrypt: true,
//     },
//   };


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const dbConfig = {
    user: 'Ecentral', 
    password: 'ISOURSE@123',
    server: 'echargeup.database.windows.net', 
    database: 'EchargeupCentral', 
    options: {
        encrypt: true
    }
};

/*

 SELECT COUNT(*) AS Lessthan4
        FROM (
            SELECT Phone_Number,
                   SUM(CASE 
                        WHEN [Phone_Social_Premium.a23games] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.amazon] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.byjus] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.flipkart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.housing] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.indiamart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.instagram] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.jeevansaathi] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.jiomart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.my11] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.paytm] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.rummycircle] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.shaadi] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.swiggy] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.whatsapp] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.yatra] = 'Account Found' THEN 1 
                        ELSE 0 
                   END) AS AccountFoundCount
            FROM [dbo].[Risk_score]
            GROUP BY Phone_Number
            HAVING SUM(CASE 
                        WHEN [Phone_Social_Premium.a23games] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.amazon] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.byjus] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.flipkart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.housing] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.indiamart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.instagram] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.jeevansaathi] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.jiomart] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.my11] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.paytm] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.rummycircle] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.shaadi] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.swiggy] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.whatsapp] = 'Account Found' THEN 1 
                        WHEN [Phone_Social_Premium.yatra] = 'Account Found' THEN 1 
                        ELSE 0 
                   END) < 4
        ) AS UsersWithLessThan4Accounts;
*/

//define API endpoint
app.get('/api/getsocialdata', async (req, res) => {
    try {
        // Connect to the database
        await sql.connect(dbConfig);

        const query = `
            SELECT [Phone_Number]
            ,[Phone_Social_Premium.a23games]
            ,[Phone_Social_Premium.amazon]
            ,[Phone_Social_Premium.byjus]
            ,[Phone_Social_Premium.flipkart]
            ,[Phone_Social_Premium.housing]
            ,[Phone_Social_Premium.indiamart]
            ,[Phone_Social_Premium.instagram]
            ,[Phone_Social_Premium.jeevansaathi]
            ,[Phone_Social_Premium.jiomart]
            ,[Phone_Social_Premium.my11]
            ,[Phone_Social_Premium.paytm]
            ,[Phone_Social_Premium.rummycircle]
            ,[Phone_Social_Premium.shaadi]
            ,[Phone_Social_Premium.swiggy]
            ,[Phone_Social_Premium.whatsapp]
            ,[Phone_Social_Premium.yatra]
            FROM [dbo].[Risk_score]
        `;

        // Execute the query
        const result = await sql.query(query);

        // Send the result as JSON response
        // res.json(result.recordset);

        // Count the number of users with more than 4 "Account Found" entries
        let usersWithMoreThanFourAccounts = 0;
        let usersWithMoreThanFourLessThan8Accounts=0;
        let usersWithMoreThanEightAccounts=0;
        result.recordset.forEach(entry => {
            let accountFoundCount = 0;
            Object.values(entry).forEach(value => {
                if (value === "Account Found") {
                    accountFoundCount++;
                }
            });
            if (accountFoundCount < 4) {
                usersWithMoreThanFourAccounts++;
            }

            if (accountFoundCount > 4 && accountFoundCount < 8) {
                usersWithMoreThanFourLessThan8Accounts++;
            }

            if (accountFoundCount > 8) {
                usersWithMoreThanEightAccounts++;
            }

        });


        const datatosend=[{
            datalessthan4:usersWithMoreThanFourAccounts,
            databetween4and8: usersWithMoreThanFourLessThan8Accounts,
            datamorethan8: usersWithMoreThanEightAccounts,
        }];

        res.json(datatosend);
        console.log(`Total users with more than 4 accounts found: ${usersWithMoreThanFourAccounts}`);
    } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).send("Internal Server Error");
    } finally {
        // Close the SQL connection
        await sql.close();
    }
});



app.post('/api/insert-data', async (req,res) =>{
    try{

        const{
            firstName,
            lastName,
            email,
            password,
            address,
            city,
            state,
            zipCode,
            clearanceLevel,   
        } = req.body;



        await sql.connect(dbConfig);

  

    const query = `
    INSERT INTO adduser_test ([First Name], [Last Name], [email], [Password], [Address], [City], [State], [Zip], [Clearance Level])
    VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${address}', '${city}', '${state}', '${zipCode}', '${clearanceLevel}')
`;




await sql.query(query);

        
        res.status(200).send('Data inserted sucessfully');

    }catch (error){
        console.error(error);
        res.status(500).send('internal Server Error');
    } finally {
        await sql.close();
    }
});



//get the clearance role 

app.post('/api/getrole', async (req,res) =>{




});




//return true if password and username combo exist or false if not
app.post('/api/loginpage', async (req,res) =>{

    try{

const {
    email,
    password,
}= req.body;

await sql.connect(dbConfig);

const query=`
SELECT COUNT(*) AS count_matching_records
FROM adduser_test
WHERE [email] = '${email}' AND [Password] = '${password}';

`

const result= await sql.query(query);

const matchingrecords = result.recordset[0].count_matching_records;

if (matchingrecords > 0) {
    res.json(true);
} else {
    res.json(false);
}


    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');

    }finally{
        await sql.close();


    }


});

app.get('/api/getriskscore',async (req,res) =>{
    try{

        // const {
        //     driverID,
        //     mobileNumber,
        // }= req.body;


        await sql.connect(dbConfig);

        const query=`
        SELECT [Phone_Number],[name],[Risk_Model.alternateRiskScore],[Risk_Model.digitalFootprint],[Risk_Model.identityConfidence] ,[Risk_Model.socialFootprintScore],[Risk_Model.telecomRisk] ,[Zone],[City],[State]FROM [dbo].[Risk_score]
        `

const result= await sql.query(query);

res.json(result);



    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');

    }finally{
        await sql.close();

    }

})


app.get('/api/gettest', async (req,res) =>{

    try{

        await sql.connect(dbConfig);
     const result = await sql.query("SELECT * FROM Risk_Score");
     res.json(result);



    }catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        await sql.close();
    }
})


app.get('/api/businessinsight', async (req,res) =>{

    try{
        //connect to the database
        await sql.connect(dbConfig);

        // var result=[];
        //Query the database to retrieve all data

       
        const totalupiresult= await sql.query("SELECT [Phone_to_Name.source], COUNT(*) AS value_count FROM Risk_score WHERE [Phone_to_Name.source] IS NOT NULL AND [Phone_to_Name.source] <> '' GROUP BY [Phone_to_Name.source];");

        // const networksused= await sql.query("SELECT [Phone_Network.currentNetworkName], COUNT(*) AS value_count FROM Risk_score WHERE [Phone_Network.currentNetworkName] IS NOT NULL AND [Phone_Network.currentNetworkName] <> '' GROUP BY [Phone_Network.currentNetworkName] ;");
        

        const networksused = await sql.query("SELECT [Phone_Network.currentNetworkName] AS networknames, COUNT(*) AS value_count FROM Risk_score WHERE [Phone_Network.currentNetworkName] IS NOT NULL AND [Phone_Network.currentNetworkName] <> '' GROUP BY [Phone_Network.currentNetworkName];");

        const totalriskscore= await sql.query("Select AVG([Risk_Model.alternateRiskScore]) AS Avg_riskscore FROM Risk_score;");

        const totalsocialscore= await sql.query("Select AVG([Risk_Model.socialFootprintScore]) AS Avg_socialscore FROM Risk_score;");

        const digitalfootprint= await sql.query("SELECT [Risk_Model.digitalFootprint], COUNT(*) AS value_count FROM Risk_score WHERE [Risk_Model.digitalFootprint] IS NOT NULL AND [Risk_Model.digitalFootprint] <> '' GROUP BY [Risk_Model.digitalFootprint];")


        const identityConfidenceScore= await sql.query("SELECT [Risk_Model.identityConfidence], COUNT(*) AS value_count FROM Risk_score WHERE [Risk_Model.identityConfidence] IS NOT NULL AND [Risk_Model.identityConfidence] <> '' GROUP BY [Risk_Model.identityConfidence];");
        

        const riskmodel= await sql.query("SELECT [Risk_Model.telecomRisk], COUNT(*) AS value_count FROM Risk_score WHERE [Risk_Model.telecomRisk] IS NOT NULL AND [Risk_Model.telecomRisk] <> '' GROUP BY [Risk_Model.telecomRisk]; ");
        
        const zonedata= await sql.query("SELECT [Zone], COUNT(*) AS value_count FROM Risk_score WHERE [Zone] IS NOT NULL AND [Zone] <> '' GROUP BY [Zone]; ");
        
        // const socialsites= await sql.query(`SELECT 'a23games' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.a23games] = 'Account Found'
        // UNION ALL
        // SELECT 'amazon' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.amazon] = 'Account Found'
        // UNION ALL
        // SELECT 'byjus' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.byjus] = 'Account Found'
        // UNION ALL
        // SELECT 'flipkart' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.flipkart] = 'Account Found'
        // UNION ALL
        // SELECT 'housing' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.housing] = 'Account Found'
        // UNION ALL
        // SELECT 'indiamart' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.indiamart] = 'Account Found'
        // UNION ALL
        // SELECT 'instagram' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.instagram] = 'Account Found'
        // UNION ALL
        // SELECT 'jeevansaathi' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.jeevansaathi] = 'Account Found'
        // UNION ALL
        // SELECT 'jiomart' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.jiomart] = 'Account Found'
        // UNION ALL
        // SELECT 'my11' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.my11] = 'Account Found'
        // UNION ALL
        // SELECT 'paytm' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.paytm] = 'Account Found'
        // UNION ALL
        // SELECT 'rummycircle' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.rummycircle] = 'Account Found'
        // UNION ALL
        // SELECT 'shaadi' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.shaadi] = 'Account Found'
        // UNION ALL
        // SELECT 'swiggy' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.swiggy] = 'Account Found'
        // UNION ALL
        // SELECT 'whatsapp' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.whatsapp] = 'Account Found'
        // UNION ALL
        // SELECT 'yatra' AS social_site, COUNT(*) AS account_found
        // FROM Risk_score
        // WHERE [Phone_Social_Premium.yatra] = 'Account Found';
        // `);
        

        const socialsites= await sql.query(`
        SELECT TOP 4 social_site AS name, account_found AS value
        FROM (
            SELECT 'a23games' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.a23games] = 'Account Found'
            UNION ALL
            SELECT 'amazon' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.amazon] = 'Account Found'
            UNION ALL
            SELECT 'byjus' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.byjus] = 'Account Found'
            UNION ALL
            SELECT 'flipkart' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.flipkart] = 'Account Found'
            UNION ALL
            SELECT 'housing' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.housing] = 'Account Found'
            UNION ALL
            SELECT 'indiamart' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.indiamart] = 'Account Found'
            UNION ALL
            SELECT 'instagram' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.instagram] = 'Account Found'
            UNION ALL
            SELECT 'jeevansaathi' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.jeevansaathi] = 'Account Found'
            UNION ALL
            SELECT 'jiomart' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.jiomart] = 'Account Found'
            UNION ALL
            SELECT 'my11' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.my11] = 'Account Found'
            UNION ALL
            SELECT 'paytm' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.paytm] = 'Account Found'
            UNION ALL
            SELECT 'rummycircle' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.rummycircle] = 'Account Found'
            UNION ALL
            SELECT 'shaadi' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.shaadi] = 'Account Found'
            UNION ALL
            SELECT 'swiggy' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.swiggy] = 'Account Found'
            UNION ALL
            SELECT 'whatsapp' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.whatsapp] = 'Account Found'
            UNION ALL
            SELECT 'yatra' AS social_site, COUNT(*) AS account_found
            FROM Risk_score
            WHERE [Phone_Social_Premium.yatra] = 'Account Found'
        ) AS subquery
        ORDER BY account_found DESC;
    `);

const totaldrivers= await sql.query("SELECT COUNT(name) FROM Risk_score;");

const averagedigitalage= await sql.query("SELECT AVG([Phone_Name_Attributes.digitalage]) FROM Risk_score;");

const prepaidPostpaid= await sql.query(`SELECT [Phone_Network.numberBillingType], COUNT(*) AS value_count
FROM Risk_score
WHERE [Phone_Network.numberBillingType] IS NOT NULL AND [Phone_Network.numberBillingType] <> ''
GROUP BY [Phone_Network.numberBillingType];
`);

const phonereachable= await sql.query(`SELECT [Phone_Network.isPhoneReachable], COUNT(*) AS value_count
FROM Risk_score
WHERE [Phone_Network.isPhoneReachable] IS NOT NULL AND [Phone_Network.isPhoneReachable] <> ''
GROUP BY [Phone_Network.isPhoneReachable];`);


const phonefootprint= await sql.query(`SELECT [Phone_Name_Attributes.phoneFootprintStrengthOverall], COUNT(*) AS value_count
FROM Risk_score
WHERE [Phone_Name_Attributes.phoneFootprintStrengthOverall] IS NOT NULL AND [Phone_Name_Attributes.phoneFootprintStrengthOverall] <> ''
GROUP BY [Phone_Name_Attributes.phoneFootprintStrengthOverall];
`);

const upicount = await sql.query(`SELECT
'Yes' AS upi,
COUNT([Phone_to_Name.vpa]) AS count
FROM Risk_score
WHERE [Phone_to_Name.vpa] IS NOT NULL AND [Phone_to_Name.vpa] <> ''

UNION ALL

SELECT
'NO' AS upi,
COUNT([Phone_to_Name.vpa]) AS count
FROM Risk_score
WHERE [Phone_to_Name.vpa] IS NULL OR [Phone_to_Name.vpa] = '';
`);





const phonenamematch= await sql.query(`SELECT AVG([Phone_Name_Attributes.nameMatchScore]) FROM Risk_score;`);





// Execute the query
const accountresult = await sql.query(`
SELECT [Phone_Number]
,[Phone_Social_Premium.a23games]
,[Phone_Social_Premium.amazon]
,[Phone_Social_Premium.byjus]
,[Phone_Social_Premium.flipkart]
,[Phone_Social_Premium.housing]
,[Phone_Social_Premium.indiamart]
,[Phone_Social_Premium.instagram]
,[Phone_Social_Premium.jeevansaathi]
,[Phone_Social_Premium.jiomart]
,[Phone_Social_Premium.my11]
,[Phone_Social_Premium.paytm]
,[Phone_Social_Premium.rummycircle]
,[Phone_Social_Premium.shaadi]
,[Phone_Social_Premium.swiggy]
,[Phone_Social_Premium.whatsapp]
,[Phone_Social_Premium.yatra]
FROM [dbo].[Risk_score]
`);

// Send the result as JSON response
// res.json(result.recordset);

// Count the number of users with more than 4 "Account Found" entries
let usersWithMoreThanFourAccounts = 0;
let usersWithMoreThanFourLessThan8Accounts=0;
let usersWithMoreThanEightAccounts=0;
accountresult.recordset.forEach(entry => {
let accountFoundCount = 0;
Object.values(entry).forEach(value => {
    if (value === "Account Found") {
        accountFoundCount++;
    }
});
if (accountFoundCount < 4) {
    usersWithMoreThanFourAccounts++;
}

if (accountFoundCount > 4 && accountFoundCount < 8) {
    usersWithMoreThanFourLessThan8Accounts++;
}

if (accountFoundCount > 8) {
    usersWithMoreThanEightAccounts++;
}

});


const acountfounddata=[{
heading:"Less than 4 accounts",
amount :usersWithMoreThanFourAccounts
},{
heading: "Between 4 to 8 acocunts",
amount: usersWithMoreThanFourLessThan8Accounts},
{
heading:"more than 8 accounts",
amount: usersWithMoreThanEightAccounts},
];


        
        const result=[{
            upibankresult: totalupiresult.recordsets,
            networksusedresult: networksused.recordset,
            riskscore: totalriskscore.recordset,
            socialscore: totalsocialscore.recordset,
            totaldigitalfootprint: digitalfootprint.recordset,
            identityConfidenceScore: identityConfidenceScore.recordset,
            totalriskmodel: riskmodel.recordset,
            zonedata: zonedata.recordset,
            totalsocialsites: socialsites.recordset,
            totaldrivers:totaldrivers.recordset,
            averagedigitalage:averagedigitalage.recordset,
            prepaidPostpaid:prepaidPostpaid.recordset,
            phonereachable:phonereachable.recordset,
            phonefootprint:phonefootprint.recordset,
            upicount:upicount.recordset,
            phonenamematch:phonenamematch.recordset,
            acountsfound: acountfounddata
        }]
        res.json(result);
        // console.log(result.recordset[0].value_count);

        //         res.json(result.recordset);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        await sql.close();
    }
    
});




app.get('/api/data', async (req,res) =>{

    try{
        //connect to the database
        await sql.connect(dbConfig);

        // var result=[];
        //Query the database to retrieve all data

        const result = await sql.query(" SELECT COUNT (DISTINCT [vehicleNo]) AS totalasset FROM [dbo].[Intellicar_Data_can]; ");
        // const result = await sql.query("SELECT * FROM Risk_Score");
        //Send the retrieved data as JSON response
        const totalAssetcount=result.recordset[0].totalasset;

        const runningassetresult = await sql.query("SELECT count (DISTINCT vehicleNo) AS totalrunning FROM [dbo].[Intellicar_Data_gps] WHERE TRY_CONVERT(float, speed) > 2 AND Doe >= DATEADD(HOUR, -1, GETDATE()); " );

        const totalrunningassetcount= runningassetresult.recordset[0].totalrunning;


        const idleresult= await sql.query("SELECT (SELECT COUNT(DISTINCT vehicleNo) AS idleasset FROM dbo.Intellicar_Data_gps) - (SELECT COUNT(DISTINCT vehicleNo) FROM dbo.Intellicar_Data_gps WHERE TRY_CONVERT(float, speed) > 2 AND Doe >= DATEADD(HOUR, -1, GETDATE())) AS CountDifference; ");

        const totalidleassetcount= idleresult.recordset[0].idleasset;
        // console.log((totalAssetcount-totalrunningassetcount)+" total idle");

        const linegraphresult= await sql.query("SELECT CONVERT(date, Doe) AS date, COUNT(DISTINCT vehicleNo) AS Distinct_Vehicles_Running FROM [dbo].[Intellicar_Data_gps] WHERE TRY_CONVERT(float, speed) > 2 GROUP BY CONVERT(date, Doe) HAVING COUNT(DISTINCT vehicleNo) > 0; ");


        console.log(linegraphresult.recordset);
        const dataToSend=[{
            totalasset: totalAssetcount,
            totalrunningasset: totalrunningassetcount,
            runningassetpercentage: (totalrunningassetcount/totalAssetcount)*100,
            totalidleasset: totalidleassetcount,
            idleassetpercentage: (totalidleassetcount)/totalAssetcount*100,
            graphdata: linegraphresult.recordset,

        }]


        res.json(dataToSend);

        //         res.json(result.recordset);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        await sql.close();
    }
    
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



