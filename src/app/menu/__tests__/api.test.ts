import { Menu } from "@/models"
import { getMenuById } from "../api"
import { enableFetchMocks, MockParams } from "jest-fetch-mock"

enableFetchMocks()

beforeEach(() => { 
    fetchMock.resetMocks()
})
const mockParams: MockParams = {
    headers: { "content-type": "application/json" }
}
describe("Menu", () => {
    it("Gets menu by id", async () => {
        const id = "1"
        const date: Date = new Date()
    
        const mockResponce: Menu = {
            isActive: true,
            name: "mock menu",
            id: "1",
            categories: [],
            createdAt: date.toDateString(),
            updatedAt: date.toDateString()
        }

        fetchMock.mockResponseOnce(JSON.stringify(mockResponce), mockParams)

        const res = await getMenuById(id)

        expect(res).toEqual(mockResponce)
    })
})