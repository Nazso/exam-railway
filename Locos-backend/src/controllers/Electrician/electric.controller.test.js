const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const electricController = require('./electric.controller');
const electricService = require('./electric.service');

jest.mock('./electric.service');


describe('Electric controller test', () => {

    mockData = [
        {
            "id": 1,
            "type": "V63",
            "name": "Gigant",
            },
            {
            "id": 2,
            "type": "V43",
            "name": "Szili",
            }
    ];

    let response;
    let nextFunction;

    test('findOne() with valid id', () => {
        const ELECTRIC_ID = 1;

        const request = mockRequest({
            params: {
                id: ELECTRIC_ID
            }
        });

        response = mockResponse();
        nextFunction = jest.fn();

        return electricController.findOne(request, response, nextFunction)
            .then(() => {
                expect(electricService.findOne).toBeCalledWith(ELECTRIC_ID)
                expect(response.json).toBeCalledWith(mockData.find(loco => loco.id === ELECTRIC_ID));
            })
    })

    test('findOne() with invalid id', () => {
        const INVALID_ELECTRIC_ID = 8;

        const request = mockRequest({
            params: {
                id: INVALID_ELECTRIC_ID 
            }
        });

        
        return electricController.findOne(request, response, nextFunction)
            .then(() => {
                expect(electricService.findOne).toBeCalledWith(INVALID_ELECTRIC_ID)
                expect(nextFunction).toBeCalledWith(new createError.NotFound(`Locomotive with ${INVALID_ELECTRIC_ID} id not found!`))
            })

    })
});