require('dotenv').config();
const config = require('config');

const supertest = require('supertest');
const mongoose = require('mongoose');
const DieselModel = require('./model/diesel.model');
const ElectricModel = require('./model/electric.model');
const UserModel = require('./model/user.model');
const app = require('./server');




describe('REST API integration tests', () => {
    const insertData = [
        {
            type: "M62",
            name: "Szergej",
            url: "xxx",
            manufacturer: "bbb",
            wheelArrangement: "ggg",
            numberOfAxels: 6,
            engine: "hhh",
            topSpeed: "fff",
            power: "kkk",
            transmission: "hhhh",
            cylinderArrangement: "ggg",
            details: "kjkdfwh"
        },
        {
            type: "M62",
            name: "Szergej",
            url: "xxx",
            manufacturer: "bbb",
            wheelArrangement: "ggg",
            numberOfAxels: 6,
            engine: "hhh",
            topSpeed: "fff",
            power: "kkk",
            transmission: "hhhh",
            cylinderArrangement: "ggg",
            details: "kjkdfwh"
        }];

        beforeEach( async () => {
            const mongoConnection = await mongoose.connect('mongodb://localhost:27017/JestDB');
            console.log('MongoDB connection is established');
            return mongoConnection;
        });

        afterEach( async () => {
            await mongoose.connection.db.dropDatabase();
            const mongoDisconnect = await mongoose.connection.close();
            console.log('MongoDB connection is closed');
            return mongoDisconnect;
        });

        test('GET/diesel endpoint test', async () => {
            await DieselModel.insertMany(insertData);
            const resp = await supertest(app).get('/diesel').expect(200);
            expect(Array.isArray(resp.body)).toBeTruthy();
            expect(resp.body.length).toBe(insertData.length);
            resp.body.forEach((diesel, index) => {
                expect(diesel.name).toBe(insertData[index].name);
                expect(diesel.type).toBe(insertData[index].type);
                expect(diesel.manufacturer).toBe(insertData[index].manufacturer);
            });
        });

})

describe('REST API integration tests', () => {
    const insertData = [
        {
            type: "M62",
            name: "Szergej",
            url: "xxx",
            manufacturer: "bbb",
            wheelArrangement: "ggg",
            numberOfAxels: 6,
            engine: "hhh",
            topSpeed: "fff",
            power: "kkk",
            typeOfElectricity: "hhhh",
            details: "kjkdfwh"
        },
        {
            type: "M62",
            name: "Szergej",
            url: "xxx",
            manufacturer: "bbb",
            wheelArrangement: "ggg",
            numberOfAxels: 6,
            engine: "hhh",
            topSpeed: "fff",
            power: "kkk",
            typeOfElectricity: "ggg",
            details: "kjkdfwh"
        }];

        beforeEach( async () => {
            const mongoConnection = await mongoose.connect('mongodb://localhost:27017/JestDB');
            console.log('MongoDB connection is established');
            return mongoConnection;
        });

        afterEach( async () => {
            await mongoose.connection.db.dropDatabase();
            const mongoDisconnect = await mongoose.connection.close();
            console.log('MongoDB connection is closed');
            return mongoDisconnect;
        });

        test('GET/electric endpoint test', async () => {
            await ElectricModel.insertMany(insertData);
            const resp = await supertest(app).get('/electric').expect(200);
            expect(Array.isArray(resp.body)).toBeTruthy();
            expect(resp.body.length).toBe(insertData.length);
            resp.body.forEach((electric, index) => {
                expect(electric.name).toBe(insertData[index].name);
                expect(electric.type).toBe(insertData[index].type);
                expect(electric.manufacturer).toBe(insertData[index].manufacturer);
            });
        });

})

describe('REST API integration tests', () => {
    const insertData = [
        {
            username: "hghg",
            email: "jujj",
            role: "kfksk"
        },
        {
            username: "jfgjjh",
            email: "okfgsnhnsfg",
            role: "llfgkllg"   
        }];

        beforeEach( async () => {
            const mongoConnection = await mongoose.connect('mongodb://localhost:27017/JestDB');
            console.log('MongoDB connection is established');
            return mongoConnection;
        });

        afterEach( async () => {
            await mongoose.connection.db.dropDatabase();
            const mongoDisconnect = await mongoose.connection.close();
            console.log('MongoDB connection is closed');
            return mongoDisconnect;
        });

        test('POST/user endpoint test', async () => {
            const newUser = {
                username: "Jack",
                email: "jg@friends.com",
                password: "xxx",
                role: "user"
            };

            const resp = await supertest(app).post('/user').send(newUser).expect(201);
    
            expect(resp.body.username).toBe(newUser.username);
            expect(resp.body.email).toBe(newUser.email);
            expect(resp.body.password).toBe(newUser.password);
            expect(resp.body.role).toBe(newUser.role);
            
        });

});