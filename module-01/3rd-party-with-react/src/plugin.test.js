const plugin = require("./plugin")
// @ponicode
describe("handleClick", () => {
    let inst

    beforeEach(() => {
        inst = new plugin.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
