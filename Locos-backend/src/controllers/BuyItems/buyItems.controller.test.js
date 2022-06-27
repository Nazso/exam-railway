const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const buyItemController = require('./buyItems.controller');
const buyItemService = require('./buyItems.service');

jest.mock('./buyItems.service');

describe('BuyItems controller test', () => {
    const mockData = [
        {
            "_id": "62a7101aadfb5cbeb146231a",
            "username": "ClevelandBrown",
            "type": "V63",
            "little": 1,
            "middle": 3,
            "big": 2,
            "price": 15000 
        },
        {
            "_id": "62a71051adfb5cbeb146231c",
            "username": "ClevelandBrown",
            "type": "V63",
            "little": 1,
            "middle": 3,
            "big": 2,
            "price": 15000 
        },
        {
            "_id": "62aa01450e0e9068d72f043c",
            "username": "ClevelandBrown",
            "type": "V63",
            "little": 1,
            "middle": 3,
            "big": 2,
            "price": 15000          
        }];

    let response;
    let nextFunction;

    beforeEach(() => {
        buyItemService.__setMockData(mockData);

    });
    
    test('findOne() with valid id', () => {
        const BUYITEMS_ID = "62aa01450e0e9068d72f043c";
        
        const request = mockRequest({
            params: {
                id: BUYITEMS_ID
            }
        })

        response = mockResponse();
        nextFunction = jest.fn();

        return buyItemController.findOne(request, response, nextFunction)
            .then(() => {
                expect(buyItemService.findOne).toBeCalledWith(BUYITEMS_ID)
                // expect(response.json).toBeCalledWith(mockData.find(item => item.id === BUYITEMS_ID));
            })

    })

    test('findOne() with invalid id', () => {
        const INVALID_BYITEMS_ID = "8";

        const request = mockRequest({
            params: {
                id: INVALID_BYITEMS_ID 
            }
        });

        response = mockResponse();
        nextFunction = jest.fn();
        
        return buyItemController.findOne(request, response, nextFunction)
            .then(() => {
                expect(buyItemService.findOne).toBeCalledWith(INVALID_BYITEMS_ID)
                expect(nextFunction).toBeCalledWith(new createError.NotFound(`Item with ${INVALID_BYITEMS_ID} id not found!`))
            })

    })


});