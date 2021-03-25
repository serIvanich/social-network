import { ResultCodeEnum, ApiResponseType } from './../api/api';

import { usersApi } from "../api/users-api"
import { unfollow } from "./users-reducer"


jest.mock("../api/users-api")
const result: ApiResponseType = {
    data: {},
    resultCode: ResultCodeEnum.Success,
    messages: [],
}
const userAPIMock = usersApi as jest.Mocked<typeof usersApi>
userAPIMock.getUnfollow.mockReturnValue(Promise.resolve(result))
const getStateMock = jest.fn()
const dispatchMock = jest.fn()
beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.getUnfollow.mockClear()
})
test('', async () => {


    const thunk = unfollow(1)
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(4)


})