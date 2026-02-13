const mongo = require("mongodb");
const {ObjectId}=require("mongodb");
const MongoClient = mongo.MongoClient;
// CREATING CONNECTION TO DATABASE
function CoN(url){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url,function(error,db){
        if(error){return reject(error)}
        console.log("Success");
        resolve(db);
        });
    });
};
// INSERT DATA IN THE DATABASE  
function InsertData(CollectionName,data){
    return new Promise((resolve,reject) => {
        CoN("mongodb://localhost:27017").then(db => {
            const dbo = db.db("Ecommerece");
            dbo.collection(CollectionName).insertOne(data,function(error,result){
                if(error){
                    reject(error)
                    return;
                }
                console.log("Data Inserted Successfully");
                resolve(result);
                db.close();
            });
        });
    });
};

// Find DATA IN THE DATABASE
function Find(CollectionName,filter={}){
    return new Promise((resolve,reject) => {
        CoN("mongodb://localhost:27017").then(db => {
            const dbo = db.db("Ecommerece");
            dbo.collection(CollectionName).find(filter).toArray(function(error,result){
                if(error){
                    reject(error)
                    return;
                }
                resolve(result);
                console.log("Objects Found Successfully");
                console.log(result);
                db.close();      
            });
        });
    });    
};
// Find ONE DATA OBJECT IN THE DATABASE
function FindOne(CollectionName,filter={}){
    return new Promise((resolve,reject) => {
        CoN("mongodb://localhost:27017").then(db => {
            const dbo = db.db("Ecommerece");
            dbo.collection(CollectionName).findOne(filter,function(error,result){
                if(error){
                    return reject(error);
                }
                resolve(result);
                console.log("Object found 1 Successfully");
                console.log(result);
                db.close();      
            });
        });
    });    
};
// UPDATE DATA IN THE DATABASE
function Update(CollectionName,id,data){
    return new Promise((resolve,reject) => {
        CoN("mongodb://localhost:27017").then(db => {
            const dbo = db.db("Ecommerece");
            dbo.collection(CollectionName).updateOne({_id: ObjectId(id)},{$set:data},function(error,result){
                if(error){
                    return reject(error);
                }
                resolve(result);
                console.log("Objects Updated Successfully");
                db.close();      
            });
        });
    });    
};
// DELETE DATA IN THE DATABASE
function Delete(CollectionName,id){
    return new Promise((resolve,reject) => {
        CoN("mongodb://localhost:27017").then(db => {
            const dbo = db.db("Ecommerece");
            dbo.collection(CollectionName).deleteOne({_id: ObjectId(id)},function(error,result){
                if(error){
                    return reject(error);
                }
                resolve(result);
                console.log("Object Deleted Successfully");
                db.close();      
            });
        });
    });    
};
module.exports={
    CoN,InsertData,Find,FindOne,Update,Delete
}