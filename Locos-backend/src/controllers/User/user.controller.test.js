const { mockResponse, mockRequest } = require('jest-mock-req-res');
const createError = require('http-errors');

const userController = require('./user.controller');
const userService = require('./user.service');

jest.mock('./user.service');

describe('User controller test', () => {
    const mockData = [
        {
            "id": "62b5ea08e7c05b42a74fd735",
            "username": "Nazso",
            "Password":"2022-06-01",
            "role":"Villamos" 
        },
        {
            "id": "62b4971c383377d0c8d43df5",
            "username": "Nazso",
            "Password":"2022-06-01",
            "role":"Villamos"
        },
        {
            "id": "62b49846383377d0c8d43e04",
            "username": "Nazso",
            "Password":"2022-06-01",
            "role":"Villamos"
        }];

    let response;
    let nextFunction;

    beforeEach(() => {
        userService.__setMockData(mockData);

        response = mockResponse();
        nextFunction = jest.fn();
    })
    
    test('findOne() with valid id', () => {
        const USER_ID = "62b5ea08e7c05b42a74fd735";
        
        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });
        

        return userController.getUserById(request, response, nextFunction)
            .then(() => {
                expect(userService.findById).toBeCalledWith(USER_ID)
                // expect(response.json).toBeCalledWith(mockData.find(user => user.id === USER_ID));
            })

    })

    test('findOne() with invalid id', () => {
        const INVALID_USER_ID = "8";

        const request = mockRequest({
            params: {
                id: INVALID_USER_ID 
            }
        });

        response = mockResponse();
        nextFunction = jest.fn();
        
        return userController.getUserById(request, response, nextFunction)
            .then(() => {
                expect(userService.findById).toBeCalledWith(INVALID_USER_ID)
                // expect(nextFunction).toBeCalledWith(new createError.NotFound(`Could not send person by id:${INVALID_USER_ID}`))
            })

    })


})
