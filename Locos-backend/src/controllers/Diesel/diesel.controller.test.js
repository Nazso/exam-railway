const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const dieselController = require('./diesel.controller');
const dieselService = require('./diesel.service');
// const dieselService = require('./diesel.service');

jest.mock('./diesel.service');


describe('Diesel controller test', () => {

    const mockData = [
        {
            "id": 1,
          "type": "M62",
          "name": "Szergej",
        },
        {
            "id": 2,
          "type": "M61",
          "name": "Nohab",
        },
        {
            "id": 3,
          "type": "M63",
          "name": "Bulldog",
        },
        {
            "id": 4,
          "type": "M41",
          "name": "Csörgő",
        }
];

    let response;
    let nextFunction;

    beforeEach(() => {
        dieselService.__setMockData(mockData);

        response = mockResponse();
        nextFunction = jest.fn();
    })

    test('findOne() with valid id', () => {
        const DIESEL_ID = 1;

        const request = mockRequest({
            params: {
                id: DIESEL_ID
            }
        });

        return dieselController.findOne(request, response, nextFunction)
            .then(() => {
                expect(dieselService.findOne).toBeCalledWith(DIESEL_ID)
                expect(response.json).toBeCalledWith(mockData.find(loco => loco.id === DIESEL_ID));
            })
    })

    test('findOne() with invalid id', () => {
        const INVALID_DIESEL_ID = 8;

        const request = mockRequest({
            params: {
                id: INVALID_DIESEL_ID 
            }
        });

        
        return dieselController.findOne(request, response, nextFunction)
            .then(() => {
                expect(dieselService.findOne).toBeCalledWith(INVALID_DIESEL_ID)
                expect(nextFunction).toBeCalledWith(new createError.NotFound(`Locomotive with ${INVALID_DIESEL_ID} id not found!`))
                // expect(response.json).toBeCalledWith(mockData.find(loco => loco.id === INVALID_DIESEL_ID));
            })

    })
});
